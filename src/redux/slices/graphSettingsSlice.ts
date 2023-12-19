import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PartialDeep} from "type-fest";
import {merge} from "@/redux/utils";


export interface GraphSettings {
    showDarkGridLines: boolean;
    showLightGridLines: boolean;
    isMinimalThemeEnabled: boolean;
}

const initialState: GraphSettings = {
    showDarkGridLines: true,
    showLightGridLines: true,
    isMinimalThemeEnabled: false
}

export const graphSettingsSlice = createSlice({
    name: "GraphSettings",
    initialState,
    reducers: {
        
        updateGraphSettings: (state, action: PayloadAction<PartialDeep<GraphSettings>>) => {
            return merge<GraphSettings>({...state}, action.payload)
        }
        
    }
})

export const { updateGraphSettings } = graphSettingsSlice.actions