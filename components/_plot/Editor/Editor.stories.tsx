import { ComponentMeta, ComponentStory } from "@storybook/react";
import Editor from "./Editor";
import {Provider} from "react-redux";
import {store} from "../../../redux/store";


export default {
    title: 'components/_plot/Editor',
    component: Editor
} as ComponentMeta<typeof Editor>;


export const Main: ComponentStory<typeof Editor> = (props) => {
    return (
        <Provider store={store}>
            <Editor {...props} />
        </Provider>
    );
}
