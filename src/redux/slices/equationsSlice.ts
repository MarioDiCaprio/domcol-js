import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type EquationRegistry = Array<string | undefined>;

const initialState: EquationRegistry = ['@f \\left( x \\right) = x'];


const equationsSlice = createSlice({
    name: 'Equations',
    initialState,
    reducers: {

        setEquations: (_state, action: PayloadAction<EquationRegistry>) => {
            return [...action.payload];
        },

        addEquation: (state, action: PayloadAction<EquationRegistry[number]>) => {
            return [...state, action.payload];
        },

        removeEquation: (state, action: PayloadAction<number>) => {
            return state.filter((_eq, index) => index !== action.payload);
        },

        clearEquations: (_state) => {
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

/**
 * This is the redux reducer for {@link equationsSlice}.
 */
export default equationsSlice.reducer;
