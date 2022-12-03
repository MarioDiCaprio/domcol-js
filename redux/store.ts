import {configureStore} from "@reduxjs/toolkit";
import equationsReducer from "./slices/equationsSlice";


export const store = configureStore({
    reducer: {
        equations: equationsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
