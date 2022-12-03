import styles from './Editor.module.scss';
import React, {useEffect, useState} from 'react';
import { EditableMathField, addStyles } from 'react-mathquill';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {setEquations} from "../../redux/slices/equationsSlice";


// add styles for Mathquill
addStyles();


interface EquationProps {
    index: number;
    initial?: string;
    onChange?: (latex: string) => void;
}

const Equation: React.FC<EquationProps> = ({ index, initial = '', onChange }) => {
    return (
        <div id={'equation-' + index} key={'equation-' + index} className={styles.equation}>
            <div className={styles.equationIndex}>
                <span>{ index + 1 }</span>
            </div>
            <EditableMathField
                style={{ width: '100%', border: 'none', paddingLeft: '10px' }}
                latex={initial}
                config={{
                    autoCommands: 'pi sqrt'
                }}
                onChange={(mathField) => {
                    console.log(mathField.latex());
                    if (onChange) onChange(mathField.latex());
                }}
            />
        </div>
    );
}


const Editor: React.FC = () => {
    const [equationComponents, setEquationComponents] = useState<JSX.Element[]>([]);

    const equations = useSelector((state: RootState) => state.equations);
    const dispatch = useDispatch();

    useEffect(() => {
        setEquationComponents(equations.map((eq, index) => (
            <Equation index={index} initial={eq} onChange={latex => handleChange(latex, index)} />
        )))
    }, []);

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
