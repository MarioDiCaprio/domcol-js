import React from "react";
import {Context, SettingsSlider} from "./RiemannSphereSettings.styles";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Checkbox, FormControlLabel, FormGroup,
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
                <AccordionDetails>

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

                    {/* Axis Settings */}
                    <Accordion variant="outlined">
                        <AccordionSummary expandIcon={<ExpandIcon />} aria-controls="riemann-sphere-settings-axis-content" id="riemann-sphere-settings-axis-header">
                            <Typography>Axis</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <FormGroup>
                                <FormControlLabel
                                    label="visible"
                                    control={
                                        <Checkbox
                                            checked={riemannSphere.axis.visible}
                                            onChange={
                                                event => dispatchSettings({
                                                    axis: { visible: event.target.checked }
                                                })
                                            }
                                        />
                                    }
                                />
                                <FormControlLabel
                                    label="labels"
                                    control={
                                        <Checkbox
                                            checked={riemannSphere.axis.labels}
                                            disabled={!riemannSphere.axis.visible}
                                            onChange={
                                                event => dispatchSettings({
                                                    axis: { labels: event.target.checked }
                                                })
                                            }
                                        />
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
