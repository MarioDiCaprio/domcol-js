import React, { useEffect, useState } from 'react';


interface MathJaxProps {
    math: string;
    raw?: boolean;
    display?: boolean;
}

const MathJax: React.FC<MathJaxProps> = ({ math, raw, display = false }) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [result, setResult] = useState<JSX.Element>(<></>);

    let tex = math;
    if (raw) {
        tex = String.raw({ raw: math });
    }

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const {MathComponent} = require('mathjax-react');
        setResult(<MathComponent tex={tex} display={display} />)
    }, [math, raw, display]);

    return !isMounted? null : result;
}


export default MathJax;
