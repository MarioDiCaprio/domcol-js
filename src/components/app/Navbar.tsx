import React from "react";
import Link from "next/link";
import NavbarLinks from "@/components/app/NavbarLinks";
import NavbarCloudSync from "@/components/app/NavbarCloudSync";


const Navbar: React.FC = () => {
    return (
        <div className=" fixed z-[1000] w-full h-12 px-5 flex justify-between items-center bg-zinc-800 text-zinc-100 text-xl">
            
            <NavbarCloudSync />
            
            <Link className="font-display font-bold" href={"/"}>
                Complexify
            </Link>
            
            <NavbarLinks />
            
        </div>
    )
}

export default Navbar;