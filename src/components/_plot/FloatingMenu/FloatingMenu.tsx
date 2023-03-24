import React from "react";
import {Context} from "./FloatingMenu.styles";
import {Button, Tooltip} from "@mui/material";
import {BiCodeAlt as EditorIcon} from "react-icons/bi";
import {HiPlay as PlotIcon} from "react-icons/hi";


interface FloatingMenuProps {
    editClicked: () => void;
    plotClicked: () => void;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ editClicked, plotClicked }) => {
    return (
        <Context>

            <Tooltip title="Plot">
                <Button variant="contained" color="primary" onClick={plotClicked}>
                    <PlotIcon />
                </Button>
            </Tooltip>

            <Tooltip title="Editor" onClick={editClicked}>
                <Button variant="contained" color="primary">
                    <EditorIcon />
                </Button>
            </Tooltip>

        </Context>
    );
}

export default FloatingMenu;