import React, {ReactNode} from "react";
import Editor from "@/components/app/(graphing)/Editor";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="relative w-full h-full">
            <Editor />
            { children }
        </div>
    );
}

export default Layout;