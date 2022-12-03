// Generated from /home/mario/Documents/NODE.JS/domcol-js/data/parser/Complex.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ComplexListener from './ComplexListener.js';
import ComplexVisitor from './ComplexVisitor.js';

const serializedATN = [4,1,30,160,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,3,0,23,8,0,1,0,1,0,1,1,
3,1,28,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,37,8,1,1,1,1,1,1,1,1,1,1,2,1,
2,1,2,1,3,3,3,47,8,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,55,8,3,10,3,12,3,58,9,3,
1,3,1,3,1,4,1,4,1,4,3,4,65,8,4,1,4,1,4,1,4,5,4,70,8,4,10,4,12,4,73,9,4,1,
4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,89,8,5,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,3,6,99,8,6,1,6,1,6,5,6,103,8,6,10,6,12,6,106,9,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,116,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,140,8,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,149,8,7,1,8,3,8,152,8,8,1,8,1,8,1,8,1,9,
1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,3,1,0,15,16,1,0,2,3,1,0,6,
12,167,0,22,1,0,0,0,2,27,1,0,0,0,4,42,1,0,0,0,6,46,1,0,0,0,8,61,1,0,0,0,
10,88,1,0,0,0,12,115,1,0,0,0,14,148,1,0,0,0,16,151,1,0,0,0,18,156,1,0,0,
0,20,23,3,2,1,0,21,23,3,4,2,0,22,20,1,0,0,0,22,21,1,0,0,0,23,24,1,0,0,0,
24,25,6,0,-1,0,25,1,1,0,0,0,26,28,5,28,0,0,27,26,1,0,0,0,27,28,1,0,0,0,28,
29,1,0,0,0,29,30,3,18,9,0,30,36,6,1,-1,0,31,32,5,21,0,0,32,33,3,18,9,0,33,
34,5,22,0,0,34,35,6,1,-1,0,35,37,1,0,0,0,36,31,1,0,0,0,36,37,1,0,0,0,37,
38,1,0,0,0,38,39,5,27,0,0,39,40,3,6,3,0,40,41,6,1,-1,0,41,3,1,0,0,0,42,43,
5,1,0,0,43,44,6,2,-1,0,44,5,1,0,0,0,45,47,7,0,0,0,46,45,1,0,0,0,46,47,1,
0,0,0,47,48,1,0,0,0,48,49,3,8,4,0,49,56,6,3,-1,0,50,51,7,0,0,0,51,52,3,8,
4,0,52,53,6,3,-1,0,53,55,1,0,0,0,54,50,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,
0,56,57,1,0,0,0,57,59,1,0,0,0,58,56,1,0,0,0,59,60,6,3,-1,0,60,7,1,0,0,0,
61,62,3,10,5,0,62,71,6,4,-1,0,63,65,5,17,0,0,64,63,1,0,0,0,64,65,1,0,0,0,
65,66,1,0,0,0,66,67,3,10,5,0,67,68,6,4,-1,0,68,70,1,0,0,0,69,64,1,0,0,0,
70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,
75,6,4,-1,0,75,9,1,0,0,0,76,77,3,12,6,0,77,78,6,5,-1,0,78,89,1,0,0,0,79,
80,5,18,0,0,80,81,5,23,0,0,81,82,3,6,3,0,82,83,5,24,0,0,83,84,5,23,0,0,84,
85,3,6,3,0,85,86,5,24,0,0,86,87,6,5,-1,0,87,89,1,0,0,0,88,76,1,0,0,0,88,
79,1,0,0,0,89,11,1,0,0,0,90,91,3,14,7,0,91,104,6,6,-1,0,92,98,5,19,0,0,93,
99,3,14,7,0,94,95,5,23,0,0,95,96,3,14,7,0,96,97,5,24,0,0,97,99,1,0,0,0,98,
93,1,0,0,0,98,94,1,0,0,0,99,100,1,0,0,0,100,101,6,6,-1,0,101,103,1,0,0,0,
102,92,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,107,1,
0,0,0,106,104,1,0,0,0,107,108,6,6,-1,0,108,116,1,0,0,0,109,110,5,20,0,0,
110,111,5,23,0,0,111,112,3,6,3,0,112,113,5,24,0,0,113,114,6,6,-1,0,114,116,
1,0,0,0,115,90,1,0,0,0,115,109,1,0,0,0,116,13,1,0,0,0,117,118,7,1,0,0,118,
149,6,7,-1,0,119,120,5,4,0,0,120,121,5,5,0,0,121,149,6,7,-1,0,122,123,5,
4,0,0,123,124,7,2,0,0,124,125,5,21,0,0,125,126,3,6,3,0,126,127,5,22,0,0,
127,128,6,7,-1,0,128,149,1,0,0,0,129,130,3,16,8,0,130,131,6,7,-1,0,131,149,
1,0,0,0,132,133,3,18,9,0,133,139,6,7,-1,0,134,135,5,21,0,0,135,136,3,6,3,
0,136,137,5,22,0,0,137,138,6,7,-1,0,138,140,1,0,0,0,139,134,1,0,0,0,139,
140,1,0,0,0,140,141,1,0,0,0,141,142,6,7,-1,0,142,149,1,0,0,0,143,144,5,21,
0,0,144,145,3,6,3,0,145,146,5,22,0,0,146,147,6,7,-1,0,147,149,1,0,0,0,148,
117,1,0,0,0,148,119,1,0,0,0,148,122,1,0,0,0,148,129,1,0,0,0,148,132,1,0,
0,0,148,143,1,0,0,0,149,15,1,0,0,0,150,152,7,0,0,0,151,150,1,0,0,0,151,152,
1,0,0,0,152,153,1,0,0,0,153,154,5,13,0,0,154,155,6,8,-1,0,155,17,1,0,0,0,
156,157,5,14,0,0,157,158,6,9,-1,0,158,19,1,0,0,0,14,22,27,36,46,56,64,71,
88,98,104,115,139,148,151];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ComplexParser extends antlr4.Parser {

    static grammarFileName = "Complex.g4";
    static literalNames = [ null, "'\\operatorname{Mandelbrot}'", "'i'", 
                            "'e'", "'\\'", "'pi'", "'sin'", "'cos'", "'tan'", 
                            "'log'", "'ln'", "'Re'", "'Im'", null, null, 
                            "'+'", "'-'", "'\\cdot'", "'\\frac'", "'^'", 
                            "'\\sqrt'", null, null, "'{'", "'}'", "','", 
                            "';'", "'='", "'@'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "NUMBER", "CHAR", 
                             "PLUS", "MINUS", "TIMES", "DIVIDE", "POW", 
                             "SQRT", "LEFT", "RIGHT", "LEFT_BRACE", "RIGHT_BRACE", 
                             "COMA", "SEMICOLON", "EQUALS", "PLOTTED_FUNC", 
                             "WS", "LATEX_WS" ];
    static ruleNames = [ "parse", "assignment", "fractal", "addition", "multiplication", 
                         "fractionOrPower", "power", "atom", "num", "element" ];

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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ComplexParser.CHAR:
	        case ComplexParser.PLOTTED_FUNC:
	            this.state = 20;
	            this.assignment();
	            break;
	        case ComplexParser.T__0:
	            this.state = 21;
	            this.fractal();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ComplexParser.RULE_assignment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ComplexParser.PLOTTED_FUNC) {
	            this.state = 26;
	            localctx.isPlot = this.match(ComplexParser.PLOTTED_FUNC);
	        }

	        this.state = 29;
	        localctx.c = this.element();

	                let isFunction = false;
	                let variable = null;
	                let name = localctx.c.value;
	                let argument = null;
	            
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ComplexParser.LEFT) {
	            this.state = 31;
	            this.match(ComplexParser.LEFT);
	            this.state = 32;
	            localctx.c1 = this.element();
	            this.state = 33;
	            this.match(ComplexParser.RIGHT);

	                        isFunction = true;
	                        argument = localctx.c1.value;
	                    
	        }

	        this.state = 38;
	        this.match(ComplexParser.EQUALS);
	        this.state = 39;
	        localctx.a = this.addition();

	                let value = localctx.a.value;
	                if (localctx.isPlot) {
	                    this.tmpStart.push('vec2 colormode = vec2(0, 0);');
	                    this.tmpEnd.push(`
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



	fractal() {
	    let localctx = new FractalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ComplexParser.RULE_fractal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(ComplexParser.T__0);

	                this.tmpStart.push('vec2 colormode = vec2(1, 0);');
	                this.tmpEnd.push(`
	                    vec2 plottedFunction(vec2 z) {
	                        return Mandelbrot(z);
	                    }
	                `);
	            
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
	    this.enterRule(localctx, 6, ComplexParser.RULE_addition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 45;
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
	        this.state = 48;
	        localctx.m1 = this.multiplication();

	                let pm1 = ((localctx.pm1===null ? null : localctx.pm1.text) == null)? '+' : (localctx.pm1===null ? null : localctx.pm1.text);
	                let m1 = localctx.m1.value;
	                let product = [`multiplyC(vec2(${pm1}1.0, 0.0), ${m1})`];
	            
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ComplexParser.PLUS || _la===ComplexParser.MINUS) {
	            this.state = 50;
	            localctx.pm = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ComplexParser.PLUS || _la===ComplexParser.MINUS)) {
	                localctx.pm = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 51;
	            localctx.m2 = this.multiplication();

	                        let pm = (localctx.pm===null ? null : localctx.pm.text);
	                        let m = localctx.m2.value;
	                        product.push(`multiplyC(vec2(${pm}1.0, 0.0), ${m})`);
	                    
	            this.state = 58;
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
	    this.enterRule(localctx, 8, ComplexParser.RULE_multiplication);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        localctx.p1 = this.fractionOrPower();
	         let powers = [localctx.p1.value]; 
	        this.state = 71;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 64;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===ComplexParser.TIMES) {
	                    this.state = 63;
	                    this.match(ComplexParser.TIMES);
	                }

	                this.state = 66;
	                localctx.p2 = this.fractionOrPower();
	                 powers.push(localctx.p2.value);  
	            }
	            this.state = 73;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	fractionOrPower() {
	    let localctx = new FractionOrPowerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ComplexParser.RULE_fractionOrPower);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ComplexParser.T__1:
	        case ComplexParser.T__2:
	        case ComplexParser.T__3:
	        case ComplexParser.NUMBER:
	        case ComplexParser.CHAR:
	        case ComplexParser.PLUS:
	        case ComplexParser.MINUS:
	        case ComplexParser.SQRT:
	        case ComplexParser.LEFT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            localctx.p = this.power();
	             localctx.value =  localctx.p.value 
	            break;
	        case ComplexParser.DIVIDE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.match(ComplexParser.DIVIDE);
	            this.state = 80;
	            this.match(ComplexParser.LEFT_BRACE);
	            this.state = 81;
	            localctx.a1 = this.addition();
	            this.state = 82;
	            this.match(ComplexParser.RIGHT_BRACE);
	            this.state = 83;
	            this.match(ComplexParser.LEFT_BRACE);
	            this.state = 84;
	            localctx.a2 = this.addition();
	            this.state = 85;
	            this.match(ComplexParser.RIGHT_BRACE);

	                    let d1 = localctx.a1.value;
	                    let d2 = localctx.a2.value;
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
	    this.enterRule(localctx, 12, ComplexParser.RULE_power);
	    var _la = 0; // Token type
	    try {
	        this.state = 115;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ComplexParser.T__1:
	        case ComplexParser.T__2:
	        case ComplexParser.T__3:
	        case ComplexParser.NUMBER:
	        case ComplexParser.CHAR:
	        case ComplexParser.PLUS:
	        case ComplexParser.MINUS:
	        case ComplexParser.LEFT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            localctx.f1 = this.atom();
	             let args = [localctx.f1.value]; 
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ComplexParser.POW) {
	                this.state = 92;
	                this.match(ComplexParser.POW);
	                this.state = 98;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case ComplexParser.T__1:
	                case ComplexParser.T__2:
	                case ComplexParser.T__3:
	                case ComplexParser.NUMBER:
	                case ComplexParser.CHAR:
	                case ComplexParser.PLUS:
	                case ComplexParser.MINUS:
	                case ComplexParser.LEFT:
	                    this.state = 93;
	                    localctx.f2 = this.atom();
	                    break;
	                case ComplexParser.LEFT_BRACE:
	                    this.state = 94;
	                    this.match(ComplexParser.LEFT_BRACE);
	                    this.state = 95;
	                    localctx.f2 = this.atom();
	                    this.state = 96;
	                    this.match(ComplexParser.RIGHT_BRACE);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }

	                            let f = localctx.f2.value;
	                            args.push(f);
	                        
	                this.state = 106;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	             localctx.value =  this.group('powC(', ', ', ')', args) 
	            break;
	        case ComplexParser.SQRT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 109;
	            this.match(ComplexParser.SQRT);
	            this.state = 110;
	            this.match(ComplexParser.LEFT_BRACE);
	            this.state = 111;
	            localctx.a = this.addition();
	            this.state = 112;
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
	    this.enterRule(localctx, 14, ComplexParser.RULE_atom);
	    var _la = 0; // Token type
	    try {
	        this.state = 148;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            localctx.c = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ComplexParser.T__1 || _la===ComplexParser.T__2)) {
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
	            this.state = 119;
	            this.match(ComplexParser.T__3);
	            this.state = 120;
	            localctx.c = this.match(ComplexParser.T__4);
	             localctx.value =  (localctx.c===null ? null : localctx.c.text) + '_VAR' 
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 122;
	            this.match(ComplexParser.T__3);
	            this.state = 123;
	            localctx.f = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ComplexParser.T__5) | (1 << ComplexParser.T__6) | (1 << ComplexParser.T__7) | (1 << ComplexParser.T__8) | (1 << ComplexParser.T__9) | (1 << ComplexParser.T__10) | (1 << ComplexParser.T__11))) !== 0))) {
	                localctx.f = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 124;
	            this.match(ComplexParser.LEFT);
	            this.state = 125;
	            localctx.a = this.addition();
	            this.state = 126;
	            this.match(ComplexParser.RIGHT);

	                    let funcName = (localctx.f===null ? null : localctx.f.text);
	                    let addition = localctx.a.value;
	                    localctx.value =  `${funcName}C(${addition})`
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 129;
	            localctx.n = this.num();
	             localctx.value =  localctx.n.value 
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 132;
	            localctx.el = this.element();

	                    let isFunc = false;
	                    let name = localctx.el.value;
	                
	            this.state = 139;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	            if(la_===1) {
	                this.state = 134;
	                this.match(ComplexParser.LEFT);
	                this.state = 135;
	                localctx.a = this.addition();
	                this.state = 136;
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
	            this.state = 143;
	            this.match(ComplexParser.LEFT);
	            this.state = 144;
	            localctx.a = this.addition();
	            this.state = 145;
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
	    this.enterRule(localctx, 16, ComplexParser.RULE_num);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ComplexParser.PLUS || _la===ComplexParser.MINUS) {
	            this.state = 150;
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

	        this.state = 153;
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
	    this.enterRule(localctx, 18, ComplexParser.RULE_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
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
ComplexParser.T__9 = 10;
ComplexParser.T__10 = 11;
ComplexParser.T__11 = 12;
ComplexParser.NUMBER = 13;
ComplexParser.CHAR = 14;
ComplexParser.PLUS = 15;
ComplexParser.MINUS = 16;
ComplexParser.TIMES = 17;
ComplexParser.DIVIDE = 18;
ComplexParser.POW = 19;
ComplexParser.SQRT = 20;
ComplexParser.LEFT = 21;
ComplexParser.RIGHT = 22;
ComplexParser.LEFT_BRACE = 23;
ComplexParser.RIGHT_BRACE = 24;
ComplexParser.COMA = 25;
ComplexParser.SEMICOLON = 26;
ComplexParser.EQUALS = 27;
ComplexParser.PLOTTED_FUNC = 28;
ComplexParser.WS = 29;
ComplexParser.LATEX_WS = 30;

ComplexParser.RULE_parse = 0;
ComplexParser.RULE_assignment = 1;
ComplexParser.RULE_fractal = 2;
ComplexParser.RULE_addition = 3;
ComplexParser.RULE_multiplication = 4;
ComplexParser.RULE_fractionOrPower = 5;
ComplexParser.RULE_power = 6;
ComplexParser.RULE_atom = 7;
ComplexParser.RULE_num = 8;
ComplexParser.RULE_element = 9;

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

	fractal() {
	    return this.getTypedRuleContext(FractalContext,0);
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



class FractalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_fractal;
    }


	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterFractal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitFractal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitFractal(this);
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
        this.p1 = null; // FractionOrPowerContext
        this.p2 = null; // FractionOrPowerContext
    }

	fractionOrPower = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FractionOrPowerContext);
	    } else {
	        return this.getTypedRuleContext(FractionOrPowerContext,i);
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



class FractionOrPowerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComplexParser.RULE_fractionOrPower;
        this.value = null
        this.p = null; // PowerContext
        this.a1 = null; // AdditionContext
        this.a2 = null; // AdditionContext
    }

	power() {
	    return this.getTypedRuleContext(PowerContext,0);
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


	addition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditionContext);
	    } else {
	        return this.getTypedRuleContext(AdditionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.enterFractionOrPower(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComplexListener ) {
	        listener.exitFractionOrPower(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComplexVisitor ) {
	        return visitor.visitFractionOrPower(this);
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
ComplexParser.FractalContext = FractalContext; 
ComplexParser.AdditionContext = AdditionContext; 
ComplexParser.MultiplicationContext = MultiplicationContext; 
ComplexParser.FractionOrPowerContext = FractionOrPowerContext; 
ComplexParser.PowerContext = PowerContext; 
ComplexParser.AtomContext = AtomContext; 
ComplexParser.NumContext = NumContext; 
ComplexParser.ElementContext = ElementContext; 
