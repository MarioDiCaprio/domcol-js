import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {Wrapper} from "./NavbarLink.styles";


interface NavLinkProps {
    url: string;
    title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ url, title }) => {
    const router = useRouter();

    const isActive = (router.pathname === url);

    return (
        <Link href={url} style={{ textDecoration: 'none' }}>
            <Wrapper active={isActive}>
                { title }
            </Wrapper>
        </Link>
    );
}

export default NavLink;