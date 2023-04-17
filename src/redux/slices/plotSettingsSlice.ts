import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import {PartialDeep} from "type-fest";


export interface PlotSettings {
    activePlotAlgorithm: 'domain-coloring' | 'riemann-sphere',
    riemannSphere: {
        sphere: {
            subdivisions: number;
        }
        axis: {
            visible: boolean;
            labels: boolean;
        }
    }
}

//////////////////////////////////////////////////////////////////////////////

const cookies = new Cookies();
let initialState: PlotSettings = cookies.get('plotSettings');
if (!initialState) {
    initialState = {
        activePlotAlgorithm: 'domain-coloring',
        riemannSphere: {
            sphere: {
                subdivisions: 100
            },
            axis: {
                visible: true,
                labels: true
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////////////

function merge<T extends object>(old: T, update: PartialDeep<T>): T {
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

const plotSettings = createSlice({
    name: 'PlotSettings',
    initialState,
    reducers: {

        updatePlotSettings: (state, action: PayloadAction<PartialDeep<PlotSettings>>) => {
            let settings: PlotSettings = merge<PlotSettings>({...state}, action.payload);
            cookies.set('plotSettings', settings);
            return settings;
        }

    }
});

export default plotSettings.reducer;

export const { updatePlotSettings } = plotSettings.actions;
