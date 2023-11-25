import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Cookies from "universal-cookie";


export type EquationRegistry = Array<string | undefined>;

//////////////////////////////////////////////////////////////////////////////

// @ts-ignore
const cookies = new Cookies();
let initialState: EquationRegistry = cookies.get('equations');
if (!initialState) {
    initialState = ['@f \\left( x \\right) = x'];
}

//////////////////////////////////////////////////////////////////////////////


export const equationsSlice = createSlice({
    name: 'Equations',
    initialState,
    reducers: {

        setEquations: (_state, action: PayloadAction<EquationRegistry>) => {
            cookies.set('equations', action.payload);
            return [...action.payload];
        },

        addEquation: (state, action: PayloadAction<EquationRegistry[number]>) => {
            let newState: EquationRegistry = [...state, action.payload];
            cookies.set('equations', newState);
            return newState;
        },

        removeEquation: (state, action: PayloadAction<number>) => {
            let newState: EquationRegistry = state.filter((_eq, index) => index !== action.payload);
            cookies.set('equations', newState);
            return newState;
        },

        clearEquations: (_state) => {
            cookies.set('equations', []);
            return [];
        }

    }
});


/**
 * A redux action that sets the current editor's equations. These equations are formatted in
 * `LaTeX` (as a `string`) and contained in an array.
 */
export const setEquations = equationsSlice.actions.setEquations;

/**
 * A redux action that adds an equation to the editor. An equation is a `string`
 * formatted in `LaTeX`. The added equation is always appended to the last element of
 * the list of equations.
 */
export const addEquation = equationsSlice.actions.addEquation;

/**
 * A redux action that removes an equation from the editor at the given index.
 */
export const removeEquation = equationsSlice.actions.removeEquation;

/**
 * A redux action that clears all equations in the editor.
 */
export const clearEquations = equationsSlice.actions.clearEquations;
