// Generated from src/components/app/(graphing)/parser/.antlr/Complex.g4 by ANTLR 4.9.0-SNAPSHOT



type SymbolDeclaration = {
    name: string; // The name of the symbol being declared (one character!)
    type: 'function' | 'constant'; // The type of the declaration
    value: string; // The value of the symbol being declared i.e. the value that is returned when invoking the symbol
    initialOrder: number; // The initial order of the declaration. The n-th declaration should have order n.
}



import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ComplexParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ComplexVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ComplexParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexParser.addition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddition?: (ctx: AdditionContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexParser.multiplication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplication?: (ctx: MultiplicationContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexParser.fractionOrPower`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFractionOrPower?: (ctx: FractionOrPowerContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexParser.power`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower?: (ctx: PowerContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexParser.num`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNum?: (ctx: NumContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;
}

