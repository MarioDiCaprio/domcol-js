import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import {AuthTokenDTO} from "@/redux/api/models/DTO";


const cookies = new Cookies()
let initialState: AuthTokenDTO | null = cookies.get("auth-token") ?? null

export const authSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: {
        
        setAuthToken(state, action: PayloadAction<AuthTokenDTO | null>) {
            return action.payload
        }
        
    }
})

export const { setAuthToken } = authSlice.actions