import React from "react";
import {Context, Gradient} from "./RadialDescriptor.styles";
import MathJax from "../../MathJax/MathJax";


const RadialDescriptor: React.FC = () => {
    return (
        <Context>
            <Gradient>
                <MathJax raw math="0" />
                <MathJax raw math="\frac{1}{2} \pi" />
                <MathJax raw math="\pi" />
                <MathJax raw math="\frac{3}{2} \pi" />
                <MathJax raw math="0" />
            </Gradient>
        </Context>
    );
}


export default RadialDescriptor;