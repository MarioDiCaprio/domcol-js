import { useState, useEffect } from "react";
import {useMediaQuery} from "react-responsive";
import {dimensions} from "../styleVariables";


function useDimensions(): { width: number, height: number } {
    const [width, setWidth] = useState<number>(window.screen.width);
    const [height, setHeight] = useState<number>(window.screen.height);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.screen.width);
            setHeight(window.screen.height);
        });
    }, []);

    return { width, height };
}

export default useDimensions;


export function useMaxScreen(width: number) {
    const isSmallScreen = useMediaQuery({ query: `(max-width: ${width}px)` })
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted && isSmallScreen;
}

export function useSmallScreen() {
    return useMaxScreen(dimensions.small);
}

export function useMediumScreen() {
    return useMaxScreen(dimensions.medium);
}

export function useLargeScreen() {
    return useMaxScreen(dimensions.large);
}
