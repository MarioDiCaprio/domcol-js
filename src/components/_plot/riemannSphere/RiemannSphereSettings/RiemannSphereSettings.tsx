import React from "react";
import {Context, SettingsSlider} from "./RiemannSphereSettings.styles";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Checkbox, Divider, FormControlLabel, FormGroup, TextField,
    Typography,
} from "@mui/material";
import {MdExpandMore as ExpandIcon} from "react-icons/md";
import {updatePlotSettings} from "../../../../redux/slices/plotSettingsSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {PartialDeep} from "type-fest";


const RiemannSphereSettings: React.FC = () => {
    const dispatch = useDispatch();
    const { riemannSphere } = useSelector((state: RootState) => state.plotSettings);

    function dispatchSettings(settings: PartialDeep<typeof riemannSphere>) {
        dispatch(updatePlotSettings({ riemannSphere: settings }));
    }

    return (
        <Context>

            {/* Main Settings */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandIcon />} aria-controls="riemann-sphere-settings-content" id="riemann-sphere-settings-header">
                    <Typography>Settings</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ maxHeight: '50vh', overflowY: 'auto' }}>

                    {/* Sphere Settings */}
                    <Accordion variant="outlined">
                        <AccordionSummary expandIcon={<ExpandIcon />} aria-controls="riemann-sphere-settings-sphere-content" id="riemann-sphere-settings-sphere-header">
                            <Typography>Sphere</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <Typography variant="subtitle2" gutterBottom>
                                Subdivisions
                            </Typography>
                            <SettingsSlider
                                step={10}
                                min={10} max={1000}
                                value={riemannSphere.sphere.subdivisions}
                                color="primary"
                                valueLabelDisplay="auto"
                                onChange={
                                    (_event, value) => dispatchSettings({
                                        sphere: { subdivisions: value as number }
                                    })
                                }
                            />

                        </AccordionDetails>
                    </Accordion>

                    {/* Domain Coloring Settings */}
                    <Accordion variant="outlined">
                        <AccordionSummary expandIcon={<ExpandIcon />} aria-controls="riemann-sphere-settings-domcol-content" id="riemann-sphere-settings-domcol-header">
                            <Typography>Domain Coloring</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <FormGroup>
                                <FormControlLabel
                                    label="visible"
                                    control={
                                        <Checkbox
                                            checked={riemannSphere.domainColoring.visible}
                                            onChange={
                                                event => dispatchSettings({
                                                    domainColoring: {
                                                        visible: event.target.checked
                                                    }
                                                })
                                            }
                                        />
                                    }
                                />
                                <FormControlLabel
                                    label="axes"
                                    control={
                                        <Checkbox
                                            checked={riemannSphere.domainColoring.axes}
                                            disabled={!riemannSphere.domainColoring.visible}
                                            onChange={
                                                event => dispatchSettings({
                                                    domainColoring: {
                                                        axes: event.target.checked
                                                    }
                                                })
                                            }
                                        />
                                    }
                                />
                            </FormGroup>

                            <Divider sx={{ margin: 2 }} />

                            <Typography variant="subtitle2" gutterBottom>
                                opacity
                            </Typography>
                            <SettingsSlider
                                step={0.1}
                                min={0.0} max={1.0}
                                value={riemannSphere.domainColoring.opacity}
                                color="primary"
                                valueLabelDisplay="auto"
                                disabled={!riemannSphere.domainColoring.visible}
                                onChange={
                                    (_event, value) => dispatchSettings({
                                        domainColoring: {
                                            opacity: value as number
                                        }
                                    })
                                }
                            />

                            <Divider sx={{ margin: 2 }} />

                            <Typography variant="subtitle2" gutterBottom>
                                real domain
                            </Typography>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <TextField
                                    type="number"
                                    value={riemannSphere.domainColoring.domainX[0]}
                                    onChange={
                                        event => dispatchSettings({
                                            domainColoring: {
                                                domainX: [event.target.value as number, riemannSphere.domainColoring.domainX[1]]
                                            }
                                        })
                                    }
                                />
                                <TextField
                                    type="number"
                                    value={riemannSphere.domainColoring.domainX[1]}
                                    onChange={
                                        event => dispatchSettings({
                                            domainColoring: {
                                                domainX: [riemannSphere.domainColoring.domainX[0], event.target.value as number]
                                            }
                                        })
                                    }
                                />
                            </FormGroup>

                            <Divider sx={{ margin: 2 }} />

                            <Typography variant="subtitle2" gutterBottom>
                                immaginary domain
                            </Typography>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <TextField
                                    type="number"
                                    value={riemannSphere.domainColoring.domainY[0]}
                                    onChange={
                                        event => dispatchSettings({
                                            domainColoring: {
                                                domainX: [event.target.value as number, riemannSphere.domainColoring.domainY[1]]
                                            }
                                        })
                                    }
                                />
                                <TextField
                                    type="number"
                                    value={riemannSphere.domainColoring.domainY[1]}
                                    onChange={
                                        event => dispatchSettings({
                                            domainColoring: {
                                                domainX: [riemannSphere.domainColoring.domainY[0], event.target.value as number]
                                            }
                                        })
                                    }
                                />
                            </FormGroup>

                        </AccordionDetails>
                    </Accordion>

                </AccordionDetails>
            </Accordion>
        </Context>
    );
}


export default RiemannSphereSettings;
