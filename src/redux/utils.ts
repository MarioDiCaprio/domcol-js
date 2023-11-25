import {PartialDeep} from "type-fest";

export function merge<T extends object>(old: T, update: PartialDeep<T>): T {
    // @ts-ignore
    let copy: T = {}
    for (let key in old) {
        copy[key] = old[key];
    }
    for (let key in update) {
        if (update[key] instanceof Object) {
            // @ts-ignore
            update[key] = merge(copy[key], update[key])
        }
    }
    // Join `target` and modified `source`
    Object.assign(copy || {}, update);
    return copy;
}