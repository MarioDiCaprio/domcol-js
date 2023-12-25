"use client"

import $ from "jquery";
import React, {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import Input from "@/components/app/(login)/Input";
import {FaKey as KeyIcon, FaUser as UserIcon} from "react-icons/fa";
import {useSignupMutation} from "@/redux/api/complexifyApi";
import {Spinner} from "@nextui-org/react";
import {MdEmail as EmailIcon} from "react-icons/md";


const SignupForm: React.FC = () => {
    const router = useRouter();
    const [signup, { isLoading }] = useSignupMutation();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErrorMessage(null);

        const username = $('#signup-input-username').val() as string;
        const email = $('#signup-input-email').val() as string;
        const password = $('#signup-input-password').val() as string;

        if (username.length === 0 || password.length === 0 || email.length === 0) {
            setErrorMessage("All fields are required");
            return;
        }

        signup({ username, email, password })
            .unwrap()
            .then(() => {
                router.push("/");
            })
            .catch(e => {
                console.log(e)
                setErrorMessage(e.data)
            });
    }

    return (
        <form method="post" onSubmit={onSubmit} className="flex flex-col items-center gap-3">
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
            <div className="min-h-[20px] text-sm text-center text-slate-600 font-bold">
                {errorMessage ?? ' '}
            </div>
            <button type="submit" className="w-full max-w-[120px] min-h-[40px] flex justify-center content-center px-5 mt-7 py-2 bg-gradient-to-br from-white to-indigo-100 shadow-lg rounded">
                { isLoading? <Spinner size="sm" /> : "Submit" }
            </button>
        </form>
    );
}


export default SignupForm;