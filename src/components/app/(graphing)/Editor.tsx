"use client"

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import Equation from "@/components/app/(graphing)/Equation";
import {addEquation, removeEquation} from "@/redux/slices/equationsSlice";
import { IoMdAdd as AddIcon } from "react-icons/io";
import { MdKeyboardDoubleArrowRight as OpenMenuIcon, MdKeyboardDoubleArrowLeft as CloseMenuIcon } from "react-icons/md";
import { motion } from "framer-motion";
import {Button} from "@nextui-org/react";
import EditorSettings from "@/components/app/(graphing)/EditorSettings";
import EditorSnapshotLink from "@/components/app/(graphing)/EditorSnapshotLink";


const Editor: React.FC = () => {
    const dispatch = useDispatch();
    const equations = useSelector((state: RootState) => state.equations);
    
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [equationComponents, setEquationComponents] = useState<JSX.Element[]>([]);

    // update equation components whenever the equations in the redux store change
    useEffect(() => {
        // equations in store
        const newEquations = equations.map((eq, index) => (
            <Equation index={index} key={index.toString()} onDelete={handleRemoveEquation}/>
        ));
        // "prompt" field that adds new equation when clicked
        newEquations.push(
            <div className="relative" key="prompt-equation">
                <div className="z-[9999] absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white cursor-pointer" onClick={handleAddEquation}/>
                <Equation index={equations.length} />
            </div>
        );
        setEquationComponents(newEquations);
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
                        <EditorSnapshotLink />
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