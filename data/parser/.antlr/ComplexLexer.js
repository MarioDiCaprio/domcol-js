// Generated from /home/mario/Documents/NODE.JS/domcol-js/data/parser/Complex.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,27,166,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,1,
0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,
6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,4,9,85,8,9,11,9,12,9,86,1,9,1,
9,3,9,91,8,9,3,9,93,8,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,
1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,
16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,128,8,17,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,3,18,138,8,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,
1,22,1,23,1,23,1,24,1,24,1,25,4,25,153,8,25,11,25,12,25,154,1,25,1,25,1,
26,1,26,4,26,161,8,26,11,26,12,26,162,1,26,1,26,0,0,27,1,1,3,2,5,3,7,4,9,
5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,
18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,1,0,2,2,0,65,90,
97,122,3,0,9,10,12,13,32,32,172,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,
1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,
0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,
0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,
41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,
0,0,0,53,1,0,0,0,1,55,1,0,0,0,3,57,1,0,0,0,5,59,1,0,0,0,7,61,1,0,0,0,9,64,
1,0,0,0,11,68,1,0,0,0,13,72,1,0,0,0,15,76,1,0,0,0,17,80,1,0,0,0,19,84,1,
0,0,0,21,94,1,0,0,0,23,96,1,0,0,0,25,98,1,0,0,0,27,100,1,0,0,0,29,106,1,
0,0,0,31,112,1,0,0,0,33,114,1,0,0,0,35,127,1,0,0,0,37,137,1,0,0,0,39,139,
1,0,0,0,41,141,1,0,0,0,43,143,1,0,0,0,45,145,1,0,0,0,47,147,1,0,0,0,49,149,
1,0,0,0,51,152,1,0,0,0,53,160,1,0,0,0,55,56,5,105,0,0,56,2,1,0,0,0,57,58,
5,101,0,0,58,4,1,0,0,0,59,60,5,92,0,0,60,6,1,0,0,0,61,62,5,112,0,0,62,63,
5,105,0,0,63,8,1,0,0,0,64,65,5,115,0,0,65,66,5,105,0,0,66,67,5,110,0,0,67,
10,1,0,0,0,68,69,5,99,0,0,69,70,5,111,0,0,70,71,5,115,0,0,71,12,1,0,0,0,
72,73,5,116,0,0,73,74,5,97,0,0,74,75,5,110,0,0,75,14,1,0,0,0,76,77,5,108,
0,0,77,78,5,111,0,0,78,79,5,103,0,0,79,16,1,0,0,0,80,81,5,108,0,0,81,82,
5,110,0,0,82,18,1,0,0,0,83,85,2,48,57,0,84,83,1,0,0,0,85,86,1,0,0,0,86,84,
1,0,0,0,86,87,1,0,0,0,87,92,1,0,0,0,88,90,5,46,0,0,89,91,2,48,57,0,90,89,
1,0,0,0,90,91,1,0,0,0,91,93,1,0,0,0,92,88,1,0,0,0,92,93,1,0,0,0,93,20,1,
0,0,0,94,95,7,0,0,0,95,22,1,0,0,0,96,97,5,43,0,0,97,24,1,0,0,0,98,99,5,45,
0,0,99,26,1,0,0,0,100,101,5,92,0,0,101,102,5,99,0,0,102,103,5,100,0,0,103,
104,5,111,0,0,104,105,5,116,0,0,105,28,1,0,0,0,106,107,5,92,0,0,107,108,
5,102,0,0,108,109,5,114,0,0,109,110,5,97,0,0,110,111,5,99,0,0,111,30,1,0,
0,0,112,113,5,94,0,0,113,32,1,0,0,0,114,115,5,92,0,0,115,116,5,115,0,0,116,
117,5,113,0,0,117,118,5,114,0,0,118,119,5,116,0,0,119,34,1,0,0,0,120,128,
5,40,0,0,121,122,5,92,0,0,122,123,5,108,0,0,123,124,5,101,0,0,124,125,5,
102,0,0,125,126,5,116,0,0,126,128,5,40,0,0,127,120,1,0,0,0,127,121,1,0,0,
0,128,36,1,0,0,0,129,138,5,41,0,0,130,131,5,92,0,0,131,132,5,114,0,0,132,
133,5,105,0,0,133,134,5,103,0,0,134,135,5,104,0,0,135,136,5,116,0,0,136,
138,5,41,0,0,137,129,1,0,0,0,137,130,1,0,0,0,138,38,1,0,0,0,139,140,5,123,
0,0,140,40,1,0,0,0,141,142,5,125,0,0,142,42,1,0,0,0,143,144,5,44,0,0,144,
44,1,0,0,0,145,146,5,59,0,0,146,46,1,0,0,0,147,148,5,61,0,0,148,48,1,0,0,
0,149,150,5,64,0,0,150,50,1,0,0,0,151,153,7,1,0,0,152,151,1,0,0,0,153,154,
1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,156,1,0,0,0,156,157,6,25,0,0,
157,52,1,0,0,0,158,159,5,92,0,0,159,161,5,32,0,0,160,158,1,0,0,0,161,162,
1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,164,1,0,0,0,164,165,6,26,0,0,
165,54,1,0,0,0,8,0,86,90,92,127,137,154,162,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ComplexLexer extends antlr4.Lexer {

    static grammarFileName = "Complex.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'i'", "'e'", "'\\'", "'pi'", "'sin'", "'cos'", 
                         "'tan'", "'log'", "'ln'", null, null, "'+'", "'-'", 
                         "'\\cdot'", "'\\frac'", "'^'", "'\\sqrt'", null, 
                         null, "'{'", "'}'", "','", "';'", "'='", "'@'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, "NUMBER", "CHAR", "PLUS", "MINUS", 
                          "TIMES", "DIVIDE", "POW", "SQRT", "LEFT", "RIGHT", 
                          "LEFT_BRACE", "RIGHT_BRACE", "COMA", "SEMICOLON", 
                          "EQUALS", "PLOTTED_FUNC", "WS", "LATEX_WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "NUMBER", "CHAR", "PLUS", "MINUS", 
                      "TIMES", "DIVIDE", "POW", "SQRT", "LEFT", "RIGHT", 
                      "LEFT_BRACE", "RIGHT_BRACE", "COMA", "SEMICOLON", 
                      "EQUALS", "PLOTTED_FUNC", "WS", "LATEX_WS" ];

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

    get atn() {
        return atn;
    }
}

ComplexLexer.EOF = antlr4.Token.EOF;
ComplexLexer.T__0 = 1;
ComplexLexer.T__1 = 2;
ComplexLexer.T__2 = 3;
ComplexLexer.T__3 = 4;
ComplexLexer.T__4 = 5;
ComplexLexer.T__5 = 6;
ComplexLexer.T__6 = 7;
ComplexLexer.T__7 = 8;
ComplexLexer.T__8 = 9;
ComplexLexer.NUMBER = 10;
ComplexLexer.CHAR = 11;
ComplexLexer.PLUS = 12;
ComplexLexer.MINUS = 13;
ComplexLexer.TIMES = 14;
ComplexLexer.DIVIDE = 15;
ComplexLexer.POW = 16;
ComplexLexer.SQRT = 17;
ComplexLexer.LEFT = 18;
ComplexLexer.RIGHT = 19;
ComplexLexer.LEFT_BRACE = 20;
ComplexLexer.RIGHT_BRACE = 21;
ComplexLexer.COMA = 22;
ComplexLexer.SEMICOLON = 23;
ComplexLexer.EQUALS = 24;
ComplexLexer.PLOTTED_FUNC = 25;
ComplexLexer.WS = 26;
ComplexLexer.LATEX_WS = 27;



