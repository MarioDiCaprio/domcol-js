import React, {useState} from 'react';
import styles from './Navbar.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";
import {useSmallScreen} from "../../../hooks/useDimensions";
import {AiOutlineMenu as MenuIconClosed} from "react-icons/ai";
import {TfiClose as MenuIconOpened} from "react-icons/tfi";
import {motion, AnimatePresence, MotionProps} from "framer-motion";


const menuButtonMotion: MotionProps = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 }
}

const navbarMotion: MotionProps = {
    initial: { opacity: 0, translateY: -20 },
    animate: { opacity: 1, translateY: 0 },
    transition: { duration: 0.7 }
}


interface NavLinkProps {
    url: string;
    title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ url, title }) => {
    const router = useRouter();

    function getNavLinkClass(url: string): string | undefined {
        return (router.pathname === url)? styles.activeLink : undefined;
    }

    return (
        <Link href={url}>
            <span data-test={title} className={getNavLinkClass(url)}>
                { title }
            </span>
        </Link>
    );
}


interface SidebarProps {
    open: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
    const Content: React.FC = () => (
        <>
            <motion.div
                className={styles.sidebar}
                initial={{ translateX: '100vw' }}
                animate={{ translateX: '0px' }}
                exit={{ translateX: '100vw' }}
                transition={{ type: 'smooth' }}
            >
                <div className={styles.linksSmall} data-test="links">
                    <NavLink url="/" title="Home"/>
                    <NavLink url="/plot" title="Plot"/>
                    <NavLink url="/learn" title="Learn"/>
                </div>
            </motion.div>

            <motion.div
                className={styles.sidebarMask}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
        </>
    );

    return (
        <AnimatePresence>
            { open? <Content /> : undefined }
        </AnimatePresence>
    );
}


const Navbar: React.FC = () => {
    const isSmallScreen = useSmallScreen();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function toggleMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }

    if (isSmallScreen) {
        return (
            <motion.div className={styles.context} {...navbarMotion}>

                <div className={styles.titleWrapper}>
                    <div className={styles.logoWrapper}>
                        <img src="/logo100.png" alt="" />
                    </div>
                    <span className={styles.title}>
                    Domcol-JS
                </span>
                </div>

                <AnimatePresence>
                    {
                        isMenuOpen?
                            <motion.div className={styles.menuButton} onClick={toggleMenuOpen} {...menuButtonMotion}>
                                <MenuIconOpened />
                            </motion.div>
                            :
                            <motion.div className={styles.menuButton} onClick={toggleMenuOpen} {...menuButtonMotion}>
                                <MenuIconClosed />
                            </motion.div>
                    }
                </AnimatePresence>

                <Sidebar open={isMenuOpen} />

            </motion.div>
        );
    }

    return (
        <motion.div className={styles.context} {...navbarMotion}>

            <div className={styles.titleWrapper}>
                <div className={styles.logoWrapper}>
                    <img src="/logo100.png" alt="" />
                </div>
                <span className={styles.title}>
                    Domcol-JS
                </span>
            </div>

            <div className={styles.links} data-test="links">
                <NavLink url="/" title="Home"/>
                <NavLink url="/plot" title="Plot"/>
                <NavLink url="/learn" title="Learn"/>
            </div>

        </motion.div>
    );
}


export default Navbar;
