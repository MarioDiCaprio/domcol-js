import React from "react";
import {Metadata} from "next";
import RiemannSphereGL from "@/components/app/(graphing)/riemann-sphere/RiemannSphereGL";


export const metadata: Metadata = {
    title: "Complexify | Riemann Sphere"
}


const Page: React.FC = () => {
    return (
        <>
            <div className="z-[-1] fixed top-0 left-0 w-screen h-screen cursor-grab">
                <RiemannSphereGL />
            </div>
        </>
    )
}

export default Page;