import React from "react";
import {Metadata} from "next";
import Link from "next/link";
import SignupForm from "@/components/app/(login)/signup/SignupForm";


export const metadata: Metadata = {
    title: "Complexify | Signup"
}


const Page: React.FC = () => {
    return (
        <>
            <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Signup
            </h2>
            <SignupForm />
            <p className="mt-2 text-sm text-white text-center">
                Already a member? <Link href={"/login"} className="underline">Login</Link>
            </p>
        </>
    );
}


export default Page;