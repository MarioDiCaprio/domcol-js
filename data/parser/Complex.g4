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

// The parsed lines to prepend to the start of the document
this.tmpStart = ['vec2 colormode = vec2(0, 0);'];

// The lines of the parsed code in GLSL. They are merged later.
this.tmp = [];

// The parsed lines to append at the end of the document
this.tmpEnd = [];

this.variables = {};

// The merged tmp array, i.e. the full GLSL code
this.result = '';
}


parse:
    assignment
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


assignment:
    isPlot = PLOTTED_FUNC?
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
        if ($isPlot) {
            this.tmp.push(`
                vec2 plottedFunction(vec2 ${argument}_VAR) {
                    return ${value};
                }
            `);
        } else if (isFunction) {
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
    // multiplication
    p1 = power
    { let powers = [$p1.value]; }
    (
        TIMES?
        p2 = power
        { powers.push($p2.value); }
    )*
    { $value = this.group('multiplyC(', ', ', ')', powers); }
    |
    // division
    DIVIDE
    LEFT_BRACE p1=power RIGHT_BRACE
    LEFT_BRACE p2=power RIGHT_BRACE
    {
        let d1 = $p1.value;
        let d2 = $p2.value;
        $value = `divideC(${d1}, ${d2})`;
    }
;

// power
power returns [value]:
    // power with exponent
    f1 = atom
    { let args = [$f1.value]; }
    (
        POW
        (
            f2 = atom
            |
            LEFT_BRACE f2 = atom RIGHT_BRACE
        )
        {
            let f = $f2.value;
            args.push(f);
        }
    )*
    { $value = this.group('powC(', ', ', ')', args); }
    |
    // square root
    SQRT LEFT_BRACE a=addition RIGHT_BRACE
    { $value = `sqrtC(${$a.value})` }
;

// a function, variable, number or nested expression
atom returns [value]:
    // predefined constants (without backslash)
    c=('i' | 'e')
    { $value = $c.text + '_VAR'; }
    |
    // predefined constants (with backslash)
    '\\' c='pi'
    { $value = $c.text + '_VAR'; }
    |
    // predefined functions
    '\\'
    f=('sin' | 'cos' | 'tan' | 'log' | 'ln')
    LEFT a=addition RIGHT
    {
        let funcName = $f.text;
        let addition = $a.value;
        $value = `${funcName}C(${addition})`;
    }
    |
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

// Some non-numeric element, i.e. a function or variable
element returns [value]:
    c=CHAR
    { $value = $c.text; }
;


//////////////////////////////////////////////////////////////////////////////////


NUMBER: ('0'..'9')+ ('.' ('0'..'9')?)?;
CHAR: [a-zA-Z];

PLUS:   '+';
MINUS:  '-';
TIMES:  '\\cdot';
DIVIDE: '\\frac';
POW:  '^';
SQRT: '\\sqrt';
LEFT:   '(' | '\\left(';
RIGHT:  ')' | '\\right)';
LEFT_BRACE: '{';
RIGHT_BRACE: '}';
COMA:   ',';
SEMICOLON: ';';
EQUALS: '=';
PLOTTED_FUNC: '@';


WS: [ \n\f\r\t]+ -> skip;
LATEX_WS: '\\ '+ -> skip;
