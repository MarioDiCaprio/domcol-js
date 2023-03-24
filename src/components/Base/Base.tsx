import React, {ReactNode} from 'react';
import Navbar from "../Navbar/Navbar";
import Head from "next/head";
import CookiesConsent from "../CookiesConsent/CookiesConsent";


interface BaseProps {
    title: string;
    navbarMargins?: boolean;
    children?: ReactNode;
}

const Base: React.FC<BaseProps> = ({ title, navbarMargins, children }) => {
    return (
        <>

            {/* Document Head */}
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{ title }</title>
            </Head>

            <CookiesConsent />

            <Navbar />

            { navbarMargins && <div style={{ marginTop: '100px' }} /> }

            { children }

        </>
    );
}


export default Base;
