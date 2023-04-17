import {createTheme, css} from "@mui/material";


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
        MuiCssBaseline: {
            styleOverrides: theme => css`

              *::selection, *::-moz-selection {
                background: rgba(71, 23, 246, 0.36);
                color: white;
              }
              
              // mathquill cursor color (for dark mode)
              .mq-cursor {
                border-left: 1px solid ${theme.palette.text.primary} !important;
              }
              
            `
        }
    },
    typography: {
        fontFamily: `"Rubik", sans-serif`,
    }
});
