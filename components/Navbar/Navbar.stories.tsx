import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "./Navbar";


export default {
    title: 'components/Navbar',
    component: Navbar
} as ComponentMeta<typeof Navbar>;


export const Main: ComponentStory<typeof Navbar> = (props) => {
    return (
        <Navbar {...props} />
    );
}
