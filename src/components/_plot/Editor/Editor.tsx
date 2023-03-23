import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {addEquation, clearEquations, removeEquation, setEquations} from "../../../redux/slices/equationsSlice";
import {AnimatePresence, LayoutGroup} from "framer-motion";
import Equation from "../Equation/Equation";
import Toolbar from "../Toolbar/Toolbar";
import {EditorContent, EditorHead} from "./Editor.styles";
import {Drawer, IconButton} from "@mui/material";
import {HiMenu as MenuIcon} from "react-icons/hi";


interface EditorProps {
    open: boolean;
    onClose?: () => void;
}


/**
 * This is the equation editor. It consists of a list of {@link Equation}s.
 * When these equations change, the changes are dispatched to the redux store.
 * When the component first renders the equations will be fetched from the redux store.
 * Also, any change to the redux store will have an immediate effect on this editor.
 * @see Equation
 */
const Editor: React.FC<EditorProps> = ({ open, onClose }) => {
    const [equationComponents, setEquationComponents] = useState<JSX.Element[]>([]);
    const equations = useSelector((state: RootState) => state.equations);
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

    function handleAddEquation() {
        dispatch(addEquation());
    }

    function handleRemoveEquation(index: number) {
        dispatch(removeEquation(index));
    }

    function handleClearEquations() {
        dispatch(clearEquations());
    }

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <EditorContent>

                <EditorHead>
                    <h3>Editor</h3>
                    <IconButton size="large" color="primary" onClick={onClose}>
                        <MenuIcon />
                    </IconButton>
                </EditorHead>

                <Toolbar onAdd={handleAddEquation} onClear={handleClearEquations} />

                {/* The equations */}
                <LayoutGroup>
                    <AnimatePresence>
                        { equationComponents }
                    </AnimatePresence>
                </LayoutGroup>

            </EditorContent>
        </Drawer>
    );
}


export default Editor;
