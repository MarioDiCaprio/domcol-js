/**
 * An interval is a tuple of two values defining a lower and an upper
 * bound (both values inclusive).
 */
export type Interval = [number, number];

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
    return (to[1] - to[0]) / (from[1] - from[0]) * value + (to[0] - from[0]);
}

export function scaleInterval(factor: number, interval: Interval): Interval {
    const [lower, upper] = interval;
    let center = (lower + upper) / 2;
    return [(lower - center) * factor + center, (upper - center) * factor + center];
}

/**
 * Automatically calculates the whole domain with respects to the screen size, such that
 * one unit on the x-axis is equal to exactly one unit on the y-axis.
 * @param screenSize The screen size (`[width, height]`).
 * @param promptX A prompt for the domain's x-axis (`[min, max]`).
 * @param promptY A prompt for the domain's y-axis (`[min, max]`).
 * @return The calculated domain (`[domainX, domainY]`).
 */
export function autoCalculateDomain(screenSize: Point2D, promptX: Interval, promptY: Interval): [Interval, Interval] {
    const [width, height] = screenSize;
    let ratio = width / height;
    let domainX: Interval, domainY: Interval;
    if (ratio > 1) {
        domainY = promptY;
        domainX = [promptY[0] * ratio, promptY[1] * ratio];
    } else  {
        ratio = height / width;
        domainX = promptX;
        domainY = [promptX[0] * ratio, promptX[1] * ratio];
    }
    return [domainX, domainY];
}
