"use client"

import React, {ReactNode} from "react";
import {Provider as ReduxProvider} from "react-redux";
import {store} from "@/redux/store";
import {NextUIProvider} from "@nextui-org/react";
import {useRouter} from "next/navigation";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter();
    return (
        <ReduxProvider store={store}>
            <NextUIProvider navigate={router.push}>
                { children }
            </NextUIProvider>
        </ReduxProvider>
    );
}

export default Providers;