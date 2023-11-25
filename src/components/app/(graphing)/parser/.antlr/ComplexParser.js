// Generated from C:/Users/mario/OneDrive/Desktop/complexify/src/components/app/(graphing)/parser/Complex.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ComplexListener from './ComplexListener.js';
import ComplexVisitor from './ComplexVisitor.js';

const serializedATN = [4,1,37,157,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,3,1,23,8,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,3,1,32,8,1,1,1,1,1,1,1,1,1,1,2,3,2,39,8,2,1,2,1,2,1,2,1,
2,1,2,1,2,5,2,47,8,2,10,2,12,2,50,9,2,1,2,1,2,1,3,1,3,1,3,3,3,57,8,3,1,3,
1,3,1,3,5,3,62,8,3,10,3,12,3,65,9,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,3,4,81,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,91,8,
5,1,5,1,5,5,5,95,8,5,10,5,12,5,98,9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,
5,108,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,140,8,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,149,8,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,0,0,9,
0,2,4,6,8,10,12,14,16,0,3,1,0,22,23,1,0,1,2,1,0,5,17,164,0,18,1,0,0,0,2,
22,1,0,0,0,4,38,1,0,0,0,6,53,1,0,0,0,8,80,1,0,0,0,10,107,1,0,0,0,12,148,
1,0,0,0,14,150,1,0,0,0,16,153,1,0,0,0,18,19,3,2,1,0,19,20,6,0,-1,0,20,1,
1,0,0,0,21,23,5,35,0,0,22,21,1,0,0,0,22,23,1,0,0,0,23,24,1,0,0,0,24,25,3,
16,8,0,25,31,6,1,-1,0,26,27,5,28,0,0,27,28,3,16,8,0,28,29,5,29,0,0,29,30,
6,1,-1,0,30,32,1,0,0,0,31,26,1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,5,
34,0,0,34,35,3,4,2,0,35,36,6,1,-1,0,36,3,1,0,0,0,37,39,7,0,0,0,38,37,1,0,
0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,3,6,3,0,41,48,6,2,-1,0,42,43,7,0,0,
0,43,44,3,6,3,0,44,45,6,2,-1,0,45,47,1,0,0,0,46,42,1,0,0,0,47,50,1,0,0,0,
48,46,1,0,0,0,48,49,1,0,0,0,49,51,1,0,0,0,50,48,1,0,0,0,51,52,6,2,-1,0,52,
5,1,0,0,0,53,54,3,8,4,0,54,63,6,3,-1,0,55,57,5,24,0,0,56,55,1,0,0,0,56,57,
1,0,0,0,57,58,1,0,0,0,58,59,3,8,4,0,59,60,6,3,-1,0,60,62,1,0,0,0,61,56,1,
0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,
0,0,66,67,6,3,-1,0,67,7,1,0,0,0,68,69,3,10,5,0,69,70,6,4,-1,0,70,81,1,0,
0,0,71,72,5,25,0,0,72,73,5,30,0,0,73,74,3,4,2,0,74,75,5,31,0,0,75,76,5,30,
0,0,76,77,3,4,2,0,77,78,5,31,0,0,78,79,6,4,-1,0,79,81,1,0,0,0,80,68,1,0,
0,0,80,71,1,0,0,0,81,9,1,0,0,0,82,83,3,12,6,0,83,96,6,5,-1,0,84,90,5,26,
0,0,85,91,3,12,6,0,86,87,5,30,0,0,87,88,3,12,6,0,88,89,5,31,0,0,89,91,1,
0,0,0,90,85,1,0,0,0,90,86,1,0,0,0,91,92,1,0,0,0,92,93,6,5,-1,0,93,95,1,0,
0,0,94,84,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,99,1,0,0,
0,98,96,1,0,0,0,99,100,6,5,-1,0,100,108,1,0,0,0,101,102,5,27,0,0,102,103,
5,30,0,0,103,104,3,4,2,0,104,105,5,31,0,0,105,106,6,5,-1,0,106,108,1,0,0,
0,107,82,1,0,0,0,107,101,1,0,0,0,108,11,1,0,0,0,109,110,7,1,0,0,110,149,
6,6,-1,0,111,112,5,3,0,0,112,113,5,4,0,0,113,149,6,6,-1,0,114,115,5,3,0,
0,115,116,7,2,0,0,116,117,5,28,0,0,117,118,3,4,2,0,118,119,5,29,0,0,119,
120,6,6,-1,0,120,149,1,0,0,0,121,122,5,18,0,0,122,123,5,19,0,0,123,124,5,
31,0,0,124,125,5,28,0,0,125,126,3,4,2,0,126,127,5,29,0,0,127,128,6,6,-1,
0,128,149,1,0,0,0,129,130,3,14,7,0,130,131,6,6,-1,0,131,149,1,0,0,0,132,
133,3,16,8,0,133,139,6,6,-1,0,134,135,5,28,0,0,135,136,3,4,2,0,136,137,5,
29,0,0,137,138,6,6,-1,0,138,140,1,0,0,0,139,134,1,0,0,0,139,140,1,0,0,0,
140,141,1,0,0,0,141,142,6,6,-1,0,142,149,1,0,0,0,143,144,5,28,0,0,144,145,
3,4,2,0,145,146,5,29,0,0,146,147,6,6,-1,0,147,149,1,0,0,0,148,109,1,0,0,
0,148,111,1,0,0,0,148,114,1,0,0,0,148,121,1,0,0,0,148,129,1,0,0,0,148,132,
1,0,0,0,148,143,1,0,0,0,149,13,1,0,0,0,150,151,5,20,0,0,151,152,6,7,-1,0,
152,15,1,0,0,0,153,154,5,21,0,0,154,155,6,8,-1,0,155,17,1,0,0,0,12,22,31,
38,48,56,63,80,90,96,107,139,148];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ComplexParser extends antlr4.Parser {

    static grammarFileName = "Complex.g4";
    static literalNames = [ null, "'i'", "'e'", "'\\'", "'pi'", "'sin'", 
                            "'cos'", "'tan'", "'cot'", "'sec'", "'csc'", 
                            "'sinh'", "'cosh'", "'tanh'", "'log'", "'ln'", 
                            "'Re'", "'Im'", "'\\operatorname{'", "'cis'", 
                            null, null, "'+'", "'-'", "'\\cdot'", "'\\frac'", 
                            "'^'", "'\\sqrt'", null, null, "'{'", "'}'", 
                            "','", "';'", "'='", "'@'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "NUMBER", "CHAR", "PLUS", 
                             "MINUS", "TIMES", "DIVIDE", "POW", "SQRT", 
                             "LEFT", "RIGHT", "LEFT_BRACE", "RIGHT_BRACE", 
                             "COMA", "SEMICOLON", "EQUALS", "PLOTTED_FUNC", 
                             "WS", "LATEX_WS" ];
    static ruleNames = [ "parse", "assignment", "addition", "multiplication", 
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



	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ComplexParser.RULE_parse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.assignment();

	                for (let key in this.variables) {
	                    this.tmpStart.push(`vec2 ${key}_VAR = ${this.variables[key]};`);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 21;
	            localctx.isPlot = this.match(ComplexParser.PLOTTED_FUNC);
	        }

	        this.state = 24;
	        localctx.c = this.element();

	                let isFunction = false;
	                let variable = null;
	                let name = localctx.c.value;
	                let argument = null;
	            
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 26;
	            this.match(ComplexParser.LEFT);
	            this.state = 27;
	            localctx.c1 = this.element();
	            this.state = 28;
	            this.match(ComplexParser.RIGHT);

	                        isFunction = true;
	                        argument = localctx.c1.value;
	                    
	        }

	        this.state = 33;
	        this.match(ComplexParser.EQUALS);
	        this.state = 34;
	        localctx.a = this.addition();

	                let value = localctx.a.value;
	                // if the assignment should be plotted, then add it to the end of the file
	                if ((localctx.isPlot == null ? null : localctx.isPlot.text)) {
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22 || _la===23) {
	            this.state = 37;
	            localctx.pm1 = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===22 || _la===23)) {
	                localctx.pm1 = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 40;
	        localctx.m1 = this.multiplication();

	                let pm1 = ((localctx.pm1 == null ? null : localctx.pm1.text) == null)? '+' : (localctx.pm1 == null ? null : localctx.pm1.text);
	                let m1 = localctx.m1.value;
	                let product = [`multiplyC(vec2(${pm1}1.0, 0.0), ${m1})`];
	            
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22 || _la===23) {
	            this.state = 42;
	            localctx.pm = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===22 || _la===23)) {
	                localctx.pm = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 43;
	            localctx.m2 = this.multiplication();

	                        let pm = (localctx.pm == null ? null : localctx.pm.text);
	                        let m = localctx.m2.value;
	                        product.push(`multiplyC(vec2(${pm}1.0, 0.0), ${m})`);
	                    
	            this.state = 50;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        localctx.p1 = this.fractionOrPower();
	         let powers = [localctx.p1.value]; 
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 456392718) !== 0)) {
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===24) {
	                this.state = 55;
	                this.match(ComplexParser.TIMES);
	            }

	            this.state = 58;
	            localctx.p2 = this.fractionOrPower();
	             powers.push(localctx.p2.value); 
	            this.state = 65;
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



	fractionOrPower() {
	    let localctx = new FractionOrPowerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ComplexParser.RULE_fractionOrPower);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 18:
	        case 20:
	        case 21:
	        case 27:
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            localctx.p = this.power();
	             localctx.value =  localctx.p.value 
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.match(ComplexParser.DIVIDE);
	            this.state = 72;
	            this.match(ComplexParser.LEFT_BRACE);
	            this.state = 73;
	            localctx.a1 = this.addition();
	            this.state = 74;
	            this.match(ComplexParser.RIGHT_BRACE);
	            this.state = 75;
	            this.match(ComplexParser.LEFT_BRACE);
	            this.state = 76;
	            localctx.a2 = this.addition();
	            this.state = 77;
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
	    this.enterRule(localctx, 10, ComplexParser.RULE_power);
	    var _la = 0;
	    try {
	        this.state = 107;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 18:
	        case 20:
	        case 21:
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            localctx.f1 = this.atom();
	             let args = [localctx.f1.value]; 
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===26) {
	                this.state = 84;
	                this.match(ComplexParser.POW);
	                this.state = 90;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
	                case 2:
	                case 3:
	                case 18:
	                case 20:
	                case 21:
	                case 28:
	                    this.state = 85;
	                    localctx.f2 = this.atom();
	                    break;
	                case 30:
	                    this.state = 86;
	                    this.match(ComplexParser.LEFT_BRACE);
	                    this.state = 87;
	                    localctx.f2 = this.atom();
	                    this.state = 88;
	                    this.match(ComplexParser.RIGHT_BRACE);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }

	                            let f = localctx.f2.value;
	                            args.push(f);
	                        
	                this.state = 98;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	             localctx.value =  this.group('powC(', ', ', ')', args) 
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.match(ComplexParser.SQRT);
	            this.state = 102;
	            this.match(ComplexParser.LEFT_BRACE);
	            this.state = 103;
	            localctx.a = this.addition();
	            this.state = 104;
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
	    this.enterRule(localctx, 12, ComplexParser.RULE_atom);
	    var _la = 0;
	    try {
	        this.state = 148;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            localctx.c = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	                localctx.c = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	             localctx.value =  (localctx.c == null ? null : localctx.c.text) + '_VAR' 
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
	            this.match(ComplexParser.T__2);
	            this.state = 112;
	            localctx.c = this.match(ComplexParser.T__3);
	             localctx.value =  (localctx.c == null ? null : localctx.c.text) + '_VAR' 
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 114;
	            this.match(ComplexParser.T__2);
	            this.state = 115;
	            localctx.f = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 262112) !== 0))) {
	                localctx.f = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 116;
	            this.match(ComplexParser.LEFT);
	            this.state = 117;
	            localctx.a = this.addition();
	            this.state = 118;
	            this.match(ComplexParser.RIGHT);

	                    let funcName = (localctx.f == null ? null : localctx.f.text);
	                    let addition = localctx.a.value;
	                    localctx.value =  `${funcName}C(${addition})`
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 121;
	            this.match(ComplexParser.T__17);
	            this.state = 122;
	            localctx.f = this.match(ComplexParser.T__18);
	            this.state = 123;
	            this.match(ComplexParser.RIGHT_BRACE);
	            this.state = 124;
	            this.match(ComplexParser.LEFT);
	            this.state = 125;
	            localctx.a = this.addition();
	            this.state = 126;
	            this.match(ComplexParser.RIGHT);

	                    let operatorName = (localctx.f == null ? null : localctx.f.text);
	                    let operatorArg = localctx.a.value;
	                    localctx.value =  `${operatorName}C(${operatorArg})`
	                
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 129;
	            localctx.n = this.num();
	             localctx.value =  localctx.n.value 
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 132;
	            localctx.el = this.element();

	                    let isFunc = false;
	                    let name = localctx.el.value;
	                
	            this.state = 139;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
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

	        case 7:
	            this.enterOuterAlt(localctx, 7);
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
	    this.enterRule(localctx, 14, ComplexParser.RULE_num);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        localctx.n = this.match(ComplexParser.NUMBER);

	                let num = (localctx.n == null ? null : localctx.n.text);
	                if (!num.includes('.'))
	                    num += '.0';
	                localctx.value =  `vec2(${num}, 0.0)`
	            
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
	    this.enterRule(localctx, 16, ComplexParser.RULE_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        localctx.c = this.match(ComplexParser.CHAR);
	         localctx.value =  (localctx.c == null ? null : localctx.c.text) 
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
ComplexParser.T__12 = 13;
ComplexParser.T__13 = 14;
ComplexParser.T__14 = 15;
ComplexParser.T__15 = 16;
ComplexParser.T__16 = 17;
ComplexParser.T__17 = 18;
ComplexParser.T__18 = 19;
ComplexParser.NUMBER = 20;
ComplexParser.CHAR = 21;
ComplexParser.PLUS = 22;
ComplexParser.MINUS = 23;
ComplexParser.TIMES = 24;
ComplexParser.DIVIDE = 25;
ComplexParser.POW = 26;
ComplexParser.SQRT = 27;
ComplexParser.LEFT = 28;
ComplexParser.RIGHT = 29;
ComplexParser.LEFT_BRACE = 30;
ComplexParser.RIGHT_BRACE = 31;
ComplexParser.COMA = 32;
ComplexParser.SEMICOLON = 33;
ComplexParser.EQUALS = 34;
ComplexParser.PLOTTED_FUNC = 35;
ComplexParser.WS = 36;
ComplexParser.LATEX_WS = 37;

ComplexParser.RULE_parse = 0;
ComplexParser.RULE_assignment = 1;
ComplexParser.RULE_addition = 2;
ComplexParser.RULE_multiplication = 3;
ComplexParser.RULE_fractionOrPower = 4;
ComplexParser.RULE_power = 5;
ComplexParser.RULE_atom = 6;
ComplexParser.RULE_num = 7;
ComplexParser.RULE_element = 8;

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
        this.isPlot = null;
        this.c = null;
        this.c1 = null;
        this.a = null;
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
        this.pm1 = null;
        this.m1 = null;
        this.pm = null;
        this.m2 = null;
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
        this.p1 = null;
        this.p2 = null;
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
        this.p = null;
        this.a1 = null;
        this.a2 = null;
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
        this.f1 = null;
        this.f2 = null;
        this.a = null;
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
        this.c = null;
        this.f = null;
        this.a = null;
        this.n = null;
        this.el = null;
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

	RIGHT_BRACE() {
	    return this.getToken(ComplexParser.RIGHT_BRACE, 0);
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
        this.n = null;
    }

	NUMBER() {
	    return this.getToken(ComplexParser.NUMBER, 0);
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
        this.c = null;
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
ComplexParser.FractionOrPowerContext = FractionOrPowerContext; 
ComplexParser.PowerContext = PowerContext; 
ComplexParser.AtomContext = AtomContext; 
ComplexParser.NumContext = NumContext; 
ComplexParser.ElementContext = ElementContext; 
