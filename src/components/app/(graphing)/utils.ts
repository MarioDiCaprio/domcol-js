import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import MathGLSL from "@/components/app/(graphing)/parser/mathGLSL";
import {useEffect, useState} from "react";

/**
 * An interval is a tuple of two values defining a lower and an upper
 * bound (both values inclusive).
 */
export type Interval = { min: number, max: number };

/**
 * This is a two-dimensional point.
 */
export type Point2D = [number, number];

// Note: While `Interval` and `Point2D` are the same, they mean
// different things semantically!

//////////////////////////////////////////////////////////////////////////////////

/**
 * Transforms a value from one interval to another. For example:
 *
 * ```tsx
 * // here, x is mapped from [0, 100] to [-2, 2]
 * // e.g.: x = 0   => y = -2
 * //       x = 100 => y =  2
 * let y = transformInterval(x, [0, 100], [-2, 2]);
 * ```
 *
 * @param value The value to transform
 * @param from The interval to transform from
 * @param to The interval to transform to
 * @return The transformed value
 */
export function transformInterval(value: number, from: Interval, to: Interval): number {
    return (to.max - to.min) / (from.max - from.min) * value + (to.min - from.min);
}

export function scaleInterval(factor: number, interval: Interval): Interval {
    const {min: lower, max: upper} = interval;
    let center = (lower + upper) / 2;
    return {min: (lower - center) * factor + center, max: (upper - center) * factor + center};
}

/**
 * Automatically calculates the whole domain with respects to the screen size, such that
 * one unit on the x-axis is equal to exactly one unit on the y-axis.
 * @param screen The screen size
 * @param promptX A prompt for the domain's x-axis (`[min, max]`).
 * @param promptY A prompt for the domain's y-axis (`[min, max]`).
 * @return The calculated domain (`[domainX, domainY]`).
 */

export function autoCalculateDomain(screen: {width: number; height: number}, promptX: Interval, promptY: Interval) {
    const { width, height } = screen;
    const { min: minX, max: maxX } = promptX;
    const { min: minY, max: maxY } = promptY;
    let ratio = width / height;
    
    let domainX = promptX;
    let domainY = promptY;
    
    if (ratio > 1) {
        domainY = promptY;
        domainX = {min: minY * ratio, max: maxY * ratio};
    } else  {
        ratio = height / width;
        domainX = promptX;
        domainY = {min: minX * ratio, max: maxX * ratio};
    }
    
    return { x: domainX, y: domainY };
}

export function useCombinedEditorInputIntoGLSL(): string {
    const equations = useSelector((state: RootState) => state.equations);
    return MathGLSL.parse(equations.join(';'));
}

export function useScreenSize() {
    const [width, setWidth] = useState<number>(-1);
    const [height, setHeight] = useState<number>(-1);

    useEffect(() => {
        let main = document.getElementsByTagName('main').item(0) as HTMLElement;
        setWidth(main.clientWidth);
        setHeight(main.clientHeight);
    }, []);
    
    return { width, height };
}
