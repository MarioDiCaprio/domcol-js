import React from "react";
import {Metadata} from "next";
import Link from "next/link";
import LoginForm from "@/components/app/(login)/login/LoginForm";


export const metadata: Metadata = {
    title: "Complexify | Login"
}


const Page: React.FC = () => {
    return (
        <>
            <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Login
            </h2>
            <LoginForm />
            <p className="mt-2 text-sm text-white text-center">
                Not yet a member? <Link href={"/signup"} className="underline">Signup</Link>
            </p>
        </>
    );
}


export default Page;