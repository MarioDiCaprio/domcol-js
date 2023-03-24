import React, {useState} from "react";
import {CardActions, CardMedia, Grid, IconButton, Snackbar, Tooltip} from "@mui/material";
import {PreviewCardContext, StyledAlert} from "./PlotPreviews.styles";
import {RxCopy as CopyIcon} from "react-icons/rx";
import {EquationRegistry, setEquations} from "../../../redux/slices/equationsSlice";
import {useDispatch} from "react-redux";


interface PreviewCardProps {
    imgSrc: string;
    equations: EquationRegistry;
    onCopy?: () => void;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ imgSrc, equations, onCopy }) => {
    const dispatch = useDispatch();

    function copyEquations() {
        dispatch(setEquations(equations));
        if (onCopy) onCopy();
    }

    return (
        <Grid item xs={12} sm={6} md={4} padding={2} display="flex" justifyContent="center">
            <PreviewCardContext>
                <CardMedia component="img" image={imgSrc} />
                <CardActions>

                    <Tooltip title="Copy">
                        <IconButton color="primary" onClick={copyEquations}>
                            <CopyIcon />
                        </IconButton>
                    </Tooltip>

                </CardActions>
            </PreviewCardContext>
        </Grid>
    );
}


const PlotPreviews: React.FC = () => {
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

    function openSnackbar() {
        setSnackbarOpen(true);
    }

    function closeSnackbar() {
        setSnackbarOpen(false);
    }

    return (
        <>
            <Grid container sx={{ width: '100%' }}>

                <PreviewCard imgSrc="/previews/preview1.png" onCopy={openSnackbar} equations={['@f(x) = \\ln(x) + x']} />
                <PreviewCard imgSrc="/previews/preview2.png" onCopy={openSnackbar} equations={['@f(x) = \\csc(x)']} />
                <PreviewCard imgSrc="/previews/preview3.png" onCopy={openSnackbar} equations={['@f(x) = \\sqrt{\\sin(x)}']} />
                <PreviewCard imgSrc="/previews/preview4.png" onCopy={openSnackbar} equations={['@f(x) = \\tan(x)']} />
                <PreviewCard imgSrc="/previews/preview5.png" onCopy={openSnackbar} equations={['@f(x) = \\frac{\\sqrt{\\ln(x)}}{x}']} />
                <PreviewCard imgSrc="/previews/preview6.png" onCopy={openSnackbar} equations={['Mandelbrot']} />

            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={5000}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                onClose={closeSnackbar}
            >
                <StyledAlert severity="success">
                    Copied to Plot Editor
                </StyledAlert>
            </Snackbar>
        </>
    );
}


export default PlotPreviews;
