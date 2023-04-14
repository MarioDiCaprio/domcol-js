import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
import {NextPage} from "next";
import Base from "../components/Base/Base";
import MathGLSL from "../data/parser/mathGLSL";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {Context, DomainColoringWrapper} from "../styles/Plot.styles";
import FloatingMenu from "../components/_plot/FloatingMenu/FloatingMenu";
import PlotContext from "../components/_plot/PlotContext";
import PlotAlgorithmSelector from "../components/_plot/PlotAlgorithmSelector/PlotAlgorithmSelector";

// avoid server-side rendering on Editor to prevent "window is not defined"
const Editor = dynamic(() => import("../components/_plot/editor/Editor/Editor"), { ssr: false });


const Plot: NextPage = () => {
    const algorithm = useSelector((state: RootState) => state.plotSettings.activePlotAlgorithm);
    /** The current equations in the editor. These are parsed to GLSL. */
    const equations = useSelector((state: RootState) => state.equations);
    /** The current GLSL code that is being rendered. */
    const [code, setCode] = useState<string>(parseEquationsToGlsl());
    /** Whether a reload is being forced to the `DomainColoringGL` component. Used to re-render. */
    const [reload, setReload] = useState<boolean>(false);
    /** Whether the editor is open. */
    const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

    useEffect(() => {
        setReload(true);
        setTimeout(() => {
            setReload(false);
        }, 100);
    }, [algorithm]);


    function parseEquationsToGlsl(): string {
        let glslPerEquation = equations.map(latex => MathGLSL.parse(latex));
        return glslPerEquation.join('\n\n');
    }

    function plotEquations(): void {
        setCode(parseEquationsToGlsl());
        setReload(true);
        setTimeout(() => {
            setReload(false);
        }, 1);
    }

    function toggleEditor() {
        setIsEditorOpen(!isEditorOpen);
    }

    return (
        <Base title="Domcol JS | Plot">

            {/* Main Container */}
            <Context>

                {/* Domain Coloring */}
                <DomainColoringWrapper>
                    <PlotContext code={code} reload={reload} />
                </DomainColoringWrapper>

                {/* Editor */}
                <Editor open={isEditorOpen} onClose={toggleEditor} />

                <FloatingMenu
                    editClicked={toggleEditor}
                    plotClicked={plotEquations}
                />

                <PlotAlgorithmSelector />

            </Context>

        </Base>
    );
}


// noinspection JSUnusedGlobalSymbols
export default Plot;
