"use client"

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import Equation from "@/components/app/(graphing)/Equation";
import {addEquation, clearEquations, removeEquation} from "@/redux/slices/equationsSlice";
import { IoMdAdd as AddIcon } from "react-icons/io";
import { MdKeyboardDoubleArrowRight as OpenMenuIcon, MdKeyboardDoubleArrowLeft as CloseMenuIcon } from "react-icons/md";
import { IoMdSettings as SettingsIcon } from "react-icons/io";
import { motion } from "framer-motion";
import {Button} from "@nextui-org/react";
import EditorSettings from "@/components/app/(graphing)/EditorSettings";


const Editor: React.FC = () => {
    const dispatch = useDispatch();
    const equations = useSelector((state: RootState) => state.equations);
    
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [equationComponents, setEquationComponents] = useState<JSX.Element[]>([]);

    // update equation components whenever the equations in the redux store change
    useEffect(() => {
        setEquationComponents(equations.map((eq, index) => (
            <Equation
                index={index}
                key={index.toString()}
                onDelete={handleRemoveEquation}
            />
        )));
    }, [equations]);

    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth < 500) {
            setIsOpen(false);
        }
    }, []);
    
    function toggleEditorOpen() {
        setIsOpen(!isOpen);
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
        <>
            <motion.div
                animate={{ x: isOpen? 0 : -500 }}
                transition={{ duration: 0.3 }}
                className="z-[2] fixed w-full max-w-[500px] h-full flex flex-col border border-r-zinc-300 shadow-2xl">

                <div className="
                        w-full h-12 flex justify-between items-center
                        border border-b-zinc-400 text-zinc-800 text-3xl
                        bg-gradient-to-b from-zinc-100 to-zinc-200">
                    <Button isIconOnly variant="light" onClick={handleAddEquation} className="text-2xl">
                        <AddIcon />
                    </Button>
                    <div className="flex gap-3">
                        <EditorSettings />
                        <Button isIconOnly variant="light" onPress={toggleEditorOpen} className="text-2xl">
                            <CloseMenuIcon />
                        </Button>
                    </div>
                </div>

                <div className="w-full h-full bg-white">
                    { equationComponents }
                </div>

            </motion.div>
            <button
                onClick={toggleEditorOpen}
                className="
                    z-[1] fixed m-10 p-2 rounded shadow-2xl
                    bg-white text-3xl text-zinc-700 hover:text-zinc-900
                    border border-zinc-300">
                <OpenMenuIcon />
            </button>
        </>
    );
}

export default Editor;