import { ComponentMeta, ComponentStory } from "@storybook/react";
import DomcolGL from "./DomcolGL";


const INITIAL_CODE =
`vec2 plottedFunction(vec2 z) {
    return sinC(z);
}
`;


export default {
    title: 'components/DomcolGL',
    component: DomcolGL,
    args: {
        code: INITIAL_CODE,
        reload: false,
        width: 600,
        height: 600,
        domain: {
            x: { min: -2, max: 2 },
            y: { min: -2, max: 2 }
        }
    }
} as ComponentMeta<typeof DomcolGL>;


export const Main: ComponentStory<typeof DomcolGL> = (props) => {
    return (
        <DomcolGL {...props}/>
    );
}
