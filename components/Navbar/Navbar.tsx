import React from 'react';
import styles from './Navbar.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";


const Navbar: React.FC = () => {
    const router = useRouter();

    function getNavLinkClass(url: string): string | undefined {
        return (router.pathname === url)? styles.activeLink : undefined;
    }

    const NavLink: React.FC<{ url: string, title: string }> = ({ url, title }) => (
        <Link href={url}>
            <span data-test={title} className={getNavLinkClass(url)}>
                { title }
            </span>
        </Link>
    );

    return (
        <div className={styles.context}>

            <div className={styles.title} data-test="title">
                <img src="/img/logo-full.png" alt="" />
            </div>

            <div className={styles.links} data-test="links">
                <NavLink url="/" title="Home"/>
                <NavLink url="/plot" title="Plot"/>
                <NavLink url="/learn" title="Learn"/>
            </div>

            <div className={styles.account}>
                Account
            </div>

        </div>
    );
}


export default Navbar;
