import React from "react";
import {Metadata} from "next";
import DomainColoringGL from "@/components/app/(graphing)/domain-coloring/DomainColoringGL";


export const metadata: Metadata = {
    title: "Complexify | Domain Coloring"
}

const Page: React.FC = () => {

    
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen cursor-grab">
                <DomainColoringGL />
            </div>
        </>
    );
}

export default Page;