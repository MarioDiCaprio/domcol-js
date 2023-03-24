import antlr4 from 'antlr4';
import ComplexLexer from './.antlr/ComplexLexer';
import ComplexParser from './.antlr/ComplexParser';


/**
 * This namespace contains the parser to plot functions.
 */
namespace MathGLSL {

    /**
     * This function parses the given input. It converts math into
     * GLSL-readable code to plot the given function.
     * @param input The code as math
     * @returns The code in GLSL
     */
    export function parse(input: string | undefined): string {
        if (!input) {
            return '';
        }
        const chars = new antlr4.InputStream(input);
        const lexer = new ComplexLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ComplexParser(tokens);
        parser.removeErrorListeners();
        parser.parse();
        return parser.result;
    }

}

export default MathGLSL;
