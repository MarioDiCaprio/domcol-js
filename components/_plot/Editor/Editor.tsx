import styles from './Editor.module.scss';
import React, {useEffect, useState} from 'react';
import { EditableMathField, addStyles } from 'react-mathquill';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {setEquations} from "../../../redux/slices/equationsSlice";


// add styles for Mathquill
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
    onChange?: (latex: string) => void;
}


/**
 * This is a mathematical equation in the editor. It is only one row in the editor, containing
 * an editable equation (from the *MathQuill* package) and a decorative prefix that displays
 * additional information, like the equation's index in the editor.
 * @param props The props for this component.
 * @see EquationProps
 * @see Editor
 */
const Equation: React.FC<EquationProps> = ({ index, initial = "", onChange }) => {
    return (
        <div id={'equation-' + index} key={'equation-' + index} className={styles.equation}>

            {/* The equation's decorative prefix with additional information */}
            <div className={styles.equationIndex}>
                {/* The equation's index in the editor, +1 to make it one-based */}
                <span>{ index + 1 }</span>
            </div>

            {/* The editable math field from MathQuill. */}
            <EditableMathField
                style={{ width: '100%', border: 'none', paddingLeft: '10px' }}
                latex={initial}
                config={{
                    autoCommands: 'pi sqrt Re Im Mandelbrot',
                    autoOperatorNames: 'sin cos tan log ln Mandelbrot'
                }}
                onChange={(mathField) => {
                    console.log(mathField.latex());
                    if (onChange) onChange(mathField.latex());
                }}
            />
        </div>
    );
}


/**
 * This is the equation editor. It consists of a list of {@link Equation}s.
 * When these equations are edited this component dispatches the changes to
 * the redux store. When this component loads for the first time, it loads
 * any existing equations in the redux store.
 * @see Equation
 */
const Editor: React.FC = () => {
    /** The {@link Equation} components */
    const [equationComponents, setEquationComponents] = useState<JSX.Element[]>([]);
    /** The equation list from the redux store */
    const equations = useSelector((state: RootState) => state.equations);
    /** A function to dispatch changes to the redux store */
    const dispatch = useDispatch();

    // When component first loads: Load equations from the redux store.
    // Changes are never updated through the course of the application,
    // as this component is the only source of changes made to the store's
    // equations.
    useEffect(() => {
        setEquationComponents(equations.map((eq, index) => (
            <Equation index={index} initial={eq} onChange={latex => handleChange(latex, index)} />
        )))
    }, []);

    /**
     * Called whenever an equation in the editor changes. Updates and
     * dispatches those changes to the redux store.
     * @param latex The updated code
     * @param index The index of the equation that changed
     */
    function handleChange(latex: string, index: number) {
        let tmp = equations.map((eq, i) => i === index? latex : equations[i]);
        dispatch(setEquations(tmp));
    }

    return (
        <div className={styles.context}>
            { equationComponents }
        </div>
    );
}


export default Editor;
