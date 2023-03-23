import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import {BiAddToQueue as AddIcon} from "react-icons/bi";
import {AiOutlineDelete as ClearIcon} from "react-icons/ai";
import {Context} from "./Toolbar.styles";


const ButtonTooltip: React.FC<{ tooltip: string, onClick?: () => void, children?: React.ReactNode }> = (props) => (
    <Tooltip title={props.tooltip} placement="bottom">
        <IconButton color="secondary" onClick={props.onClick}>
            { props.children }
        </IconButton>
    </Tooltip>
);


interface ToolbarProps {
    onAdd?: () => void;
    onClear?: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAdd, onClear }) => {
    return (
        <Context>

            {/* Add Equation */}
            <ButtonTooltip tooltip="New Equation" onClick={onAdd}>
                <AddIcon />
            </ButtonTooltip>

            {/* Clear Equations */}
            <ButtonTooltip tooltip="Clear All" onClick={onClear}>
                <ClearIcon />
            </ButtonTooltip>

        </Context>
    );
}

export default Toolbar;