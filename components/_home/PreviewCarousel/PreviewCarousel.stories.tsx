import { ComponentMeta, ComponentStory } from "@storybook/react";
import PreviewCarousel from "./PreviewCarousel";


export default {
    title: 'components/_home/PreviewCarousel',
    component: PreviewCarousel
} as ComponentMeta<typeof PreviewCarousel>;


export const Main: ComponentStory<typeof PreviewCarousel> = (props) => {
    return (
        <PreviewCarousel {...props} />
    );
}
