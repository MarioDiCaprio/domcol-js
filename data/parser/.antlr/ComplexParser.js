// Generated from /home/mario/Documents/NODE.JS/domcol-js/data/parser/Complex.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ComplexListener from './ComplexListener.js';
import ComplexVisitor from './ComplexVisitor.js';

const serializedATN = [4,1,27,147,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,1,3,1,21,8,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,3,1,30,8,1,1,1,1,1,1,1,1,1,1,2,3,2,37,8,2,1,2,1,2,1,2,1,2,1,2,1,
2,5,2,45,8,2,10,2,12,2,48,9,2,1,2,1,2,1,3,1,3,1,3,3,3,55,8,3,1,3,1,3,1,3,
5,3,60,8,3,10,3,12,3,63,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
3,3,76,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,86,8,4,1,4,1,4,5,4,90,8,4,
10,4,12,4,93,9,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,103,8,4,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,3,5,127,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,136,8,5,1,6,3,6,139,8,6,
1,6,1,6,1,6,1,7,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,3,1,0,12,13,1,0,1,
2,1,0,5,9,155,0,16,1,0,0,0,2,20,1,0,0,0,4,36,1,0,0,0,6,75,1,0,0,0,8,102,
1,0,0,0,10,135,1,0,0,0,12,138,1,0,0,0,14,143,1,0,0,0,16,17,3,2,1,0,17,18,
6,0,-1,0,18,1,1,0,0,0,19,21,5,25,0,0,20,19,1,0,0,0,20,21,1,0,0,0,21,22,1,
0,0,0,22,23,3,14,7,0,23,29,6,1,-1,0,24,25,5,18,0,0,25,26,3,14,7,0,26,27,
5,19,0,0,27,28,6,1,-1,0,28,30,1,0,0,0,29,24,1,0,0,0,29,30,1,0,0,0,30,31,
1,0,0,0,31,32,5,24,0,0,32,33,3,4,2,0,33,34,6,1,-1,0,34,3,1,0,0,0,35,37,7,
0,0,0,36,35,1,0,0,0,36,37,1,0,0,0,37,38,1,0,0,0,38,39,3,6,3,0,39,46,6,2,
-1,0,40,41,7,0,0,0,41,42,3,6,3,0,42,43,6,2,-1,0,43,45,1,0,0,0,44,40,1,0,
0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,49,1,0,0,0,48,46,1,0,0,
0,49,50,6,2,-1,0,50,5,1,0,0,0,51,52,3,8,4,0,52,61,6,3,-1,0,53,55,5,14,0,
0,54,53,1,0,0,0,54,55,1,0,0,0,55,56,1,0,0,0,56,57,3,8,4,0,57,58,6,3,-1,0,
58,60,1,0,0,0,59,54,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,
64,1,0,0,0,63,61,1,0,0,0,64,65,6,3,-1,0,65,76,1,0,0,0,66,67,5,15,0,0,67,
68,5,20,0,0,68,69,3,8,4,0,69,70,5,21,0,0,70,71,5,20,0,0,71,72,3,8,4,0,72,
73,5,21,0,0,73,74,6,3,-1,0,74,76,1,0,0,0,75,51,1,0,0,0,75,66,1,0,0,0,76,
7,1,0,0,0,77,78,3,10,5,0,78,91,6,4,-1,0,79,85,5,16,0,0,80,86,3,10,5,0,81,
82,5,20,0,0,82,83,3,10,5,0,83,84,5,21,0,0,84,86,1,0,0,0,85,80,1,0,0,0,85,
81,1,0,0,0,86,87,1,0,0,0,87,88,6,4,-1,0,88,90,1,0,0,0,89,79,1,0,0,0,90,93,
1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,94,1,0,0,0,93,91,1,0,0,0,94,95,6,
4,-1,0,95,103,1,0,0,0,96,97,5,17,0,0,97,98,5,20,0,0,98,99,3,4,2,0,99,100,
5,21,0,0,100,101,6,4,-1,0,101,103,1,0,0,0,102,77,1,0,0,0,102,96,1,0,0,0,
103,9,1,0,0,0,104,105,7,1,0,0,105,136,6,5,-1,0,106,107,5,3,0,0,107,108,5,
4,0,0,108,136,6,5,-1,0,109,110,5,3,0,0,110,111,7,2,0,0,111,112,5,18,0,0,
112,113,3,4,2,0,113,114,5,19,0,0,114,115,6,5,-1,0,115,136,1,0,0,0,116,117,
3,12,6,0,117,118,6,5,-1,0,118,136,1,0,0,0,119,120,3,14,7,0,120,126,6,5,-1,
0,121,122,5,18,0,0,122,123,3,4,2,0,123,124,5,19,0,0,124,125,6,5,-1,0,125,
127,1,0,0,0,126,121,1,0,0,0,126,127,1,0,0,0,127,128,1,0,0,0,128,129,6,5,
-1,0,129,136,1,0,0,0,130,131,5,18,0,0,131,132,3,4,2,0,132,133,5,19,0,0,133,
134,6,5,-1,0,134,136,1,0,0,0,135,104,1,0,0,0,135,106,1,0,0,0,135,109,1,0,
0,0,135,116,1,0,0,0,135,119,1,0,0,0,135,130,1,0,0,0,136,11,1,0,0,0,137,139,
7,0,0,0,138,137,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,141,5,10,0,0,
141,142,6,6,-1,0,142,13,1,0,0,0,143,144,5,11,0,0,144,145,6,7,-1,0,145,15,
1,0,0,0,13,20,29,36,46,54,61,75,85,91,102,126,135,138];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ComplexParser extends antlr4.Parser {

    static grammarFileName = "Complex.g4";
    static literalNames = [ null, "'i'", "'e'", "'\\'", "'pi'", "'sin'", 
                            "'cos'", "'tan'", "'log'", "'ln'", null, null, 
                            "'+'", "'-'", "'\\cdot'", "'\\frac'", "'^'", 
                            "'\\sqrt'", null, null, "'{'", "'}'", "','", 
                            "';'", "'='", "'@'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "NUMBER", "CHAR", "PLUS", "MINUS", 
                             "TIMES", "DIVIDE", "POW", "SQRT", "LEFT", "RIGHT", 
                             "LEFT_BRACE", "RIGHT_BRACE", "COMA", "SEMICOLON", 
                             "EQUALS", "PLOTTED_FUNC", "WS", "LATEX_WS" ];
    static ruleNames = [ "parse", "assignment", "addition", "multiplication", 
                         "power", "atom", "num", "element" ];

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



	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ComplexParser.RULE_parse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.assignment();

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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ComplexParser.RULE_assignment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ComplexParser.PLOTTED_FUNC) {
	            this.state = 19;
	            localctx.isPlot = this.match(ComplexParser.PLOTTED_FUNC);
	        }

	        this.state = 22;
	        localctx.c = this.element();

	                let isFunction = false;
	                let variable = null;
	                let name = localctx.c.value;
	                let argument = null;
	            
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ComplexParser.LEFT) {
	            this.state = 24;
	            this.match(ComplexParser.LEFT);
	            this.state = 25;
	            localctx.c1 = this.element();
	            this.state = 26;
	            this.match(ComplexParser.RIGHT);

	                        isFunction = true;
	                        argument = localctx.c1.value;
	                    
	        }

	        this.state = 31;
	        this.match(ComplexParser.EQUALS);
	        this.state = 32;
	        localctx.a = this.addition();

	                let value = localctx.a.value;
	                if (localctx.isPlot) {
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
	    this.enterRule(localctx, 4, ComplexParser.RULE_addition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 35;
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
	        this.state = 38;
	        localctx.m1 = this.multiplication();

	                let pm1 = ((localctx.pm1===null ? null : localctx.pm1.text) == null)? '+' : (localctx.pm1===null ? null : localctx.pm1.text);
	                let m1 = localctx.m1.value;
	                let product = [`multiplyC(vec2(${pm1}1.0, 0.0), ${m1})`];
	            
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ComplexParser.PLUS || _la===ComplexParser.MINUS) {
	            this.state = 40;
	            localctx.pm = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ComplexParser.PLUS || _la===ComplexParser.MINUS)) {
	                localctx.pm = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 41;
	            localctx.m2 = this.multiplication();

	                        let pm = (localctx.pm===null ? null : localctx.pm.text);
	                        let m = localctx.m2.value;
	                        product.push(`multiplyC(vec2(${pm}1.0, 0.0), ${m})`);
	                    
	            this.state = 48;
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
	    this.enterRule(localctx, 6, ComplexParser.RULE_multiplication);
	    var _la = 0; // Token type
	    try {
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ComplexParser.T__0:
	        case ComplexParser.T__1:
	        case ComplexParser.T__2:
	        case ComplexParser.NUMBER:
	        case ComplexParser.CHAR:
	        case ComplexParser.PLUS:
	        case ComplexParser.MINUS:
	        case ComplexParser.SQRT:
	        case ComplexParser.LEFT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            localctx.p1 = this.power();
	             let powers = [localctx.p1.value]; 
	            this.state = 61;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 54;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===ComplexParser.TIMES) {
	                        this.state = 53;
	                        this.match(ComplexParser.TIMES);
	                    }

	                    this.state = 56;
	                    localctx.p2 = this.power();
	                     powers.push(localctx.p2.value);  
	                }
	                this.state = 63;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	            }

	             localctx.value =  this.group('multiplyC(', ', ', ')', powers) 
	            break;
	        case ComplexParser.DIVIDE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.match(ComplexParser.DIVIDE);
	            this.state = 67;
	            this.match(ComplexParser.LEFT_BRACE);
	            this.state = 68;
	            localctx.p1 = this.power();
	            this.state = 69;
	            this.match(ComplexParser.RIGHT_BRACE);
	            this.state = 70;
	            this.match(ComplexParser.LEFT_BRACE);
	            this.state = 71;
	            localctx.p2 = this.power();
	            this.state = 72;
	            this.match(ComplexParser.RIGHT_BRACE);

	                    let d1 = localctx.p1.value;
	                    let d2 = localctx.p2.value;
	                    localctx.value =  `divideC(${d1}, ${d2})`
	                
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



	power() {
	    let localctx = new PowerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ComplexParser.RULE_power);
	    var _la = 0; // Token type
	    try {
	        this.state = 102;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ComplexParser.T__0:
	        case ComplexParser.T__1:
	        case ComplexParser.T__2:
	        case ComplexParser.NUMBER:
	        case ComplexParser.CHAR:
	        case ComplexParser.PLUS:
	        case ComplexParser.MINUS:
	        case ComplexParser.LEFT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            localctx.f1 = this.atom();
	             let args = [localctx.f1.value]; 
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ComplexParser.POW) {
	                this.state = 79;
	                this.match(ComplexParser.POW);
	                this.state = 85;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case ComplexParser.T__0:
	                case ComplexParser.T__1:
	                case ComplexParser.T__2:
	                case ComplexParser.NUMBER:
	                case ComplexParser.CHAR:
	                case ComplexParser.PLUS:
	                case ComplexParser.MINUS:
	                case ComplexParser.LEFT:
	                    this.state = 80;
	                    localctx.f2 = this.atom();
	                    break;
	                case ComplexParser.LEFT_BRACE:
	                    this.state = 81;
	                    this.match(ComplexParser.LEFT_BRACE);
	                    this.state = 82;
	                    localctx.f2 = this.atom();
	                    this.state = 83;
	                    this.match(ComplexParser.RIGHT_BRACE);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }

	                            let f = localctx.f2.value;
	                            args.push(f);
	                        
	                this.state = 93;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	             localctx.value =  this.group('powC(', ', ', ')', args) 
	            break;
	        case ComplexParser.SQRT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.match(ComplexParser.SQRT);
	            this.state = 97;
	            this.match(ComplexParser.LEFT_BRACE);
	            this.state = 98;
	            localctx.a = this.addition();
	            this.state = 99;
	            this.match(ComplexParser.RIGHT_BRACE);
	             localctx.value = `sqrtC(${localctx.a.value})` 
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ComplexParser.RULE_atom);
	    var _la = 0; // Token type
	    try {
	        this.state = 135;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            localctx.c = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ComplexParser.T__0 || _la===ComplexParser.T__1)) {
	                localctx.c = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	             localctx.value =  (localctx.c===null ? null : localctx.c.text) + '_VAR' 
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.match(ComplexParser.T__2);
	            this.state = 107;
	            localctx.c = this.match(ComplexParser.T__3);
	             localctx.value =  (localctx.c===null ? null : localctx.c.text) + '_VAR' 
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 109;
	            this.match(ComplexParser.T__2);
	            this.state = 110;
	            localctx.f = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ComplexParser.T__4) | (1 << ComplexParser.T__5) | (1 << ComplexParser.T__6) | (1 << ComplexParser.T__7) | (1 << ComplexParser.T__8))) !== 0))) {
	                localctx.f = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 111;
	            this.match(ComplexParser.LEFT);
	            this.state = 112;
	            localctx.a = this.addition();
	            this.state = 113;
	            this.match(ComplexParser.RIGHT);

	                    let funcName = (localctx.f===null ? null : localctx.f.text);
	                    let addition = localctx.a.value;
	                    localctx.value =  `${funcName}C(${addition})`
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 116;
	            localctx.n = this.num();
	             localctx.value =  localctx.n.value 
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 119;
	            localctx.el = this.element();

	                    let isFunc = false;
	                    let name = localctx.el.value;
	                
	            this.state = 126;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            if(la_===1) {
	                this.state = 121;
	                this.match(ComplexParser.LEFT);
	                this.state = 122;
	                localctx.a = this.addition();
	                this.state = 123;
	                this.match(ComplexParser.RIGHT);

	                            isFunc = true;
	                            let arg = localctx.a.value;
	                            localctx.value =  `${name}C(${arg})`
	                        

	            }

	                    if (!isFunc)
	                        localctx.value =  `${name}_VAR`
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 130;
	            this.match(ComplexParser.LEFT);
	            this.state = 131;
	            localctx.a = this.addition();
	            this.state = 132;
	            this.match(ComplexParser.RIGHT);

	                    let arg = localctx.a.value;
	                    localctx.value =  `multiplyC(vec2(1.0, 0.0), ${arg})`
	                
	            break;

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
	    this.enterRule(localctx, 12, ComplexParser.RULE_num);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ComplexParser.PLUS || _la===ComplexParser.MINUS) {
	            this.state = 137;
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

	        this.state = 140;
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
	    this.enterRule(localctx, 14, ComplexParser.RULE_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        localctx.c = this.match(ComplexParser.CHAR);
	         localctx.value =  (localctx.c===null ? null : localctx.c.text) 
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
ComplexParser.T__1 = 2;
ComplexParser.T__2 = 3;
ComplexParser.T__3 = 4;
ComplexParser.T__4 = 5;
ComplexParser.T__5 = 6;
ComplexParser.T__6 = 7;
ComplexParser.T__7 = 8;
ComplexParser.T__8 = 9;
ComplexParser.NUMBER = 10;
ComplexParser.CHAR = 11;
ComplexParser.PLUS = 12;
ComplexParser.MINUS = 13;
ComplexParser.TIMES = 14;
ComplexParser.DIVIDE = 15;
ComplexParser.POW = 16;
ComplexParser.SQRT = 17;
ComplexParser.LEFT = 18;
ComplexParser.RIGHT = 19;
ComplexParser.LEFT_BRACE = 20;
ComplexParser.RIGHT_BRACE = 21;
ComplexParser.COMA = 22;
ComplexParser.SEMICOLON = 23;
ComplexParser.EQUALS = 24;
ComplexParser.PLOTTED_FUNC = 25;
ComplexParser.WS = 26;
ComplexParser.LATEX_WS = 27;

ComplexParser.RULE_parse = 0;
ComplexParser.RULE_assignment = 1;
ComplexParser.RULE_addition = 2;
ComplexParser.RULE_multiplication = 3;
ComplexParser.RULE_power = 4;
ComplexParser.RULE_atom = 5;
ComplexParser.RULE_num = 6;
ComplexParser.RULE_element = 7;

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

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
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
        this.isPlot = null; // Token
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

	PLOTTED_FUNC() {
	    return this.getToken(ComplexParser.PLOTTED_FUNC, 0);
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


	DIVIDE() {
	    return this.getToken(ComplexParser.DIVIDE, 0);
	};

	LEFT_BRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.LEFT_BRACE);
	    } else {
	        return this.getToken(ComplexParser.LEFT_BRACE, i);
	    }
	};


	RIGHT_BRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.RIGHT_BRACE);
	    } else {
	        return this.getToken(ComplexParser.RIGHT_BRACE, i);
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
        this.a = null; // AdditionContext
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

	POW = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.POW);
	    } else {
	        return this.getToken(ComplexParser.POW, i);
	    }
	};


	LEFT_BRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.LEFT_BRACE);
	    } else {
	        return this.getToken(ComplexParser.LEFT_BRACE, i);
	    }
	};


	RIGHT_BRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComplexParser.RIGHT_BRACE);
	    } else {
	        return this.getToken(ComplexParser.RIGHT_BRACE, i);
	    }
	};


	SQRT() {
	    return this.getToken(ComplexParser.SQRT, 0);
	};

	addition() {
	    return this.getTypedRuleContext(AdditionContext,0);
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
        this.c = null; // Token
        this.f = null; // Token
        this.a = null; // AdditionContext
        this.n = null; // NumContext
        this.el = null; // ElementContext
    }

	LEFT() {
	    return this.getToken(ComplexParser.LEFT, 0);
	};

	RIGHT() {
	    return this.getToken(ComplexParser.RIGHT, 0);
	};

	addition() {
	    return this.getTypedRuleContext(AdditionContext,0);
	};

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
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

	CHAR() {
	    return this.getToken(ComplexParser.CHAR, 0);
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
ComplexParser.AssignmentContext = AssignmentContext; 
ComplexParser.AdditionContext = AdditionContext; 
ComplexParser.MultiplicationContext = MultiplicationContext; 
ComplexParser.PowerContext = PowerContext; 
ComplexParser.AtomContext = AtomContext; 
ComplexParser.NumContext = NumContext; 
ComplexParser.ElementContext = ElementContext; 
