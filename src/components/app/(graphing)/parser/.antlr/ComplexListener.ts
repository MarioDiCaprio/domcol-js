// Generated from src/components/app/(graphing)/parser/.antlr/Complex.g4 by ANTLR 4.9.0-SNAPSHOT



type SymbolDeclaration = Partial<{
    name: string; // The name of the symbol being declared (one character!)
    type: 'function' | 'constant'; // The type of the declaration
    value: string; // The value of the symbol being declared i.e. the value that is returned when invoking the symbol
    initialOrder: number; // The initial order of the declaration. The n-th declaration should have order n.
    isPlot: boolean; // Whether the symbol should be plotted
    arguments: string[]; // if the symbol is a function, a list of arguments. E.g: f(x, y) has arguments ['x', 'y'].
    dependencies: string[]; // a list of all symbols (their names) on which this symbol is dependent. E.g: f(x) = g(x) + a is dependent on ['g', 'a']
}>;



import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParseContext } from "./ComplexParser";
import { AssignmentContext } from "./ComplexParser";
import { AdditionContext } from "./ComplexParser";
import { MultiplicationContext } from "./ComplexParser";
import { FractionOrPowerContext } from "./ComplexParser";
import { PowerContext } from "./ComplexParser";
import { AtomContext } from "./ComplexParser";
import { NumContext } from "./ComplexParser";
import { ElementContext } from "./ComplexParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ComplexParser`.
 */
export interface ComplexListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ComplexParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexParser.addition`.
	 * @param ctx the parse tree
	 */
	enterAddition?: (ctx: AdditionContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexParser.addition`.
	 * @param ctx the parse tree
	 */
	exitAddition?: (ctx: AdditionContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexParser.multiplication`.
	 * @param ctx the parse tree
	 */
	enterMultiplication?: (ctx: MultiplicationContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexParser.multiplication`.
	 * @param ctx the parse tree
	 */
	exitMultiplication?: (ctx: MultiplicationContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexParser.fractionOrPower`.
	 * @param ctx the parse tree
	 */
	enterFractionOrPower?: (ctx: FractionOrPowerContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexParser.fractionOrPower`.
	 * @param ctx the parse tree
	 */
	exitFractionOrPower?: (ctx: FractionOrPowerContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexParser.power`.
	 * @param ctx the parse tree
	 */
	enterPower?: (ctx: PowerContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexParser.power`.
	 * @param ctx the parse tree
	 */
	exitPower?: (ctx: PowerContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexParser.num`.
	 * @param ctx the parse tree
	 */
	enterNum?: (ctx: NumContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexParser.num`.
	 * @param ctx the parse tree
	 */
	exitNum?: (ctx: NumContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;
}

