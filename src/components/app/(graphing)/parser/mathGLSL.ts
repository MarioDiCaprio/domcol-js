import {ComplexLexer} from './.antlr/ComplexLexer';
import {ComplexParser} from './.antlr/ComplexParser';
import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";


/**
 * This namespace contains the parser to plot functions.
 */
namespace MathGLSL {

    /**
     * This function parses the given input. It converts LaTeX math into
     * GLSL-readable code to plot the given function.
     * @param input The code as LaTeX math
     * @returns The code in GLSL
     */
    export function parse(input: string | undefined): string {
        if (!input) {
            return '';
        }
        const chars = new ANTLRInputStream(input);
        const lexer = new ComplexLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new ComplexParser(tokens);
        parser.removeErrorListeners();
        parser.parse();
        return parser.result;
    }

}

export default MathGLSL;
