import React, {ReactNode} from 'react';
import Navbar from "../Navbar/Navbar";
import Head from "next/head";


interface BaseProps {
    title: string;
    children?: ReactNode;
}

const Base: React.FC<BaseProps> = ({ title, children }) => {
    return (
        <>

            {/* Document Head */}
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{ title }</title>
            </Head>

            <Navbar />

            { children }

        </>
    );
}


export default Base;
