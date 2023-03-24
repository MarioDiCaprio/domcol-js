import {createTheme} from "@mui/material";


export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#4717F6'
        },
        secondary: {
            main: '#B138E2'
        },
        text: {
            primary: '#F1E1DD'
        },
        background: {
            default: '#0E0B16',
            paper: '#02050e'
        }
    },
    components: {

    },
    typography: {
        fontFamily: `"Rubik", sans-serif`,
    }
});
