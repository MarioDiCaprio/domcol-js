import { ComponentMeta, ComponentStory } from "@storybook/react";
import MathJax from "./MathJax";


export default {
    title: 'components/MathJax',
    component: MathJax,
    args: {
        math: 'f(x) = \\int_0^{\\infty} \\sin(x)dx',
        raw: true,
        display: false
    }
} as ComponentMeta<typeof MathJax>


export const Main: ComponentStory<typeof MathJax> = (props) => {
    return (
        <MathJax {...props} />
    );
}
