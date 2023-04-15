import React, {useState} from "react";
import {CardActions, CardMedia, Grid, IconButton, Snackbar, Tooltip} from "@mui/material";
import {PreviewCardContext, StyledAlert} from "./PlotPreviews.styles";
import {RxCopy as CopyIcon} from "react-icons/rx";
import {EquationRegistry, setEquations} from "../../../redux/slices/equationsSlice";
import {useDispatch} from "react-redux";
import {PlotSettings, updatePlotSettings} from "../../../redux/slices/plotSettingsSlice";


interface PreviewCardProps {
    imgSrc: string;
    equations: EquationRegistry;
    settings: Partial<PlotSettings>;
    onCopy?: () => void;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ imgSrc, equations, settings, onCopy }) => {
    const dispatch = useDispatch();

    function copy() {
        dispatch(setEquations(equations));
        dispatch(updatePlotSettings(settings));
        if (onCopy) onCopy();
    }

    return (
        <Grid item xs={12} sm={6} md={4} padding={2} display="flex" justifyContent="center">
            <PreviewCardContext>
                <CardMedia component="img" image={imgSrc} />
                <CardActions>

                    <Tooltip title="Copy">
                        <IconButton color="primary" onClick={copy}>
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

                {/* ( 1 ) */}
                <PreviewCard
                    imgSrc="/previews/preview1.png"
                    onCopy={openSnackbar}
                    equations={['@f(x) = \\ln(x) + x']}
                    settings={{
                        activePlotAlgorithm: 'domain-coloring'
                    }}
                />
                {/* ( 2 ) */}
                <PreviewCard
                    imgSrc="/previews/preview2.png"
                    onCopy={openSnackbar}
                    equations={['@f(x) = \\csc(x)']}
                    settings={{
                        activePlotAlgorithm: 'domain-coloring'
                    }}
                />
                {/* ( 3 ) */}
                <PreviewCard
                    imgSrc="/previews/preview3.png"
                    onCopy={openSnackbar}
                    equations={['@f(x) = \\sqrt{\\sin(x)}']}
                    settings={{
                        activePlotAlgorithm: 'domain-coloring'
                    }}
                />
                {/* ( 4 ) */}
                <PreviewCard
                    imgSrc="/previews/preview4.png"
                    onCopy={openSnackbar}
                    equations={['@f(x) = \\sqrt{\\ln(x)}']}
                    settings={{
                        activePlotAlgorithm: 'riemann-sphere'
                    }}
                />
                {/* ( 5 ) */}
                <PreviewCard
                    imgSrc="/previews/preview5.png"
                    onCopy={openSnackbar}
                    equations={['@f(x) = \\sin(x) \\cdot \\ln(x)']}
                    settings={{
                        activePlotAlgorithm: 'riemann-sphere'
                    }}
                />
                {/* ( 6 ) */}
                <PreviewCard
                    imgSrc="/previews/preview6.png"
                    onCopy={openSnackbar}
                    equations={['@f(x) = 2 \\cdot \\tan(x)']}
                    settings={{
                        activePlotAlgorithm: 'riemann-sphere'
                    }}
                />

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
