import React, {ReactNode} from "react";
import dynamic from "next/dynamic";

// disable SSR to prevent "window is not defined"
const Editor = dynamic(() => import("@/components/app/(graphing)/Editor"), {ssr: false});

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="relative w-full h-full">
            <Editor />
            { children }
        </div>
    );
}

export default Layout;