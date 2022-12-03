import styles from '../styles/Plot.module.scss';
import dynamic from "next/dynamic";
import {useState} from "react";
import {NextPage} from "next";
import Base from "../components/Base/Base";
import DomcolGL from "../components/DomcolGL/DomcolGL";
import {Drawer, Space} from "antd";
import MathGLSL from "../data/parser/mathGLSL";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

// avoid server-side rendering on Editor to prevent "window is not defined"
const Editor = dynamic(() => import("../components/Editor/Editor"), { ssr: false });


const Plot: NextPage = () => {
    const equations = useSelector((state: RootState) => state.equations);
    const [code, setCode] = useState<string>(parseEquationsToGlsl());
    const [reload, setReload] = useState<boolean>(false);
    const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);


    function parseEquationsToGlsl(): string {
        let glslPerEquation = equations.map(latex => MathGLSL.parse(latex));
        return glslPerEquation.join('\n\n');
    }

    function handlePlotButtonClicked() {
        setCode(parseEquationsToGlsl());
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
                        <Editor />
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
