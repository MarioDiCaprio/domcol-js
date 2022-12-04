import styles from './Editor.module.scss';
import React, {useEffect, useState} from 'react';
import { EditableMathField, addStyles } from 'react-mathquill';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {addEquation, clearEquations, removeEquation, setEquations} from "../../../redux/slices/equationsSlice";
import {AnimatePresence, LayoutGroup, motion, MotionProps} from "framer-motion";
import {BiAddToQueue as AddIcon} from "react-icons/bi";
import {AiOutlineDelete as ClearIcon} from 'react-icons/ai';
import {MdClear as DeleteIcon} from "react-icons/md";
import {Tooltip} from "antd";


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

    const equationMotion: MotionProps = {
        layout: true,
        initial: { opacity: 0, translateY: '50vh' },
        animate: { opacity: 1, translateY: 0 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 }
    }

    const deleteButtonMotion: MotionProps = {
        whileTap: { scale: 0.7 },
        transition: { type: 'spring', duration: 0.3 }
    }

    function handleDeleteButtonClicked() {
        if (onDelete) onDelete(index);
    }

    return (
        <motion.div
            id={'equation-' + index}
            key={'equation-' + index}
            className={styles.equation}
            {...equationMotion}
        >

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
                    if (isFirstRender) {
                        setIsFirstRender(false);
                    } else {
                        if (onChange) onChange(mathField.latex(), index);
                    }
                }}
            />

            {/* Delete Button */}
            <motion.button
                className={styles.deleteEquationButton}
                onClick={handleDeleteButtonClicked}
                {...deleteButtonMotion}
            >
                <DeleteIcon />
            </motion.button>

        </motion.div>
    );
}


interface ToolbarProps {
    onAdd?: () => void;
    onClear?: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAdd, onClear }) => {
    const buttonMotion: MotionProps = {
        whileTap: { scale: 0.7 },
        transition: { type: 'spring', duration: 0.3 }
    }

    const ButtonTooltip: React.FC<{ tooltip: string, onClick?: () => void, children?: React.ReactNode }> = (props) => (
        <Tooltip
            title={props.tooltip}
            placement="bottom"
            mouseEnterDelay={0}
            mouseLeaveDelay={0}
            overlayInnerStyle={{
                borderRadius: '14px'
            }}
        >
            <motion.div onClick={props.onClick} {...buttonMotion}>
                <AddIcon />
            </motion.div>
        </Tooltip>
    );

    return (
        <div className={styles.toolbar}>

            {/* Add Equation */}
            <ButtonTooltip tooltip="New Equation" onClick={onAdd}>
                <AddIcon />
            </ButtonTooltip>

            {/* Clear Equations */}
            <ButtonTooltip tooltip="Clear All" onClick={onClear}>
                <ClearIcon />
            </ButtonTooltip>

        </div>
    );
}


/**
 * This is the equation editor. It consists of a list of {@link Equation}s.
 * When these equations change, the changes are dispatched to the redux store.
 * When the component first renders the equations will be fetched from the redux store.
 * Also, any change to the redux store will have an immediate effect on this editor.
 * @see Equation
 */
const Editor: React.FC = () => {
    /** The {@link Equation} components */
    const [equationComponents, setEquationComponents] = useState<JSX.Element[]>([]);
    /** The equation list from the redux store */
    const equations = useSelector((state: RootState) => state.equations);
    /** A function to dispatch changes to the redux store */
    const dispatch = useDispatch();

    // update equation components whenever the equations in the redux store change
    useEffect(() => {
        setEquationComponents(equations.map((eq, index) => (
            <Equation
                index={index}
                key={index.toString()}
                initial={eq}
                onChange={handleChange}
                onDelete={handleRemoveEquation}
            />
        )));
    }, [equations]);

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

    /**
     * Called when the "add" button in the toolbar is pressed.
     * Appends a new equation to the end of the list.
     */
    function handleAddEquation() {
        dispatch(addEquation());
    }

    /**
     * Called when the "remove" button is clicked in an equation component.
     * Removes that equation from the list.
     * @param index The index of the equation to remove
     */
    function handleRemoveEquation(index: number) {
        dispatch(removeEquation(index));
    }

    /**
     * Called when the "clear" button in the toolbar is pressed.
     * Empties the list of equations
     */
    function handleClearEquations() {
        dispatch(clearEquations());
    }

    return (
        <div className={styles.context}>

            {/* The top toolbar */}
            <Toolbar onAdd={handleAddEquation} onClear={handleClearEquations} />

            {/* The equations */}
            <LayoutGroup>
                <AnimatePresence>
                    { equationComponents }
                </AnimatePresence>
            </LayoutGroup>

        </div>
    );
}


export default Editor;
