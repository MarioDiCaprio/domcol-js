import './globals.css'
import React, {ReactNode} from "react";
import Providers from "@/components/app/Providers";
import Navbar from "@/components/app/Navbar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Providers>
                    
                    <div className="w-screen h-screen flex flex-col">
                        <Navbar />

                        <main className="w-full h-full pt-12 relative">
                            {children}
                        </main>
                    </div>

                </Providers>
            </body>
        </html>
    );
}

export default Layout;