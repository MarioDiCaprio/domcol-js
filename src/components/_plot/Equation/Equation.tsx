import {addStyles, EditableMathField} from "react-mathquill";
import React, {useState} from "react";
import {MdClear as DeleteIcon} from "react-icons/md";
import {Context, DeleteSection, EquationIndex} from "./Equation.styles";
import {IconButton} from "@mui/material";
import {contextMotion} from "./Equation.motion";

// add styles for MathQuill
addStyles();


/**
 * The props for an equation component.
 */
interface EquationProps {
    /** This equation's index in the editor. */
    index: number;
    /** The equation's initial text. Default is an empty string. */
    initial?: string;
    /**
     * A function that is called when the equation's content changes.
     * @param latex The new content as `LaTeX`.
     */
    onChange?: (latex: string, index: number) => void;
    /**
     * A function that is triggered when the "delete"-button gets clicked.
     * @param index This equation's index in the editor
     */
    onDelete?: (index: number) => void;
}


/**
 * This is a mathematical equation in the editor. It is only one row in the editor, containing
 * an editable equation (from the *MathQuill* package) and a decorative prefix that displays
 * additional information, like the equation's index in the editor.
 * @param props The props for this component.
 * @see EquationProps
 * @see Editor
 */
const Equation: React.FC<EquationProps> = ({ index, initial = "", onChange, onDelete }) => {
    /**
     * Whether the component is first being rendered. It is set to true at first.
     * In the `onChange` event, since the component was rendered already, it will be
     * permanently set to false. This is important, because the first `onChange` event
     * should never be fired, since the equation is being loaded form the redux store.
     */
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

    function handleDeleteButtonClicked() {
        if (onDelete) onDelete(index);
    }

    return (
        <Context id={'equation-' + index} key={'equation-' + index} {...contextMotion}>

            {/* The equation's decorative prefix with additional information */}
            <EquationIndex>
                {/* The equation's index in the editor, +1 to make it one-based */}
                <span>{ index + 1 }</span>
            </EquationIndex>

            {/* The editable math field from MathQuill. */}
            <EditableMathField
                style={{
                    width: '100%',
                    border: 'none',
                    minHeight: '55px',
                    display: 'flex',
                    alignItems: 'center',
                    margin: '1px',
                    paddingLeft: '20px',
                }}
                latex={initial}
                config={{
                    autoCommands: 'pi sqrt Re Im Mandelbrot',
                    autoOperatorNames: 'sin cos tan sinh cosh tanh sec cot csc cis log ln Mandelbrot'
                }}
                onChange={(mathField) => {
                    if (isFirstRender) {
                        setIsFirstRender(false);
                    } else {
                        if (onChange) onChange(mathField.latex(), index);
                    }
                }}
            />

            {/* Delete Button */}
            <DeleteSection>
                <IconButton onClick={handleDeleteButtonClicked}>
                    <DeleteIcon />
                </IconButton>
            </DeleteSection>

        </Context>
    );
}

export default Equation;