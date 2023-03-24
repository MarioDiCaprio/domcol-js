import React from "react";
import {Context, CookieIconWrapper} from "./CookiesConsent.styles";
import {BiCookie as CookieIcon} from "react-icons/bi";
import {Button, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {consentCookies} from "../../redux/slices/cookiesConsentSlice";


const CookiesConsent: React.FC = () => {
    const isCookiesConsented = useSelector((state: RootState) => state.cookiesConsent);
    const dispatch = useDispatch();

    function consent() {
        dispatch(consentCookies());
    }

    return (
        <Context open={!isCookiesConsented}>

            <DialogTitle display="flex" gap="20px" alignItems="center">
                <CookieIconWrapper>
                    <CookieIcon />
                </CookieIconWrapper>
                Allow Essential Cookies
            </DialogTitle>

            <DialogContent>
                <div>
                    Please consent to essential cookies. We guarantee that no private
                    data will be collected, nor will any advertisement be shown.
                </div>
            </DialogContent>

            <DialogActions>
                <Button variant="contained" color="primary" onClick={consent}>
                    Agree
                </Button>
            </DialogActions>

        </Context>
    );
}


export default CookiesConsent;