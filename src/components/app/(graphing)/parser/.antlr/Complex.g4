grammar Complex;

@header {

type SymbolDeclaration = {
    name: string; // The name of the symbol being declared (one character!)
    type: 'function' | 'constant'; // The type of the declaration
    value: string; // The value of the symbol being declared i.e. the value that is returned when invoking the symbol
    initialOrder: number; // The initial order of the declaration. The n-th declaration should have order n.
}

}

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
private group(start: string, delimiter: string, end: string, args: string[]): string {
    if (args.length == 1) {
        return args[0];
    }
    return start + args[0] + delimiter + this.group(start, delimiter, end, args.slice(1)) + end;
};

// The context of the current declaration
currentSymbol: (undefined | SymbolDeclaration) = undefined;

symbols: {[name: string]: SymbolDeclaration} = {};

private compareSymbolsOrder(a: typeof this.currentSymbol, b: typeof this.currentSymbol) {

}

// The parsed lines to prepend to the start of the document
tmpStart: string[] = [];

// The lines of the parsed code in GLSL. They are merged later.
tmp: string[] = [];

// The parsed lines to append at the end of the document
tmpEnd: string[] = [];

variables: {[name: string]: string | undefined} = {};

// The merged tmp array, i.e. the full GLSL code
result: string = '';

}


parse:
    assignment
    (
        SEMICOLON
        assignment
    )*
    {
        for (let key in this.variables) {
            this.tmpStart.push(`
                vec2 ${key}_DECLARED_VAR() {
                    return ${this.variables[key]};
                }`);
        }
        this.result = [
                this.tmpStart.join('\n'),
                this.tmp.join('\n'),
                this.tmpEnd.join('\n')
        ].join('\n');
    }
;


assignment:
    // If this symbol is given, then the function will be plotted!
    isPlot = PLOTTED_FUNC?
    // Assign a character
    c = element
    // First, assume the assignment is constant (i.e. not a function)
    {
        let isFunction = false;
        let variable = null;
        let name = $c.value as string;
        let argument = null;
    }
    // If paranthesis are given, then the assignment is actually a function
    (
        LEFT
        c1=element
        RIGHT
        {
            isFunction = true;
            argument = $c1.value;
        }
    )?
    // otherwise, it is indeed a constant
    EQUALS
    a = addition
    {
        let value = $a.value;
        // if the assignment should be plotted, then add it to the end of the file
        if ($isPlot.text) {
            this.tmpEnd.push(`
                vec2 plottedFunction(vec2 ${argument}_VAR) {
                    return ${value};
                }
            `);
        // else, add this assignment as usual
        } else if (isFunction) {
            this.tmp.push(`
                vec2 ${name}C(vec2 ${argument}_VAR) {
                    return ${value};
                }
            `);
        } else {
            this.variables[name] = value;
        }
    }
;


addition returns [value: string | undefined]:
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


multiplication returns [value: string | undefined]:
    p1 = fractionOrPower
    { let powers: string[] = []; }
    { powers.push($p1.value as string); }
    (
        TIMES?
        p2 = fractionOrPower
        { powers.push($p2.value as string); }
    )*
    { $value = this.group('multiplyC(', ', ', ')', powers); }
;

// One extra rule for this one, as the LaTeX syntax infers the same
// priority on powers and fractions
fractionOrPower returns [value: string | undefined]:
    p=power
    { $value = $p.value; }
    |
    DIVIDE
    LEFT_BRACE a1=addition RIGHT_BRACE
    LEFT_BRACE a2=addition RIGHT_BRACE
    {
        let d1 = $a1.value;
        let d2 = $a2.value;
        $value = `divideC(${d1}, ${d2})`;
    }
;

// power
power returns [value: string | undefined]:
    // power with exponent
    f1 = atom
    { let args: string[] = []; }
    { args.push($f1.value as string); }
    (
        POW
        (
            f2 = atom
            |
            LEFT_BRACE f2 = atom RIGHT_BRACE
        )
        {
            let f = $f2.value as string;
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
atom returns [value: string | undefined]:
    // predefined constants (without backslash)
    c=('i' | 'e')
    { $value = $c.text + '_VAR'; }
    |
    // predefined constants (with backslash)
    '\\' c='pi'
    { $value = $c.text + '_VAR'; }
    |
    // predefined functions (with backslash)
    '\\'
    f=('sin' | 'cos' | 'tan' | 'cot' | 'sec' | 'csc' | 'sinh' | 'cosh' | 'tanh' | 'log' | 'ln' | 'Re' | 'Im')
    LEFT a=addition RIGHT
    {
        let funcName = $f.text;
        let addition = $a.value;
        $value = `${funcName}C(${addition})`;
    }
    |
    // predefined functions (with \operatorname{...})
    '\\operatorname{' f='cis' '}' LEFT a=addition RIGHT
    {
        let operatorName = $f.text;
        let operatorArg = $a.value;
        $value = `${operatorName}C(${operatorArg})`;
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
        let name = $el.value as string;
    }
    // a character followed by paranthesis evaluates to a function
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
    // otherwise, it is a variable
    {
        if (!isFunc) {
            // if variable was declared earlier, it is actually a function, because GLSL constants require
            // constant expressions, but the user should be free to declare any type of constants!
            // e.g.: sin(5) is not a constant expression, but valid nonetheless
            if (name in this.variables)
                $value = `${name}_DECLARED_VAR()`;
            else
                $value = `${name}_VAR`;
        }
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
num returns [value: string | undefined]:
    n=NUMBER
    {
        let num = $n.text as string;
        if (!num.includes('.'))
            num += '.0';
        $value = `vec2(${num}, 0.0)`;
    }
;

// Some non-numeric element, i.e. a function or variable
// This will be determined later under 'atom'
element returns [value: string | undefined]:
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
