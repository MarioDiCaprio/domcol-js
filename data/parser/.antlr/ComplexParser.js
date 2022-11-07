// Generated from /home/mario/Documents/NODE.JS/domcol-js/data/parser/Complex.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ComplexListener from './ComplexListener.js';
import ComplexVisitor from './ComplexVisitor.js';

const serializedATN = [4,1,16,176,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,1,0,
5,0,28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,1,1,1,5,1,37,8,1,10,1,12,1,40,9,1,
1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,54,8,3,10,3,12,3,57,
9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,66,8,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,86,8,4,10,4,12,4,89,9,4,3,
4,91,8,4,1,4,3,4,94,8,4,1,4,1,4,1,5,3,5,99,8,5,1,5,1,5,1,5,1,5,1,5,1,5,5,
5,107,8,5,10,5,12,5,110,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,120,8,6,
10,6,12,6,123,9,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,133,8,7,10,7,12,7,
136,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,150,8,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,3,8,159,8,8,1,9,3,9,162,8,9,1,9,1,9,1,9,1,10,1,10,
1,10,4,10,170,8,10,11,10,12,10,171,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,
14,16,18,20,0,3,1,0,1,1,1,0,4,5,1,0,6,7,182,0,29,1,0,0,0,2,34,1,0,0,0,4,
43,1,0,0,0,6,49,1,0,0,0,8,71,1,0,0,0,10,98,1,0,0,0,12,113,1,0,0,0,14,126,
1,0,0,0,16,158,1,0,0,0,18,161,1,0,0,0,20,166,1,0,0,0,22,23,3,6,3,0,23,24,
5,12,0,0,24,28,1,0,0,0,25,28,3,2,1,0,26,28,3,4,2,0,27,22,1,0,0,0,27,25,1,
0,0,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,
0,0,31,29,1,0,0,0,32,33,6,0,-1,0,33,1,1,0,0,0,34,38,5,1,0,0,35,37,8,0,0,
0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,
40,38,1,0,0,0,41,42,5,1,0,0,42,3,1,0,0,0,43,44,5,15,0,0,44,45,3,20,10,0,
45,46,5,13,0,0,46,47,3,18,9,0,47,48,6,2,-1,0,48,5,1,0,0,0,49,55,6,3,-1,0,
50,51,3,8,4,0,51,52,6,3,-1,0,52,54,1,0,0,0,53,50,1,0,0,0,54,57,1,0,0,0,55,
53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,59,3,20,10,0,59,
65,6,3,-1,0,60,61,5,9,0,0,61,62,3,20,10,0,62,63,5,10,0,0,63,64,6,3,-1,0,
64,66,1,0,0,0,65,60,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,68,5,13,0,0,68,
69,3,10,5,0,69,70,6,3,-1,0,70,7,1,0,0,0,71,72,6,4,-1,0,72,73,5,14,0,0,73,
93,3,20,10,0,74,90,5,9,0,0,75,76,3,20,10,0,76,77,5,13,0,0,77,78,3,20,10,
0,78,87,6,4,-1,0,79,80,5,11,0,0,80,81,3,20,10,0,81,82,5,13,0,0,82,83,3,20,
10,0,83,84,6,4,-1,0,84,86,1,0,0,0,85,79,1,0,0,0,86,89,1,0,0,0,87,85,1,0,
0,0,87,88,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,90,75,1,0,0,0,90,91,1,0,0,
0,91,92,1,0,0,0,92,94,5,10,0,0,93,74,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,
95,96,6,4,-1,0,96,9,1,0,0,0,97,99,7,1,0,0,98,97,1,0,0,0,98,99,1,0,0,0,99,
100,1,0,0,0,100,101,3,12,6,0,101,108,6,5,-1,0,102,103,7,1,0,0,103,104,3,
12,6,0,104,105,6,5,-1,0,105,107,1,0,0,0,106,102,1,0,0,0,107,110,1,0,0,0,
108,106,1,0,0,0,108,109,1,0,0,0,109,111,1,0,0,0,110,108,1,0,0,0,111,112,
6,5,-1,0,112,11,1,0,0,0,113,114,3,14,7,0,114,121,6,6,-1,0,115,116,7,2,0,
0,116,117,3,14,7,0,117,118,6,6,-1,0,118,120,1,0,0,0,119,115,1,0,0,0,120,
123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,124,1,0,0,0,123,121,1,0,
0,0,124,125,6,6,-1,0,125,13,1,0,0,0,126,127,3,16,8,0,127,134,6,7,-1,0,128,
129,5,8,0,0,129,130,3,16,8,0,130,131,6,7,-1,0,131,133,1,0,0,0,132,128,1,
0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,
134,1,0,0,0,137,138,6,7,-1,0,138,15,1,0,0,0,139,140,3,18,9,0,140,141,6,8,
-1,0,141,159,1,0,0,0,142,143,3,20,10,0,143,149,6,8,-1,0,144,145,5,9,0,0,
145,146,3,10,5,0,146,147,5,10,0,0,147,148,6,8,-1,0,148,150,1,0,0,0,149,144,
1,0,0,0,149,150,1,0,0,0,150,151,1,0,0,0,151,152,6,8,-1,0,152,159,1,0,0,0,
153,154,5,9,0,0,154,155,3,10,5,0,155,156,5,10,0,0,156,157,6,8,-1,0,157,159,
1,0,0,0,158,139,1,0,0,0,158,142,1,0,0,0,158,153,1,0,0,0,159,17,1,0,0,0,160,
162,7,1,0,0,161,160,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,164,5,2,
0,0,164,165,6,9,-1,0,165,19,1,0,0,0,166,169,6,10,-1,0,167,168,5,3,0,0,168,
170,6,10,-1,0,169,167,1,0,0,0,170,171,1,0,0,0,171,169,1,0,0,0,171,172,1,
0,0,0,172,173,1,0,0,0,173,174,6,10,-1,0,174,21,1,0,0,0,16,27,29,38,55,65,
87,90,93,98,108,121,134,149,158,161,171];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ComplexParser extends antlr4.Parser {

    static grammarFileName = "Complex.g4";
    static literalNames = [ null, "'#'", null, null, "'+'", "'-'", "'*'", 
                            "'/'", "'^'", "'('", "')'", "','", "';'", "'='", 
                            "'@'", "'$'" ];
    static symbolicNames = [ null, null, "NUMBER", "CHAR", "PLUS", "MINUS", 
                             "TIMES", "DIVIDE", "POWER", "LEFT", "RIGHT", 
                             "COMA", "SEMICOLON", "EQUALS", "ANNOT", "FLAG", 
                             "WS" ];
    static ruleNames = [ "parse", "comment", "flag", "assignment", "annotation", 
                         "addition", "multiplication", "power", "atom", 
                         "num", "element" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ComplexParser.ruleNames;
        this.literalNames = ComplexParser.literalNames;
        this.symbolicNames = ComplexParser.symbolicNames;

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



	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ComplexParser.RULE_parse);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ComplexParser.T__0) | (1 << ComplexParser.CHAR) | (1 << ComplexParser.ANNOT) | (1 << ComplexParser.FLAG))) !== 0)) {
	            this.state = 27;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case ComplexParser.CHAR:
	            case ComplexParser.ANNOT:
	                this.state = 22;
	                this.assignment();
	                this.state = 23;
	                this.match(ComplexParser.SEMICOLON);
	                break;
	            case ComplexParser.T__0:
	                this.state = 25;
	                this.comment();
	                break;
	            case ComplexParser.FLAG:
	                this.state = 26;
	                this.flag();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }

	                for (let key in this.variables) {
	                    this.tmpStart.push(`vec2 ${key} = ${this.variables[key]};`);
	                }
	                this.result = [
	                        this.tmpStart.join('\n'),
	                        this.tmp.join('\n'),
	                        this.tmpEnd.join('\n')
	                ].join('\n');
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ComplexParser.RULE_comment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(ComplexParser.T__0);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ComplexParser.NUMBER) | (1 << ComplexParser.CHAR) | (1 << ComplexParser.PLUS) | (1 << ComplexParser.MINUS) | (1 << ComplexParser.TIMES) | (1 << ComplexParser.DIVIDE) | (1 << ComplexParser.POWER) | (1 << ComplexParser.LEFT) | (1 << ComplexParser.RIGHT) | (1 << ComplexParser.COMA) | (1 << ComplexParser.SEMICOLON) | (1 << ComplexParser.EQUALS) | (1 << ComplexParser.ANNOT) | (1 << ComplexParser.FLAG) | (1 << ComplexParser.WS))) !== 0)) {
	            this.state = 35;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===ComplexParser.T__0) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 41;
	        this.match(ComplexParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	flag() {
	    let localctx = new FlagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ComplexParser.RULE_flag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(ComplexParser.FLAG);
	        this.state = 44;
	        localctx.e = this.element();
	        this.state = 45;
	        this.match(ComplexParser.EQUALS);
	        this.state = 46;
	        localctx.n = this.num();

	                this.variables[localctx.e.value] = localctx.n.value;
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ComplexParser.RULE_assignment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	         let annotations = []; 
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ComplexParser.ANNOT) {
	            this.state = 50;
	            localctx.an = this.annotation();
	             annotations.push(localctx.an.value); 
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 58;
	        localctx.c = this.element();

	                let isFunction = false;
	                let variable = null;
	                let name = localctx.c.value;
	                let argument = null;
	            
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ComplexParser.LEFT) {
	            this.state = 60;
	            this.match(ComplexParser.LEFT);
	            this.state = 61;
	            localctx.c1 = this.element();
	            this.state = 62;
	            this.match(ComplexParser.RIGHT);

	                        isFunction = true;
	                        argument = localctx.c1.value;
	                    
	        }

	        this.state = 67;
	        this.match(ComplexParser.EQUALS);
	        this.state = 68;
	        localctx.a = this.addition();

	                let value = localctx.a.value;
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
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	annotation() {
	    let localctx = new AnnotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ComplexParser.RULE_annotation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	         let param = {}; 
	        this.state = 72;
	        this.match(ComplexParser.ANNOT);
	        this.state = 73;
	        localctx.an = this.element();
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ComplexParser.LEFT) {
	            this.state = 74;
	            this.match(ComplexParser.LEFT);
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ComplexParser.CHAR) {
	                this.state = 75;
	                localctx.e1 = this.element();
	                this.state = 76;
	                this.match(ComplexParser.EQUALS);
	                this.state = 77;
	                localctx.a1 = this.element();

	                                let key = localctx.e1.value;
	                                let val = localctx.a1.value;
	                                param[key] = val;
	                            
	                this.state = 87;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===ComplexParser.COMA) {
	                    this.state = 79;
	                    this.match(ComplexParser.COMA);
	                    this.state = 80;
	                    localctx.e2 = this.element();
	                    this.state = 81;
	                    this.match(ComplexParser.EQUALS);
	                    this.state = 82;
	                    localctx.a2 = this.element();
	                     param[localctx.e2.value] = localctx.a2.value; 
	                    this.state = 89;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 92;
	            this.match(ComplexParser.RIGHT);
	        }


	                localctx.value =  { name: (localctx.an===null ? null : this._input.getText(new antlr4.Interval(localctx.an.start,localctx.an.stop))), param: param }
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addition() {
	    let localctx = new AdditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ComplexParser.RULE_addition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 97;
	            localctx.pm1 = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ComplexParser.PLUS || _la===ComplexParser.MINUS)) {
	                localctx.pm1 = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }

	        }
	        this.state = 100;
	        localctx.m1 = this.multiplication();

	                let pm1 = ((localctx.pm1===null ? null : localctx.pm1.text) == null)? '+' : (localctx.pm1===null ? null : localctx.pm1.text);
	                let m1 = localctx.m1.value;
	                let product = [`multiplyC(vec2(${pm1}1.0, 0.0), ${m1})`];
	            
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ComplexParser.PLUS || _la===ComplexParser.MINUS) {
	            this.state = 102;
	            localctx.pm = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ComplexParser.PLUS || _la===ComplexParser.MINUS)) {
	                localctx.pm = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 103;
	            localctx.m2 = this.multiplication();

	                        let pm = (localctx.pm===null ? null : localctx.pm.text);
	                        let m = localctx.m2.value;
	                        product.push(`multiplyC(vec2(${pm}1.0, 0.0), ${m})`);
	                    
	            this.state = 110;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	         localctx.value =  this.group('addC(', ', ', ')', product) 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplication() {
	    let localctx = new MultiplicationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ComplexParser.RULE_multiplication);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        localctx.p1 = this.power();
	         let powers = [localctx.p1.value]; 
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ComplexParser.TIMES || _la===ComplexParser.DIVIDE) {
	            this.state = 115;
	            localctx.pm = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ComplexParser.TIMES || _la===ComplexParser.DIVIDE)) {
	                localctx.pm = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 116;
	            localctx.p2 = this.power();

	                        let pm = (localctx.pm===null ? null : localctx.pm.text);
	                        let p = localctx.p2.value;
	                        if (pm == '*') {
	                            powers.push(p);
	                        } else {
	                            powers.push(`divideC(vec2(1.0, 0.0), ${p})`);
	                        }
	                    
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	         localctx.value =  this.group('multiplyC(', ', ', ')', powers) 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	power() {
	    let localctx = new PowerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ComplexParser.RULE_power);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        localctx.f1 = this.atom();
	         let args = [localctx.f1.value]; 
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ComplexParser.POWER) {
	            this.state = 128;
	            this.match(ComplexParser.POWER);
	            this.state = 129;
	            localctx.f2 = this.atom();

	                        let f = localctx.f2.value;
	                        args.push(f);
	                    
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	         localctx.value =  this.group('powC(', ', ', ')', args) 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ComplexParser.RULE_atom);
	    var _la = 0; // Token type
	    try {
	        this.state = 158;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ComplexParser.NUMBER:
	        case ComplexParser.PLUS:
	        case ComplexParser.MINUS:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 139;
	            localctx.n = this.num();
	             localctx.value =  localctx.n.value 
	            break;
	        case ComplexParser.CHAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 142;
	            localctx.el = this.element();

	                    let isFunc = false;
	                    let name = localctx.el.value;
	                
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ComplexParser.LEFT) {
	                this.state = 144;
	                this.match(ComplexParser.LEFT);
	                this.state = 145;
	                localctx.a = this.addition();
	                this.state = 146;
	                this.match(ComplexParser.RIGHT);

	                            isFunc = true;
	                            let arg = localctx.a.value;
	                            localctx.value =  `${name}C(${arg})`
	                        
	            }


	                    if (!isFunc)
	                        localctx.value =  `${name}_VAR`
	                
	            break;
	        case ComplexParser.LEFT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 153;
	            this.match(ComplexParser.LEFT);
	            this.state = 154;
	            localctx.a = this.addition();
	            this.state = 155;
	            this.match(ComplexParser.RIGHT);

	                    let arg = localctx.a.value;
	                    localctx.value =  `multiplyC(vec2(1.0, 0.0), ${arg})`
	                
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	num() {
	    let localctx = new NumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ComplexParser.RULE_num);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ComplexParser.PLUS || _la===ComplexParser.MINUS) {
	            this.state = 160;
	            localctx.pm = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ComplexParser.PLUS || _la===ComplexParser.MINUS)) {
	                localctx.pm = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 163;
	        localctx.n = this.match(ComplexParser.NUMBER);

	                let pm = ((localctx.pm===null ? null : localctx.pm.text) == null)? '' : (localctx.pm===null ? null : localctx.pm.text);
	                let num = (localctx.n===null ? null : localctx.n.text);
	                if (!num.includes('.'))
	                    num += '.0';
	                localctx.value =  `vec2(${pm + num}, 0.0)`
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ComplexParser.RULE_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	         let el = []; 
	        this.state = 169; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 167;
	        		localctx.c = this.match(ComplexParser.CHAR);
	        		 el.push((localctx.c===null ? null : localctx.c.text)); 
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 171; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,15, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	         localctx.value =  el.join('') 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ComplexParser.EOF = antlr4.Token.EOF;
ComplexParser.T__0 = 1;
ComplexParser.NUMBER = 2;
ComplexParser.CHAR = 3;
ComplexParser.PLUS = 4;
ComplexParser.MINUS = 5;
ComplexParser.TIMES = 6;
ComplexParser.DIVIDE = 7;
ComplexParser.POWER = 8;
ComplexParser.LEFT = 9;
ComplexParser.RIGHT = 10;
ComplexParser.COMA = 11;
ComplexParser.SEMICOLON = 12;
ComplexParser.EQUALS = 13;
ComplexParser.ANNOT = 14;
ComplexParser.FLAG = 15;
ComplexParser.WS = 16;

ComplexParser.RULE_parse = 0;
ComplexParser.RULE_comment = 1;
ComplexParser.RULE_flag = 2;
ComplexParser.RULE_assignment = 3;
ComplexParser.RULE_annotation = 4;
ComplexParser.RULE_addition = 5;
ComplexParser.RULE_multiplication = 6;
ComplexParser.RULE_power = 7;
ComplexParser.RULE_atom = 8;
ComplexParser.RULE_num = 9;
ComplexParser.RULE_element = 10;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_parse;
    }

	assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentContext,i);
	    }
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.SEMICOLON);
	    } else {
	        return this.getToken(ComplexParser.SEMICOLON, i);
	    }
	};


	comment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommentContext);
	    } else {
	        return this.getTypedRuleContext(CommentContext,i);
	    }
	};

	flag = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FlagContext);
	    } else {
	        return this.getTypedRuleContext(FlagContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitParse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitParse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_comment;
    }


	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitComment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitComment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FlagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_flag;
        this.e = null; // ElementContext
        this.n = null; // NumContext
    }

	FLAG() {
	    return this.getToken(ComplexParser.FLAG, 0);
	};

	EQUALS() {
	    return this.getToken(ComplexParser.EQUALS, 0);
	};

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
	};

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterFlag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitFlag(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitFlag(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_assignment;
        this.an = null; // AnnotationContext
        this.c = null; // ElementContext
        this.c1 = null; // ElementContext
        this.a = null; // AdditionContext
    }

	EQUALS() {
	    return this.getToken(ComplexParser.EQUALS, 0);
	};

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	addition() {
	    return this.getTypedRuleContext(AdditionContext,0);
	};

	LEFT() {
	    return this.getToken(ComplexParser.LEFT, 0);
	};

	RIGHT() {
	    return this.getToken(ComplexParser.RIGHT, 0);
	};

	annotation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AnnotationContext);
	    } else {
	        return this.getTypedRuleContext(AnnotationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AnnotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_annotation;
        this.value = null
        this.an = null; // ElementContext
        this.e1 = null; // ElementContext
        this.a1 = null; // ElementContext
        this.e2 = null; // ElementContext
        this.a2 = null; // ElementContext
    }

	ANNOT() {
	    return this.getToken(ComplexParser.ANNOT, 0);
	};

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	LEFT() {
	    return this.getToken(ComplexParser.LEFT, 0);
	};

	RIGHT() {
	    return this.getToken(ComplexParser.RIGHT, 0);
	};

	EQUALS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.EQUALS);
	    } else {
	        return this.getToken(ComplexParser.EQUALS, i);
	    }
	};


	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.COMA);
	    } else {
	        return this.getToken(ComplexParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitAnnotation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitAnnotation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_addition;
        this.value = null
        this.pm1 = null; // Token
        this.m1 = null; // MultiplicationContext
        this.pm = null; // Token
        this.m2 = null; // MultiplicationContext
    }

	multiplication = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicationContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicationContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.PLUS);
	    } else {
	        return this.getToken(ComplexParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.MINUS);
	    } else {
	        return this.getToken(ComplexParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterAddition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitAddition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitAddition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_multiplication;
        this.value = null
        this.p1 = null; // PowerContext
        this.pm = null; // Token
        this.p2 = null; // PowerContext
    }

	power = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PowerContext);
	    } else {
	        return this.getTypedRuleContext(PowerContext,i);
	    }
	};

	TIMES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.TIMES);
	    } else {
	        return this.getToken(ComplexParser.TIMES, i);
	    }
	};


	DIVIDE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.DIVIDE);
	    } else {
	        return this.getToken(ComplexParser.DIVIDE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterMultiplication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitMultiplication(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitMultiplication(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PowerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_power;
        this.value = null
        this.f1 = null; // AtomContext
        this.f2 = null; // AtomContext
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	POWER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.POWER);
	    } else {
	        return this.getToken(ComplexParser.POWER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterPower(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitPower(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitPower(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_atom;
        this.value = null
        this.n = null; // NumContext
        this.el = null; // ElementContext
        this.a = null; // AdditionContext
    }

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
	};

	LEFT() {
	    return this.getToken(ComplexParser.LEFT, 0);
	};

	RIGHT() {
	    return this.getToken(ComplexParser.RIGHT, 0);
	};

	addition() {
	    return this.getTypedRuleContext(AdditionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_num;
        this.value = null
        this.pm = null; // Token
        this.n = null; // Token
    }

	NUMBER() {
	    return this.getToken(ComplexParser.NUMBER, 0);
	};

	PLUS() {
	    return this.getToken(ComplexParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(ComplexParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_element;
        this.value = null
        this.c = null; // Token
    }

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.CHAR);
	    } else {
	        return this.getToken(ComplexParser.CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ComplexParser.ParseContext = ParseContext; 
ComplexParser.CommentContext = CommentContext; 
ComplexParser.FlagContext = FlagContext; 
ComplexParser.AssignmentContext = AssignmentContext; 
ComplexParser.AnnotationContext = AnnotationContext; 
ComplexParser.AdditionContext = AdditionContext; 
ComplexParser.MultiplicationContext = MultiplicationContext; 
ComplexParser.PowerContext = PowerContext; 
ComplexParser.AtomContext = AtomContext; 
ComplexParser.NumContext = NumContext; 
ComplexParser.ElementContext = ElementContext; 
