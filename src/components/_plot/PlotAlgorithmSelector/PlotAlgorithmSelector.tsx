import React, {useEffect, useState} from "react";
import {Context} from "./PlotAlgorithmSelector.styled";
import {FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {updatePlotSettings} from "../../../redux/slices/plotSettingsSlice";


const PlotAlgorithmSelector: React.FC = () => {
    const dispatch = useDispatch();
    const algorithm = useSelector((state: RootState) => state.plotSettings.activePlotAlgorithm);

    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    function handleAlgorithmChange(event: SelectChangeEvent) {
        dispatch(updatePlotSettings({
            activePlotAlgorithm: event.target.value as typeof algorithm
        }));
    }

    if (!mounted) {
        return <></>;
    }

    return (
        <Context>
            <FormControl>
                <Select
                    variant="outlined"
                    value={algorithm}
                    onChange={handleAlgorithmChange}
                >
                    <MenuItem value="domain-coloring">
                        Domain Coloring
                    </MenuItem>
                    <MenuItem value="riemann-sphere">
                        Riemann Sphere
                    </MenuItem>
                </Select>
            </FormControl>
        </Context>
    );
}


export default PlotAlgorithmSelector;