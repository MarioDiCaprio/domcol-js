import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type EquationRegistry = Array<string>;

const initialState: EquationRegistry = ['@f \\left( x \\right) = x'];


const equationsSlice = createSlice({
    name: 'Equations',
    initialState,
    reducers: {

        setEquations: (_state, action: PayloadAction<EquationRegistry>) => {
            return [...action.payload];
        },

        addEquation: (state, action: PayloadAction<string>) => {
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


export const {setEquations, addEquation, removeEquation, clearEquations} = equationsSlice.actions;

export default equationsSlice.reducer;
