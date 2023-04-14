import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Cookies from "universal-cookie";


export interface PlotSettings {
    activePlotAlgorithm: 'domain-coloring' | 'riemann-sphere',

}

//////////////////////////////////////////////////////////////////////////////

const cookies = new Cookies();
let initialState: PlotSettings = cookies.get('plotSettings');
if (!initialState) {
    initialState = {
        activePlotAlgorithm: 'domain-coloring'
    }
}

//////////////////////////////////////////////////////////////////////////////


const plotSettings = createSlice({
    name: 'PlotSettings',
    initialState,
    reducers: {

        updatePlotSettings: (state, action: PayloadAction<Partial<PlotSettings>>) => {
            let settings: PlotSettings = {
                ...state,
                ...action.payload
            };
            cookies.set('plotSettings', settings);
            return settings;
        }

    }
});

export default plotSettings.reducer;

export const { updatePlotSettings } = plotSettings.actions;
