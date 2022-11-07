import styles from '../styles/Plot.module.scss';
import { useState } from "react";
import {NextPage} from "next";
import Base from "../components/Base/Base";
import DomcolGL from "../components/DomcolGL/DomcolGL";
import Editor from "../components/Editor/Editor";
import {Drawer, Space} from "antd";


const INITIAL_EDITOR_CODE =
    `# defines a flag #
$colormode=0

# defines a function and plots it #
@Plot
f(z) = z;
`;


const Plot: NextPage = () => {
    const [tmp, setTmp] = useState<string>(INITIAL_EDITOR_CODE);
    const [code, setCode] = useState<string>(INITIAL_EDITOR_CODE);
    const [reload, setReload] = useState<boolean>(false);
    const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);


    function handleCodeChanged(newCode: string) {
        setTmp(newCode);
    }

    function handlePlotButtonClicked() {
        setCode(tmp);
        setReload(true);
        setTimeout(() => {
            setReload(false);
        }, 1);
    }

    function handleToggleEditor() {
        setIsEditorOpen(!isEditorOpen);
    }

    return (
        <Base title="DomcolJS | Plot">

            {/* Main Container */}
            <div className={styles.context}>

                {/* Domain Coloring */}
                <div className={styles.domainColoringWrapper}>
                    <DomcolGL code={code} reload={reload} />
                </div>

                {/* Editor */}
                <Drawer
                    className={styles.editorDrawer}
                    title="Plot Editor"
                    placement="right"
                    open={isEditorOpen}
                    onClose={handleToggleEditor}
                    width="600px"
                    extra={
                        <Space>
                            <button className={styles.closeEditorButton} onClick={handleToggleEditor}>
                                Close
                            </button>
                        </Space>
                    }
                >
                    <div className={styles.editorDrawerContent}>
                        <Editor
                            value={ INITIAL_EDITOR_CODE }
                            onCodeChanged={handleCodeChanged}
                        />
                    </div>
                </Drawer>

                {/* Nav with editor buttons */}
                <nav className={styles.editorButtonsNav}>
                    {/* Plot current code */}
                    <button className={styles.plotButton} onClick={handlePlotButtonClicked}>
                        Plot
                    </button>
                    {/* Open editor */}
                    <button className={styles.openEditorButton} onClick={handleToggleEditor}>
                        Edit
                    </button>
                </nav>

            </div>

        </Base>
    );
}

export default Plot;
