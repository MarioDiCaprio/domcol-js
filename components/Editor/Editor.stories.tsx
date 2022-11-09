import { ComponentMeta, ComponentStory } from "@storybook/react";
import Editor from "./Editor";


const INITIAL_EDITOR_VALUE =
`# This is a comment #

# Comments can
also be multiline #

# This defines a function #
f(z) = z^2 + sin(z);

# This is the mandelbrot set #
@Mandelbrot
g(z) = z^2;

# This plots a function #
@Plot
h(z) = ln(z) + 1;
`

export default {
    title: 'components/Editor',
    component: Editor,
    args: {
        value: INITIAL_EDITOR_VALUE
    }
} as ComponentMeta<typeof Editor>;


export const Main: ComponentStory<typeof Editor> = (props) => {
    return (
        <Editor {...props} />
    );
}
