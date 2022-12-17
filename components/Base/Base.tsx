import styles from "./Base.module.scss";
import React, {ReactNode} from 'react';
import Navbar from "./Navbar/Navbar";
import Head from "next/head";


interface BaseProps {
    title: string;
    style?: React.CSSProperties;
    children?: ReactNode;
}

const Base: React.FC<BaseProps> = ({ title, style, children }) => {
    return (
        <div className={styles.context} style={style}>

            {/* Document Head */}
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{ title }</title>
            </Head>

            {/* Navbar */}
            <div className={styles.navbarWrapper}>
                <Navbar />
            </div>

            {/* Actual Content */}
            <main>
                { children }
            </main>

        </div>
    );
}


export default Base;
