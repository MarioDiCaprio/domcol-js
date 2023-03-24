import {createSlice} from "@reduxjs/toolkit";
import Cookies from "universal-cookie";


//////////////////////////////////////////////////////////////////////////

const cookies = new Cookies();
let initialState: boolean = cookies.get("consentCookies");
if (!initialState) {
    initialState = false;
}

//////////////////////////////////////////////////////////////////////////

export const cookiesConsentSlice = createSlice({
    name: "CookiesConsent",
    initialState,
    reducers: {

        consentCookies: (_state) => {
            cookies.set("consentCookies", true);
            return true;
        }

    }
});

export const {consentCookies} = cookiesConsentSlice.actions;
