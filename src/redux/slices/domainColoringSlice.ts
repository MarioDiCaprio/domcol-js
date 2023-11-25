import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PartialDeep} from "type-fest";
import {merge} from "@/redux/utils";

export interface DomainColoringSettings {
    domain: {
        x: { min: number; max: number };
        y: { min: number; max: number };
    };
}

export const initialState: DomainColoringSettings = {
    domain: {
        x: { min: -2, max: 2 },
        y: { min: -2, max: 2 }
    }
}

export const domainColoringSlice = createSlice({
    name: 'DomainColoring',
    initialState,
    reducers: {

        updateDomainColoringSettings: (state, action: PayloadAction<PartialDeep<DomainColoringSettings>>) => {
            return merge<DomainColoringSettings>({...state}, action.payload);
        }
            
    }
});

export const { updateDomainColoringSettings } = domainColoringSlice.actions;