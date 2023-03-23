import React from "react";
import {Drawer, IconButton} from "@mui/material";
import {Content, LinksSection, TopSection} from "./Sidebar.styles";
import {IoClose as CloseIcon} from "react-icons/io5";
import NavLink from "../NavLink/NavLink";


interface SidebarProps {
    open: boolean;
    onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    return (
        <Drawer open={open} anchor="right" onClose={onClose}>
            <Content>

                <TopSection>
                    <IconButton color="primary" onClick={onClose}>
                        <CloseIcon style={{ fontSize: '40px' }} />
                    </IconButton>
                </TopSection>

                <LinksSection>
                    <NavLink url="/" title="Home"/>
                    <NavLink url="/plot" title="Plot"/>
                    <NavLink url="/learn" title="Learn"/>
                </LinksSection>

            </Content>
        </Drawer>
    );
}

export default Sidebar;