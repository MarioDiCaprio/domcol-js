import './globals.css'
import React, {ReactNode} from "react";
import Navbar from "@/components/app/Navbar";
import ReduxProvider from "@/components/app/ReduxProvider";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <Navbar />
                    <main>
                        { children }
                    </main>
                </ReduxProvider>
            </body>
        </html>
    );
}

export default Layout;