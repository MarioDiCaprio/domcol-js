import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PartialDeep} from "type-fest";
import {merge} from "@/redux/utils";
import {DomainColoringSettings} from "@/redux/slices/domainColoringSlice";

export interface RiemannSphereSettings {
    geometry: {
        subdivisions: number;
    };
    domainColoring: {
        settings: DomainColoringSettings;
        visible: boolean;
        opacity: number;
        showAxes: boolean;
    }
}

const initialState: RiemannSphereSettings = {
    geometry: {
        subdivisions: 100
    },
    domainColoring: {
        settings: {
            domain: {
                x: { min: -2, max: 2 },
                y: { min: -2, max: 2 }
            }
        },
        visible: true,
        opacity: 0.7,
        showAxes: true
    }
}

export const riemannSphereSlice = createSlice({
    name: 'RiemannSphere',
    initialState,
    reducers: {

        updateRiemannSphereSettings: (state, action: PayloadAction<PartialDeep<RiemannSphereSettings>>) => {
            return merge<RiemannSphereSettings>({...state}, action.payload);
        }

    }
});

export const { updateRiemannSphereSettings } = riemannSphereSlice.actions;