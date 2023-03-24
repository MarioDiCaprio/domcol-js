import React, {useState} from 'react';
import {Context, LinksSection, Logo} from "./Navbar.styles";
import Sidebar from "../Sidebar/Sidebar";
import {IconButton, useMediaQuery, useTheme} from "@mui/material";
import {HiMenu as MenuIcon} from "react-icons/hi";
import NavLink from "../NavLink/NavLink";
import {useMotionValueEvent, useScroll, useVelocity} from "framer-motion";


const Navbar: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const { scrollY } = useScroll();
    const [isElevated, setIsElevated] = useState<boolean>(false);
    useMotionValueEvent(scrollY, 'change', val => {
        setIsElevated(val > 100);
    });

    const scrollVelocity = useVelocity(scrollY);
    const [isHidden, setIsHidden] = useState<boolean>(false);
    useMotionValueEvent(scrollVelocity, 'change', val => {
        if (val > 0) setIsHidden(true);
        if (val < 0) setIsHidden(false);
    });

    function toggleMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }

    if (isSmallScreen) {
        return (
            <Context elevated={isElevated} hidden={isHidden}>

                <Logo>
                    <img src="/logo100.png" alt=""/>
                    <span>
                    Domcol JS
                </span>
                </Logo>

                <IconButton color="primary" onClick={toggleMenuOpen}>
                    <MenuIcon style={{ fontSize: "40px" }} />
                </IconButton>

                <Sidebar open={isMenuOpen} onClose={toggleMenuOpen} />

            </Context>
        );
    }

    return (
        <Context elevated={isElevated} hidden={isHidden}>

            <Logo>
                <img src="/logo100.png" alt=""/>
                <span>
                    Domcol JS
                </span>
            </Logo>

            <LinksSection>
                <NavLink url="/" title="Home"/>
                <NavLink url="/plot" title="Plot"/>
                <NavLink url="/learn" title="Learn"/>
            </LinksSection>

        </Context>
    );
}


export default Navbar;
