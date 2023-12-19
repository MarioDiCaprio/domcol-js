import './globals.css'
import React, {ReactNode} from "react";
import Providers from "@/components/app/Providers";
import Navbar from "@/components/app/Navbar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Providers>
                        
                    <Navbar />
                        
                    <div className="pt-12">
                        <main>
                            { children }
                        </main>
                    </div>
                        
                </Providers>
            </body>
        </html>
    );
}

export default Layout;