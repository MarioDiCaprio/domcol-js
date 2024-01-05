// Generated from src/components/app/(graphing)/parser/.antlr/Complex.g4 by ANTLR 4.9.0-SNAPSHOT



type SymbolDeclaration = {
    name: string; // The name of the symbol being declared (one character!)
    type: 'function' | 'constant'; // The type of the declaration
    value: string; // The value of the symbol being declared i.e. the value that is returned when invoking the symbol
    initialOrder: number; // The initial order of the declaration. The n-th declaration should have order n.
}



import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ComplexListener } from "./ComplexListener";
import { ComplexVisitor } from "./ComplexVisitor";


export class ComplexParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly NUMBER = 20;
	public static readonly CHAR = 21;
	public static readonly PLUS = 22;
	public static readonly MINUS = 23;
	public static readonly TIMES = 24;
	public static readonly DIVIDE = 25;
	public static readonly POW = 26;
	public static readonly SQRT = 27;
	public static readonly LEFT = 28;
	public static readonly RIGHT = 29;
	public static readonly LEFT_BRACE = 30;
	public static readonly RIGHT_BRACE = 31;
	public static readonly COMA = 32;
	public static readonly SEMICOLON = 33;
	public static readonly EQUALS = 34;
	public static readonly PLOTTED_FUNC = 35;
	public static readonly WS = 36;
	public static readonly LATEX_WS = 37;
	public static readonly RULE_parse = 0;
	public static readonly RULE_assignment = 1;
	public static readonly RULE_addition = 2;
	public static readonly RULE_multiplication = 3;
	public static readonly RULE_fractionOrPower = 4;
	public static readonly RULE_power = 5;
	public static readonly RULE_atom = 6;
	public static readonly RULE_num = 7;
	public static readonly RULE_element = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "assignment", "addition", "multiplication", "fractionOrPower", 
		"power", "atom", "num", "element",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'i'", "'e'", "'\\'", "'pi'", "'sin'", "'cos'", "'tan'", "'cot'", 
		"'sec'", "'csc'", "'sinh'", "'cosh'", "'tanh'", "'log'", "'ln'", "'Re'", 
		"'Im'", "'\\peratorname{'", "'cis'", undefined, undefined, "'+'", "'-'", 
		"'\\dot'", "'\\rac'", "'^'", "'\\qrt'", undefined, undefined, "'{'", "'}'", 
		"','", "';'", "'='", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "NUMBER", 
		"CHAR", "PLUS", "MINUS", "TIMES", "DIVIDE", "POW", "SQRT", "LEFT", "RIGHT", 
		"LEFT_BRACE", "RIGHT_BRACE", "COMA", "SEMICOLON", "EQUALS", "PLOTTED_FUNC", 
		"WS", "LATEX_WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ComplexParser._LITERAL_NAMES, ComplexParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ComplexParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Complex.g4"; }

	// @Override
	public get ruleNames(): string[] { return ComplexParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ComplexParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


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


	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ComplexParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ComplexParser.RULE_parse);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.assignment();
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ComplexParser.SEMICOLON) {
				{
				{
				this.state = 19;
				this.match(ComplexParser.SEMICOLON);
				this.state = 20;
				this.assignment();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}

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
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ComplexParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ComplexParser.PLOTTED_FUNC) {
				{
				this.state = 28;
				_localctx._isPlot = this.match(ComplexParser.PLOTTED_FUNC);
				}
			}

			this.state = 31;
			_localctx._c = this.element();

			        let isFunction = false;
			        let variable = null;
			        let name = _localctx._c.value as string;
			        let argument = null;
			    
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ComplexParser.LEFT) {
				{
				this.state = 33;
				this.match(ComplexParser.LEFT);
				this.state = 34;
				_localctx._c1 = this.element();
				this.state = 35;
				this.match(ComplexParser.RIGHT);

				            isFunction = true;
				            argument = _localctx._c1.value;
				        
				}
			}

			this.state = 40;
			this.match(ComplexParser.EQUALS);
			this.state = 41;
			_localctx._a = this.addition();

			        let value = _localctx._a.value;
			        // if the assignment should be plotted, then add it to the end of the file
			        if ((_localctx._isPlot != null ? _localctx._isPlot.text : undefined)) {
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
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addition(): AdditionContext {
		let _localctx: AdditionContext = new AdditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ComplexParser.RULE_addition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ComplexParser.PLUS || _la === ComplexParser.MINUS) {
				{
				this.state = 44;
				_localctx._pm1 = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ComplexParser.PLUS || _la === ComplexParser.MINUS)) {
					_localctx._pm1 = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 47;
			_localctx._m1 = this.multiplication();

			        let pm1 = ((_localctx._pm1 != null ? _localctx._pm1.text : undefined) == null)? '+' : (_localctx._pm1 != null ? _localctx._pm1.text : undefined);
			        let m1 = _localctx._m1.value;
			        let product = [`multiplyC(vec2(${pm1}1.0, 0.0), ${m1})`];
			    
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ComplexParser.PLUS || _la === ComplexParser.MINUS) {
				{
				{
				this.state = 49;
				_localctx._pm = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ComplexParser.PLUS || _la === ComplexParser.MINUS)) {
					_localctx._pm = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 50;
				_localctx._m2 = this.multiplication();

				            let pm = (_localctx._pm != null ? _localctx._pm.text : undefined);
				            let m = _localctx._m2.value;
				            product.push(`multiplyC(vec2(${pm}1.0, 0.0), ${m})`);
				        
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			 _localctx.value =  this.group('addC(', ', ', ')', product); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplication(): MultiplicationContext {
		let _localctx: MultiplicationContext = new MultiplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ComplexParser.RULE_multiplication);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			_localctx._p1 = this.fractionOrPower();
			 let powers: string[] = []; 
			 powers.push(_localctx._p1.value as string); 
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ComplexParser.T__0) | (1 << ComplexParser.T__1) | (1 << ComplexParser.T__2) | (1 << ComplexParser.T__17) | (1 << ComplexParser.NUMBER) | (1 << ComplexParser.CHAR) | (1 << ComplexParser.TIMES) | (1 << ComplexParser.DIVIDE) | (1 << ComplexParser.SQRT) | (1 << ComplexParser.LEFT))) !== 0)) {
				{
				{
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ComplexParser.TIMES) {
					{
					this.state = 63;
					this.match(ComplexParser.TIMES);
					}
				}

				this.state = 66;
				_localctx._p2 = this.fractionOrPower();
				 powers.push(_localctx._p2.value as string); 
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			 _localctx.value =  this.group('multiplyC(', ', ', ')', powers); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fractionOrPower(): FractionOrPowerContext {
		let _localctx: FractionOrPowerContext = new FractionOrPowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ComplexParser.RULE_fractionOrPower);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ComplexParser.T__0:
			case ComplexParser.T__1:
			case ComplexParser.T__2:
			case ComplexParser.T__17:
			case ComplexParser.NUMBER:
			case ComplexParser.CHAR:
			case ComplexParser.SQRT:
			case ComplexParser.LEFT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 76;
				_localctx._p = this.power();
				 _localctx.value =  _localctx._p.value; 
				}
				break;
			case ComplexParser.DIVIDE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 79;
				this.match(ComplexParser.DIVIDE);
				this.state = 80;
				this.match(ComplexParser.LEFT_BRACE);
				this.state = 81;
				_localctx._a1 = this.addition();
				this.state = 82;
				this.match(ComplexParser.RIGHT_BRACE);
				this.state = 83;
				this.match(ComplexParser.LEFT_BRACE);
				this.state = 84;
				_localctx._a2 = this.addition();
				this.state = 85;
				this.match(ComplexParser.RIGHT_BRACE);

				        let d1 = _localctx._a1.value;
				        let d2 = _localctx._a2.value;
				        _localctx.value =  `divideC(${d1}, ${d2})`;
				    
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public power(): PowerContext {
		let _localctx: PowerContext = new PowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ComplexParser.RULE_power);
		let _la: number;
		try {
			this.state = 116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ComplexParser.T__0:
			case ComplexParser.T__1:
			case ComplexParser.T__2:
			case ComplexParser.T__17:
			case ComplexParser.NUMBER:
			case ComplexParser.CHAR:
			case ComplexParser.LEFT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				_localctx._f1 = this.atom();
				 let args: string[] = []; 
				 args.push(_localctx._f1.value as string); 
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ComplexParser.POW) {
					{
					{
					this.state = 93;
					this.match(ComplexParser.POW);
					this.state = 99;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ComplexParser.T__0:
					case ComplexParser.T__1:
					case ComplexParser.T__2:
					case ComplexParser.T__17:
					case ComplexParser.NUMBER:
					case ComplexParser.CHAR:
					case ComplexParser.LEFT:
						{
						this.state = 94;
						_localctx._f2 = this.atom();
						}
						break;
					case ComplexParser.LEFT_BRACE:
						{
						this.state = 95;
						this.match(ComplexParser.LEFT_BRACE);
						this.state = 96;
						_localctx._f2 = this.atom();
						this.state = 97;
						this.match(ComplexParser.RIGHT_BRACE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}

					            let f = _localctx._f2.value as string;
					            args.push(f);
					        
					}
					}
					this.state = 107;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				 _localctx.value =  this.group('powC(', ', ', ')', args); 
				}
				break;
			case ComplexParser.SQRT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 110;
				this.match(ComplexParser.SQRT);
				this.state = 111;
				this.match(ComplexParser.LEFT_BRACE);
				this.state = 112;
				_localctx._a = this.addition();
				this.state = 113;
				this.match(ComplexParser.RIGHT_BRACE);
				 _localctx.value = `sqrtC(${_localctx._a.value})` 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ComplexParser.RULE_atom);
		let _la: number;
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 118;
				_localctx._c = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ComplexParser.T__0 || _la === ComplexParser.T__1)) {
					_localctx._c = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				 _localctx.value =  (_localctx._c != null ? _localctx._c.text : undefined) + '_VAR'; 
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.match(ComplexParser.T__2);
				this.state = 121;
				_localctx._c = this.match(ComplexParser.T__3);
				 _localctx.value =  (_localctx._c != null ? _localctx._c.text : undefined) + '_VAR'; 
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 123;
				this.match(ComplexParser.T__2);
				this.state = 124;
				_localctx._f = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ComplexParser.T__4) | (1 << ComplexParser.T__5) | (1 << ComplexParser.T__6) | (1 << ComplexParser.T__7) | (1 << ComplexParser.T__8) | (1 << ComplexParser.T__9) | (1 << ComplexParser.T__10) | (1 << ComplexParser.T__11) | (1 << ComplexParser.T__12) | (1 << ComplexParser.T__13) | (1 << ComplexParser.T__14) | (1 << ComplexParser.T__15) | (1 << ComplexParser.T__16))) !== 0))) {
					_localctx._f = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 125;
				this.match(ComplexParser.LEFT);
				this.state = 126;
				_localctx._a = this.addition();
				this.state = 127;
				this.match(ComplexParser.RIGHT);

				        let funcName = (_localctx._f != null ? _localctx._f.text : undefined);
				        let addition = _localctx._a.value;
				        _localctx.value =  `${funcName}C(${addition})`;
				    
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 130;
				this.match(ComplexParser.T__17);
				this.state = 131;
				_localctx._f = this.match(ComplexParser.T__18);
				this.state = 132;
				this.match(ComplexParser.RIGHT_BRACE);
				this.state = 133;
				this.match(ComplexParser.LEFT);
				this.state = 134;
				_localctx._a = this.addition();
				this.state = 135;
				this.match(ComplexParser.RIGHT);

				        let operatorName = (_localctx._f != null ? _localctx._f.text : undefined);
				        let operatorArg = _localctx._a.value;
				        _localctx.value =  `${operatorName}C(${operatorArg})`;
				    
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 138;
				_localctx._n = this.num();
				 _localctx.value =  _localctx._n.value; 
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 141;
				_localctx._el = this.element();

				        let isFunc = false;
				        let name = _localctx._el.value as string;
				    
				this.state = 148;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 143;
					this.match(ComplexParser.LEFT);
					this.state = 144;
					_localctx._a = this.addition();
					this.state = 145;
					this.match(ComplexParser.RIGHT);

					            isFunc = true;
					            let arg = _localctx._a.value;
					            _localctx.value =  `${name}C(${arg})`;
					        
					}
					break;
				}

				        if (!isFunc) {
				            // if variable was declared earlier, it is actually a function, because GLSL constants require
				            // constant expressions, but the user should be free to declare any type of constants!
				            // e.g.: sin(5) is not a constant expression, but valid nonetheless
				            if (name in this.variables)
				                _localctx.value =  `${name}_DECLARED_VAR()`;
				            else
				                _localctx.value =  `${name}_VAR`;
				        }
				    
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 152;
				this.match(ComplexParser.LEFT);
				this.state = 153;
				_localctx._a = this.addition();
				this.state = 154;
				this.match(ComplexParser.RIGHT);

				        let arg = _localctx._a.value;
				        _localctx.value =  `multiplyC(vec2(1.0, 0.0), ${arg})`;
				    
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public num(): NumContext {
		let _localctx: NumContext = new NumContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ComplexParser.RULE_num);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			_localctx._n = this.match(ComplexParser.NUMBER);

			        let num = (_localctx._n != null ? _localctx._n.text : undefined) as string;
			        if (!num.includes('.'))
			            num += '.0';
			        _localctx.value =  `vec2(${num}, 0.0)`;
			    
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ComplexParser.RULE_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			_localctx._c = this.match(ComplexParser.CHAR);
			 _localctx.value =  (_localctx._c != null ? _localctx._c.text : undefined); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\xA8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x07\x02\x18" +
		"\n\x02\f\x02\x0E\x02\x1B\v\x02\x03\x02\x03\x02\x03\x03\x05\x03 \n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03)\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x05\x040\n\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x048\n\x04\f\x04\x0E\x04;\v\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05C\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x07\x05H\n\x05\f\x05\x0E\x05K\v\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06[\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07f\n\x07\x03\x07\x03\x07\x07\x07" +
		"j\n\x07\f\x07\x0E\x07m\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07w\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b\x97\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA0\n" +
		"\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x02\x02\x02\v\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x05\x03\x02" +
		"\x18\x19\x03\x02\x03\x04\x03\x02\x07\x13\x02\xB0\x02\x14\x03\x02\x02\x02" +
		"\x04\x1F\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b>\x03\x02\x02\x02\nZ\x03" +
		"\x02\x02\x02\fv\x03\x02\x02\x02\x0E\x9F\x03\x02\x02\x02\x10\xA1\x03\x02" +
		"\x02\x02\x12\xA4\x03\x02\x02\x02\x14\x19\x05\x04\x03\x02\x15\x16\x07#" +
		"\x02\x02\x16\x18\x05\x04\x03\x02\x17\x15\x03\x02\x02\x02\x18\x1B\x03\x02" +
		"\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1C\x03\x02" +
		"\x02\x02\x1B\x19\x03\x02\x02\x02\x1C\x1D\b\x02\x01\x02\x1D\x03\x03\x02" +
		"\x02\x02\x1E \x07%\x02\x02\x1F\x1E\x03\x02\x02\x02\x1F \x03\x02\x02\x02" +
		" !\x03\x02\x02\x02!\"\x05\x12\n\x02\"(\b\x03\x01\x02#$\x07\x1E\x02\x02" +
		"$%\x05\x12\n\x02%&\x07\x1F\x02\x02&\'\b\x03\x01\x02\')\x03\x02\x02\x02" +
		"(#\x03\x02\x02\x02()\x03\x02\x02\x02)*\x03\x02\x02\x02*+\x07$\x02\x02" +
		"+,\x05\x06\x04\x02,-\b\x03\x01\x02-\x05\x03\x02\x02\x02.0\t\x02\x02\x02" +
		"/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02\x0212\x05\b\x05\x02" +
		"29\b\x04\x01\x0234\t\x02\x02\x0245\x05\b\x05\x0256\b\x04\x01\x0268\x03" +
		"\x02\x02\x0273\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03" +
		"\x02\x02\x02:<\x03\x02\x02\x02;9\x03\x02\x02\x02<=\b\x04\x01\x02=\x07" +
		"\x03\x02\x02\x02>?\x05\n\x06\x02?@\b\x05\x01\x02@I\b\x05\x01\x02AC\x07" +
		"\x1A\x02\x02BA\x03\x02\x02\x02BC\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x05" +
		"\n\x06\x02EF\b\x05\x01\x02FH\x03\x02\x02\x02GB\x03\x02\x02\x02HK\x03\x02" +
		"\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02KI\x03\x02" +
		"\x02\x02LM\b\x05\x01\x02M\t\x03\x02\x02\x02NO\x05\f\x07\x02OP\b\x06\x01" +
		"\x02P[\x03\x02\x02\x02QR\x07\x1B\x02\x02RS\x07 \x02\x02ST\x05\x06\x04" +
		"\x02TU\x07!\x02\x02UV\x07 \x02\x02VW\x05\x06\x04\x02WX\x07!\x02\x02XY" +
		"\b\x06\x01\x02Y[\x03\x02\x02\x02ZN\x03\x02\x02\x02ZQ\x03\x02\x02\x02[" +
		"\v\x03\x02\x02\x02\\]\x05\x0E\b\x02]^\b\x07\x01\x02^k\b\x07\x01\x02_e" +
		"\x07\x1C\x02\x02`f\x05\x0E\b\x02ab\x07 \x02\x02bc\x05\x0E\b\x02cd\x07" +
		"!\x02\x02df\x03\x02\x02\x02e`\x03\x02\x02\x02ea\x03\x02\x02\x02fg\x03" +
		"\x02\x02\x02gh\b\x07\x01\x02hj\x03\x02\x02\x02i_\x03\x02\x02\x02jm\x03" +
		"\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02ln\x03\x02\x02\x02mk\x03" +
		"\x02\x02\x02no\b\x07\x01\x02ow\x03\x02\x02\x02pq\x07\x1D\x02\x02qr\x07" +
		" \x02\x02rs\x05\x06\x04\x02st\x07!\x02\x02tu\b\x07\x01\x02uw\x03\x02\x02" +
		"\x02v\\\x03\x02\x02\x02vp\x03\x02\x02\x02w\r\x03\x02\x02\x02xy\t\x03\x02" +
		"\x02y\xA0\b\b\x01\x02z{\x07\x05\x02\x02{|\x07\x06\x02\x02|\xA0\b\b\x01" +
		"\x02}~\x07\x05\x02\x02~\x7F\t\x04\x02\x02\x7F\x80\x07\x1E\x02\x02\x80" +
		"\x81\x05\x06\x04\x02\x81\x82\x07\x1F\x02\x02\x82\x83\b\b\x01\x02\x83\xA0" +
		"\x03\x02\x02\x02\x84\x85\x07\x14\x02\x02\x85\x86\x07\x15\x02\x02\x86\x87" +
		"\x07!\x02\x02\x87\x88\x07\x1E\x02\x02\x88\x89\x05\x06\x04\x02\x89\x8A" +
		"\x07\x1F\x02\x02\x8A\x8B\b\b\x01\x02\x8B\xA0\x03\x02\x02\x02\x8C\x8D\x05" +
		"\x10\t\x02\x8D\x8E\b\b\x01\x02\x8E\xA0\x03\x02\x02\x02\x8F\x90\x05\x12" +
		"\n\x02\x90\x96\b\b\x01\x02\x91\x92\x07\x1E\x02\x02\x92\x93\x05\x06\x04" +
		"\x02\x93\x94\x07\x1F\x02\x02\x94\x95\b\b\x01\x02\x95\x97\x03\x02\x02\x02" +
		"\x96\x91\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02" +
		"\x98\x99\b\b\x01\x02\x99\xA0\x03\x02\x02\x02\x9A\x9B\x07\x1E\x02\x02\x9B" +
		"\x9C\x05\x06\x04\x02\x9C\x9D\x07\x1F\x02\x02\x9D\x9E\b\b\x01\x02\x9E\xA0" +
		"\x03\x02\x02\x02\x9Fx\x03\x02\x02\x02\x9Fz\x03\x02\x02\x02\x9F}\x03\x02" +
		"\x02\x02\x9F\x84\x03\x02\x02\x02\x9F\x8C\x03\x02\x02\x02\x9F\x8F\x03\x02" +
		"\x02\x02\x9F\x9A\x03\x02\x02\x02\xA0\x0F\x03\x02\x02\x02\xA1\xA2\x07\x16" +
		"\x02\x02\xA2\xA3\b\t\x01\x02\xA3\x11\x03\x02\x02\x02\xA4\xA5\x07\x17\x02" +
		"\x02\xA5\xA6\b\n\x01\x02\xA6\x13\x03\x02\x02\x02\x0F\x19\x1F(/9BIZekv" +
		"\x96\x9F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ComplexParser.__ATN) {
			ComplexParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ComplexParser._serializedATN));
		}

		return ComplexParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexParser.SEMICOLON);
		} else {
			return this.getToken(ComplexParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexParser.RULE_parse; }
	// @Override
	public enterRule(listener: ComplexListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexVisitor<Result>): Result {
		if (visitor.visitParse) {
			return visitor.visitParse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public _isPlot!: Token;
	public _c!: ElementContext;
	public _c1!: ElementContext;
	public _a!: AdditionContext;
	public EQUALS(): TerminalNode { return this.getToken(ComplexParser.EQUALS, 0); }
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public addition(): AdditionContext {
		return this.getRuleContext(0, AdditionContext);
	}
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(ComplexParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(ComplexParser.RIGHT, 0); }
	public PLOTTED_FUNC(): TerminalNode | undefined { return this.tryGetToken(ComplexParser.PLOTTED_FUNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexParser.RULE_assignment; }
	// @Override
	public enterRule(listener: ComplexListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditionContext extends ParserRuleContext {
	public value: string | undefined;
	public _pm1!: Token;
	public _m1!: MultiplicationContext;
	public _pm!: Token;
	public _m2!: MultiplicationContext;
	public multiplication(): MultiplicationContext[];
	public multiplication(i: number): MultiplicationContext;
	public multiplication(i?: number): MultiplicationContext | MultiplicationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicationContext);
		} else {
			return this.getRuleContext(i, MultiplicationContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexParser.PLUS);
		} else {
			return this.getToken(ComplexParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexParser.MINUS);
		} else {
			return this.getToken(ComplexParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexParser.RULE_addition; }
	// @Override
	public enterRule(listener: ComplexListener): void {
		if (listener.enterAddition) {
			listener.enterAddition(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexListener): void {
		if (listener.exitAddition) {
			listener.exitAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexVisitor<Result>): Result {
		if (visitor.visitAddition) {
			return visitor.visitAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicationContext extends ParserRuleContext {
	public value: string | undefined;
	public _p1!: FractionOrPowerContext;
	public _p2!: FractionOrPowerContext;
	public fractionOrPower(): FractionOrPowerContext[];
	public fractionOrPower(i: number): FractionOrPowerContext;
	public fractionOrPower(i?: number): FractionOrPowerContext | FractionOrPowerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FractionOrPowerContext);
		} else {
			return this.getRuleContext(i, FractionOrPowerContext);
		}
	}
	public TIMES(): TerminalNode[];
	public TIMES(i: number): TerminalNode;
	public TIMES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexParser.TIMES);
		} else {
			return this.getToken(ComplexParser.TIMES, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexParser.RULE_multiplication; }
	// @Override
	public enterRule(listener: ComplexListener): void {
		if (listener.enterMultiplication) {
			listener.enterMultiplication(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexListener): void {
		if (listener.exitMultiplication) {
			listener.exitMultiplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexVisitor<Result>): Result {
		if (visitor.visitMultiplication) {
			return visitor.visitMultiplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FractionOrPowerContext extends ParserRuleContext {
	public value: string | undefined;
	public _p!: PowerContext;
	public _a1!: AdditionContext;
	public _a2!: AdditionContext;
	public power(): PowerContext | undefined {
		return this.tryGetRuleContext(0, PowerContext);
	}
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(ComplexParser.DIVIDE, 0); }
	public LEFT_BRACE(): TerminalNode[];
	public LEFT_BRACE(i: number): TerminalNode;
	public LEFT_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexParser.LEFT_BRACE);
		} else {
			return this.getToken(ComplexParser.LEFT_BRACE, i);
		}
	}
	public RIGHT_BRACE(): TerminalNode[];
	public RIGHT_BRACE(i: number): TerminalNode;
	public RIGHT_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexParser.RIGHT_BRACE);
		} else {
			return this.getToken(ComplexParser.RIGHT_BRACE, i);
		}
	}
	public addition(): AdditionContext[];
	public addition(i: number): AdditionContext;
	public addition(i?: number): AdditionContext | AdditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionContext);
		} else {
			return this.getRuleContext(i, AdditionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexParser.RULE_fractionOrPower; }
	// @Override
	public enterRule(listener: ComplexListener): void {
		if (listener.enterFractionOrPower) {
			listener.enterFractionOrPower(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexListener): void {
		if (listener.exitFractionOrPower) {
			listener.exitFractionOrPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexVisitor<Result>): Result {
		if (visitor.visitFractionOrPower) {
			return visitor.visitFractionOrPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowerContext extends ParserRuleContext {
	public value: string | undefined;
	public _f1!: AtomContext;
	public _f2!: AtomContext;
	public _a!: AdditionContext;
	public atom(): AtomContext[];
	public atom(i: number): AtomContext;
	public atom(i?: number): AtomContext | AtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomContext);
		} else {
			return this.getRuleContext(i, AtomContext);
		}
	}
	public POW(): TerminalNode[];
	public POW(i: number): TerminalNode;
	public POW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexParser.POW);
		} else {
			return this.getToken(ComplexParser.POW, i);
		}
	}
	public LEFT_BRACE(): TerminalNode[];
	public LEFT_BRACE(i: number): TerminalNode;
	public LEFT_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexParser.LEFT_BRACE);
		} else {
			return this.getToken(ComplexParser.LEFT_BRACE, i);
		}
	}
	public RIGHT_BRACE(): TerminalNode[];
	public RIGHT_BRACE(i: number): TerminalNode;
	public RIGHT_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexParser.RIGHT_BRACE);
		} else {
			return this.getToken(ComplexParser.RIGHT_BRACE, i);
		}
	}
	public SQRT(): TerminalNode | undefined { return this.tryGetToken(ComplexParser.SQRT, 0); }
	public addition(): AdditionContext | undefined {
		return this.tryGetRuleContext(0, AdditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexParser.RULE_power; }
	// @Override
	public enterRule(listener: ComplexListener): void {
		if (listener.enterPower) {
			listener.enterPower(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexListener): void {
		if (listener.exitPower) {
			listener.exitPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexVisitor<Result>): Result {
		if (visitor.visitPower) {
			return visitor.visitPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public value: string | undefined;
	public _c!: Token;
	public _f!: Token;
	public _a!: AdditionContext;
	public _n!: NumContext;
	public _el!: ElementContext;
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(ComplexParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(ComplexParser.RIGHT, 0); }
	public addition(): AdditionContext | undefined {
		return this.tryGetRuleContext(0, AdditionContext);
	}
	public RIGHT_BRACE(): TerminalNode | undefined { return this.tryGetToken(ComplexParser.RIGHT_BRACE, 0); }
	public num(): NumContext | undefined {
		return this.tryGetRuleContext(0, NumContext);
	}
	public element(): ElementContext | undefined {
		return this.tryGetRuleContext(0, ElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexParser.RULE_atom; }
	// @Override
	public enterRule(listener: ComplexListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumContext extends ParserRuleContext {
	public value: string | undefined;
	public _n!: Token;
	public NUMBER(): TerminalNode { return this.getToken(ComplexParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexParser.RULE_num; }
	// @Override
	public enterRule(listener: ComplexListener): void {
		if (listener.enterNum) {
			listener.enterNum(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexListener): void {
		if (listener.exitNum) {
			listener.exitNum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexVisitor<Result>): Result {
		if (visitor.visitNum) {
			return visitor.visitNum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public value: string | undefined;
	public _c!: Token;
	public CHAR(): TerminalNode { return this.getToken(ComplexParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexParser.RULE_element; }
	// @Override
	public enterRule(listener: ComplexListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


