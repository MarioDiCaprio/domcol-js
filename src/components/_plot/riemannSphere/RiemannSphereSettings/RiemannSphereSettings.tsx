import React from "react";
import {Context, SectionDivider, SettingsSlider} from "./RiemannSphereSettings.styles";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import {MdExpandMore as ExpandIcon} from "react-icons/md";


interface RiemannSphereSettingsProps {
    onSubdivisionsChange: (subdivisions: number) => void;
}


const RiemannSphereSettings: React.FC<RiemannSphereSettingsProps> = ({ onSubdivisionsChange }) => {
    return (
        <Context>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandIcon />}
                    aria-controls="riemann-sphere-settings-accordion-content"
                    id="riemann-sphere-settings-accordion-header"
                >
                    <Typography>Settings</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <SectionDivider />

                    <Typography variant="subtitle2" gutterBottom>
                        Subdivisions
                    </Typography>
                    <SettingsSlider
                        step={10}
                        min={10} max={1000}
                        defaultValue={100}
                        color="primary"
                        valueLabelDisplay="auto"
                        onChange={(_event, value) => onSubdivisionsChange(value as number)}
                    />
                </AccordionDetails>
            </Accordion>
        </Context>
    );
}


export default RiemannSphereSettings;
