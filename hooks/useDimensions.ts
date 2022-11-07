import { useState, useEffect } from "react";


function useDimensions(): { width: number, height: number } {
    const [width, setWidth] = useState<number>(window.screen.width);
    const [height, setHeight] = useState<number>(window.screen.height);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.screen.width);
            setHeight(window.screen.height);
        });
    });

    return { width, height };
}

export default useDimensions;
