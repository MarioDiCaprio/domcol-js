import styles from './Editor.module.scss';
import React, {useCallback, useRef} from 'react';
import CodeMirror, {ReactCodeMirrorProps} from '@uiw/react-codemirror';
import { githubDark } from "@uiw/codemirror-theme-github";
import {complex} from "../../data/parser/codemirror/complexMathCodemirrorSupport";


/**
 * Props for the editor. There is an event that is triggered each
 * time the code is changed, as well as the current value in the editor.
 */
interface EditorProps {
    /** Triggered each time the code is changed. Takes the new code as argument. */
    onCodeChanged?: (code: string) => void;
    /** The current value of the editor. */
    value?: string;
}

/**
 * This component is a code editor. This editor parses complex math.
 * Please refer to `EditorProps` for more information.
 * @param props The editor props
 * @returns The code editor
 */
const Editor: React.FC<EditorProps> = props => {
    const ref = useRef<HTMLDivElement>(null);

    // @ts-ignore
    const onChange = useCallback<ReactCodeMirrorProps['onChange']>((value, _viewUpdate) => {
        if (props.onCodeChanged)
            props.onCodeChanged(value);
    }, []);

    return (
        <div ref={ref} className={styles.context} data-test="editor">
            <CodeMirror
                value={props.value}
                theme={githubDark}
                onChange={onChange}
                extensions={[complex()]}
                height="100vh"
            />
        </div>
    );
}

export default Editor;
