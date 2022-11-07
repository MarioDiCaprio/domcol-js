// Generated from /home/mario/Documents/NODE.JS/domcol-js/data/parser/Complex.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,16,79,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,1,4,1,37,8,1,11,1,12,1,38,1,1,
1,1,3,1,43,8,1,3,1,45,8,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,
7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,
4,15,74,8,15,11,15,12,15,75,1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,
7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,1,0,2,2,0,65,90,97,
122,3,0,9,10,12,13,32,32,82,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,
0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,
1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,
0,31,1,0,0,0,1,33,1,0,0,0,3,36,1,0,0,0,5,46,1,0,0,0,7,48,1,0,0,0,9,50,1,
0,0,0,11,52,1,0,0,0,13,54,1,0,0,0,15,56,1,0,0,0,17,58,1,0,0,0,19,60,1,0,
0,0,21,62,1,0,0,0,23,64,1,0,0,0,25,66,1,0,0,0,27,68,1,0,0,0,29,70,1,0,0,
0,31,73,1,0,0,0,33,34,5,35,0,0,34,2,1,0,0,0,35,37,2,48,57,0,36,35,1,0,0,
0,37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,44,1,0,0,0,40,42,5,46,0,0,
41,43,2,48,57,0,42,41,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,40,1,0,0,0,
44,45,1,0,0,0,45,4,1,0,0,0,46,47,7,0,0,0,47,6,1,0,0,0,48,49,5,43,0,0,49,
8,1,0,0,0,50,51,5,45,0,0,51,10,1,0,0,0,52,53,5,42,0,0,53,12,1,0,0,0,54,55,
5,47,0,0,55,14,1,0,0,0,56,57,5,94,0,0,57,16,1,0,0,0,58,59,5,40,0,0,59,18,
1,0,0,0,60,61,5,41,0,0,61,20,1,0,0,0,62,63,5,44,0,0,63,22,1,0,0,0,64,65,
5,59,0,0,65,24,1,0,0,0,66,67,5,61,0,0,67,26,1,0,0,0,68,69,5,64,0,0,69,28,
1,0,0,0,70,71,5,36,0,0,71,30,1,0,0,0,72,74,7,1,0,0,73,72,1,0,0,0,74,75,1,
0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,78,6,15,0,0,78,32,1,0,
0,0,5,0,38,42,44,75,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ComplexLexer extends antlr4.Lexer {

    static grammarFileName = "Complex.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'#'", null, null, "'+'", "'-'", "'*'", "'/'", 
                         "'^'", "'('", "')'", "','", "';'", "'='", "'@'", 
                         "'$'" ];
	static symbolicNames = [ null, null, "NUMBER", "CHAR", "PLUS", "MINUS", 
                          "TIMES", "DIVIDE", "POWER", "LEFT", "RIGHT", "COMA", 
                          "SEMICOLON", "EQUALS", "ANNOT", "FLAG", "WS" ];
	static ruleNames = [ "T__0", "NUMBER", "CHAR", "PLUS", "MINUS", "TIMES", 
                      "DIVIDE", "POWER", "LEFT", "RIGHT", "COMA", "SEMICOLON", 
                      "EQUALS", "ANNOT", "FLAG", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());

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

    get atn() {
        return atn;
    }
}

ComplexLexer.EOF = antlr4.Token.EOF;
ComplexLexer.T__0 = 1;
ComplexLexer.NUMBER = 2;
ComplexLexer.CHAR = 3;
ComplexLexer.PLUS = 4;
ComplexLexer.MINUS = 5;
ComplexLexer.TIMES = 6;
ComplexLexer.DIVIDE = 7;
ComplexLexer.POWER = 8;
ComplexLexer.LEFT = 9;
ComplexLexer.RIGHT = 10;
ComplexLexer.COMA = 11;
ComplexLexer.SEMICOLON = 12;
ComplexLexer.EQUALS = 13;
ComplexLexer.ANNOT = 14;
ComplexLexer.FLAG = 15;
ComplexLexer.WS = 16;



