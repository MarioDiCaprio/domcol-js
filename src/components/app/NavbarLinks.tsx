"use client"

import React, {useState} from "react";
import Link from "next/link";
import { HiMenu as MenuIcon } from "react-icons/hi";

const NavbarLinks: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    
    function toggleMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }
    
    function closeMenu() {
        setIsMenuOpen(false);
    }
    
    return (
        <>
            <div className="relative flex md:hidden" onClick={toggleMenuOpen}>
                <MenuIcon />
                <div className={`${!isMenuOpen? 'hidden' : 'block'} top-0 left-0 fixed w-screen h-screen`} onDrag={closeMenu}>
                    
                    <div className="
                        absolute right-0 top-0 w-[200px]
                        flex flex-col justify-center items-center
                        bg-zinc-900 text-sm leading-7 rounded-xl shadow-2xl
                        border border-zinc-700 divide-y divide-zinc-700">
                        <Link className="w-full p-2 text-center hover:text-zinc-400 duration-300" href={"/domain-coloring"}>
                            Domain Coloring
                        </Link>
                        <Link className="w-full p-2 text-center hover:text-zinc-400 duration-300" href={"/riemann-sphere"}>
                            Riemann Sphere
                        </Link>
                    </div>
                    
                </div>
            </div>
            
            <div className="hidden md:flex gap-5 text-sm text-zinc-300">
                <Link className="hover:text-zinc-400 duration-300" href={"/domain-coloring"}>
                    Domain Coloring
                </Link>
                <Link className="hover:text-zinc-400 duration-300" href={"/riemann-sphere"}>
                    Riemann Sphere
                </Link>
            </div>
        </>
    );
}

export default NavbarLinks;