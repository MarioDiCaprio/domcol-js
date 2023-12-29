import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Cookies from "universal-cookie";


const cookies = new Cookies()
let initialState: string | null = cookies.get("auth-token") ?? null

export const authSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: {
        
        setAuthToken(_state, action: PayloadAction<string | null>) {
            cookies.set("auth-token", action.payload, { sameSite: "strict" });
            return action.payload;
        }
        
    }
})

export const { setAuthToken } = authSlice.actions