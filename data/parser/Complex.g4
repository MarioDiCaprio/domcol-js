grammar Complex;


@members {
/**
* Creates a string that represents a function with two arguments.
* Since more than two arguments can be given, the remaining arguments
* are nested inside of the function. The result is a string that represents
* the GLSL version of the expression (defined under `src/public/glsl/complexMath.glsl`).

* Example: Parse the expression `2 + 4 + 6`
* - start: `add(`
* - delimiter: `, `
* - end: `)`
* - args: [2, 4, 6]
* - result: `add(2, add(4, 6))`

* @param start The starting expression
* @param delimiter The separator for each element
* @param end The ending expression
* @param args An array of arguments for the function
* @returns The equivalent string in GLSL
*/
function group(start, delimiter, end, args) {
    if (args.length == 1) {
        return args[0];
    }
    return start + args[0] + delimiter + group(start, delimiter, end, args.slice(1)) + end;
};

// assigns the created functions to this object
this.group = group;

this.tmpStart = [];

// The lines of the parsed code in GLSL. They are merged later.
this.tmp = [];

// The parsed lines to append at the end of the document
this.tmpEnd = [];

this.variables = {};

// The merged tmp array, i.e. the full GLSL code
this.result = '';
}


parse:
    (assignment SEMICOLON | comment | flag)*
    {
        for (let key in this.variables) {
            this.tmpStart.push(`vec2 ${key} = ${this.variables[key]};`);
        }
        this.result = [
                this.tmpStart.join('\n'),
                this.tmp.join('\n'),
                this.tmpEnd.join('\n')
        ].join('\n');
    }
;


comment:
    '#' ~('#')* '#'
;


flag:
    FLAG e=element EQUALS n=num
    {
        this.variables[$e.value] = $n.value;
    }
;


assignment:
    { let annotations = []; }
    (
        an=annotation
        { annotations.push($an.value); }
    )*
    c = element
    {
        let isFunction = false;
        let variable = null;
        let name = $c.value;
        let argument = null;
    }
    (
        LEFT
        c1=element
        RIGHT
        {
            isFunction = true;
            argument = $c1.value;
        }
    )?
    EQUALS
    a = addition
    {
        let value = $a.value;
        if (isFunction) {
            let useDefaultFunctionBuilder = true;

            for (let annot of annotations) {
                if (annot === null || annot === undefined)
                    continue;
                switch (annot.name) {
                    case 'Mandelbrot':
                        useDefaultFunctionBuilder = false;
                        this.tmp.push(`
                            vec2 ${name}_MANDELBROT_FUNC(vec2 ${argument}_VAR) {
                                return ${value};
                            }

                            vec2 ${name}C(vec2 z_VAR) {
                                float trapPoint = 1e20;
                                vec2 z = vec2(0.0, 0.0);
                                float i = 0.0;
                                while (absC(z) <= 2.0 && i < fractalMaxIter) {
                                    z = addC(${name}_MANDELBROT_FUNC(z), z_VAR);
                                    i += 1.0;
                                    trapPoint = sin(min( trapPoint, absC(z) ));
                                }
                                return vec2(1.5 * trapPoint, i);
                            }
                        `);
                        break;
                    case 'Plot':
                        this.tmpEnd.push(`
                            vec2 plottedFunction(vec2 z_VAR) {
                                return ${name}C(z_VAR);
                            }
                        `);
                        break;
                }
            }

            if (useDefaultFunctionBuilder)
                this.tmp.push(`
                    vec2 ${name}C(vec2 ${argument}_VAR) {
                        return ${value};
                    }
                `);
        } else {
            this.tmp.push(`vec2 ${name}_VAR = ${value};`);
        }
    }
;


annotation returns [value]:
    { let param = {}; }
    ANNOT an=element
    (
        LEFT
        (
            e1=element EQUALS a1=element
            {
                let key = $e1.value;
                let val = $a1.value;
                param[key] = val;
            }
            (
                COMA e2=element EQUALS a2=element
                { param[$e2.value] = $a2.value; }
            )*
        )?
        RIGHT
    )?
    {
        $value = { name: $an.text, param: param };
    }
;

addition returns [value]:
    pm1 = (PLUS|MINUS)?
    m1 = multiplication
    {
        let pm1 = ($pm1.text == null)? '+' : $pm1.text;
        let m1 = $m1.value;
        let product = [`multiplyC(vec2(${pm1}1.0, 0.0), ${m1})`];
    }
    (
        pm = (PLUS|MINUS)
        m2 = multiplication
        {
            let pm = $pm.text;
            let m = $m2.value;
            product.push(`multiplyC(vec2(${pm}1.0, 0.0), ${m})`);
        }
    )*
    { $value = this.group('addC(', ', ', ')', product); }
;


multiplication returns [value]:
    p1 = power
    { let powers = [$p1.value]; }
    (
        pm = (TIMES|DIVIDE)
        p2 = power
        {
            let pm = $pm.text;
            let p = $p2.value;
            if (pm == '*') {
                powers.push(p);
            } else {
                powers.push(`divideC(vec2(1.0, 0.0), ${p})`);
            }
        }
    )*
    { $value = this.group('multiplyC(', ', ', ')', powers); }
;

// power
power returns [value]:
    f1 = atom
    { let args = [$f1.value]; }
    (
        POWER
        f2 = atom
        {
            let f = $f2.value;
            args.push(f);
        }
    )*
    { $value = this.group('powC(', ', ', ')', args); }
;

// a function, variable, number or nested expression
atom returns [value]:
    // number
    n=num
    { $value = $n.value; }
    |
    // function or variable
    el=element
    {
        let isFunc = false;
        let name = $el.value;
    }
    (
        LEFT
        a = addition
        RIGHT
        {
            isFunc = true;
            let arg = $a.value;
            $value = `${name}C(${arg})`;
        }
    )?
    {
        if (!isFunc)
            $value = `${name}_VAR`;
    }
    |
    // nested expression
    LEFT
    a=addition
    RIGHT
    {
        let arg = $a.value;
        $value = `multiplyC(vec2(1.0, 0.0), ${arg})`;
    }
;

// a number, either with or without floating point
num returns [value]:
    pm=(PLUS|MINUS)?
    n=NUMBER
    {
        let pm = ($pm.text == null)? '' : $pm.text;
        let num = $n.text;
        if (!num.includes('.'))
            num += '.0';
        $value = `vec2(${pm + num}, 0.0)`;
    }
;

// Some non-numeric element, i.e. a function, variable or annotation
element returns [value]:
    { let el = []; }
    (
        c=CHAR
        { el.push($c.text); }
    )+
    { $value = el.join(''); }
;


//////////////////////////////////////////////////////////////////////////////////


NUMBER: ('0'..'9')+ ('.' ('0'..'9')?)?;
CHAR: [a-zA-Z];

PLUS:   '+';
MINUS:  '-';
TIMES:  '*';
DIVIDE: '/';
POWER:  '^';
LEFT:   '(';
RIGHT:  ')';
COMA:   ',';
SEMICOLON: ';';
EQUALS: '=';
ANNOT: '@';
FLAG: '$';


WS: [ \n\f\r\t]+ -> skip;