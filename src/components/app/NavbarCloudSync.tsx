"use client"

import React from "react";
import { MdCloud as CloudIcon } from "react-icons/md";
import {useUserBearerQuery} from "@/redux/api/complexifyApi";
import {useDispatch, useSelector} from "react-redux";
import {setAuthToken} from "@/redux/slices/authSlice";
import {RootState} from "@/redux/store";
import Link from "next/link";


const RenderWhenAuthenticated: React.FC = () => {
    const dispatch = useDispatch();
    const {data: user, isLoading, isError} = useUserBearerQuery();
    
    if (isLoading) {
        // TODO Implement loading icon
        return <></>
    }
    
    if (isError || !user) {
        // TODO Handle login error
        dispatch(setAuthToken(null))
        return <></>
    }
    
    return (
        <div>
            <CloudIcon />
        </div>
    )
}

const NavbarCloudSync: React.FC = () => {
    const authToken = useSelector((state: RootState) => state.authorization);
    
    if (!authToken) {
        return (
            <Link href={"/login"} className="text-sm hover:text-zinc-400 duration-300">
                Login
            </Link>
        );
    }
    
    return <RenderWhenAuthenticated />
}

export default NavbarCloudSync;