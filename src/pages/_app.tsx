import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "../theme";


// noinspection JSUnusedGlobalSymbols
export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}
