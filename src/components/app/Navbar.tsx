"use client"

import React, {useState} from "react";
import Link from "next/link";
import {
    Navbar as NextNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu, NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import NavbarLinks from "@/components/app/NavbarLinks";
import NavbarCloudSync from "@/components/app/NavbarCloudSync";


const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    
    return (
        <NextNavbar onMenuOpenChange={setIsMenuOpen} height="3rem" className="fixed bg-zinc-800 text-zinc-100">

            {/* Menu for small screens */}
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link className="hover:text-zinc-400 duration-300" href={"/domain-coloring"}>
                        Domain Coloring
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="hover:text-zinc-400 duration-300" href={"/riemann-sphere"}>
                        Riemann Sphere
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
            
            <NavbarContent>
                {/* Automatic toggle for above menu */}
                <NavbarMenuToggle className="sm:hidden"/>
                {/* Brand */}
                <NavbarBrand>
                    <Link className="font-display font-bold" href={"/"}>
                        Complexify
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            {/* Links, for when menu is hidden (i.e. not small screens) */}
            <NavbarContent className="hidden sm:flex gap-5" justify="center">
                <NavbarItem>
                    <Link className="hover:text-zinc-400 duration-300" href={"/domain-coloring"}>
                        Domain Coloring
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="hover:text-zinc-400 duration-300" href={"/riemann-sphere"}>
                        Riemann Sphere
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* Login Link / Account */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <NavbarCloudSync />
                </NavbarItem>
            </NavbarContent>
            
        </NextNavbar>
    )
}

export default Navbar;