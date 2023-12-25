"use client"

import $ from "jquery";
import React, {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import Input from "@/components/app/(login)/Input";
import {FaKey as KeyIcon, FaUser as UserIcon} from "react-icons/fa";
import {useLoginMutation} from "@/redux/api/complexifyApi";
import {Spinner} from "@nextui-org/react";


const LoginForm: React.FC = () => {
    const router = useRouter();
    const [login, { isLoading }] = useLoginMutation();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErrorMessage(null);
        
        const username = $('#login-input-username').val() as string;
        const password = $('#login-input-password').val() as string;
        
        if (username.length === 0 || password.length === 0) {
            setErrorMessage("Username and Password required");
            return;
        }
        
        login({ username, password })
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
                id="login-input-username"
                name="login-input-username"
                placeholder="Username"
                icon={<UserIcon />}
            />
            <Input
                type="password"
                id="login-input-password"
                name="login-input-password"
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


export default LoginForm;