import React, {ReactNode} from 'react';
import Navbar from "../Navbar/Navbar";
import Head from "next/head";


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

            <Navbar />

            { navbarMargins && <div style={{ marginTop: '100px' }} /> }

            { children }

        </>
    );
}


export default Base;
