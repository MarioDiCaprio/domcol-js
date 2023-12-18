import React from "react";
import Input from "@/components/app/(login)/Input";
import { FaUser as UserIcon } from "react-icons/fa";
import { FaKey as KeyIcon } from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";
import {Metadata} from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Complexify | Signup"
}


const Page: React.FC = () => {
    return (
        <>
            <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Signup
            </h2>
            <form method="post" className="flex flex-col items-center gap-3">
                <Input
                    id="signup-input-username"
                    name="signup-input-username"
                    placeholder="Username"
                    icon={<UserIcon />}
                />
                <Input
                    type="email"
                    id="signup-input-email"
                    name="signup-input-email"
                    placeholder="Email"
                    icon={<EmailIcon />}
                />
                <Input
                    type="password"
                    id="signup-input-password"
                    name="signup-input-password"
                    placeholder="Password"
                    icon={<KeyIcon />}
                />
                <button type="submit" className="w-full max-w-[120px] px-5 mt-7 py-2 bg-gradient-to-br from-white to-indigo-100 shadow-lg rounded">
                    Submit
                </button>
            </form>
            <p className="mt-2 text-sm text-white text-center">
                Already a member? <Link href={"/login"} className="underline">Login</Link>
            </p>
        </>
    );
}


export default Page;