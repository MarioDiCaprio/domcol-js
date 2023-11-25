import React from "react";
import {Metadata} from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Complexify | Home"
}

const Page: React.FC = () => {
    return (
        <div className="w-full pt-12 flex justify-center">

            {/* Container for the 3 boxes */}
            <div className="w-full max-w-[1100px] min-h-[300px] p-2 flex gap-2 flex-col md:flex-row">

                {/* Main Box */}
                <div className="
                        w-full md:w-2/3 h-full p-10 flex flex-col justify-between
                        rounded-lg text-slate-50
                        bg-gradient-to-br from-indigo-600 to-indigo-900">
                    <div>
                        <span className="text-3xl font-medium font-display">
                            Visualize complex-valued functions
                        </span>
                        <p className="w-2/3 py-2 mb-12 text-xl">
                            Plot using different techniques and store your results right on the cloud.
                        </p>
                    </div>
                    <Link href={"/domain-coloring"} className="w-fit p-3 bg-indigo-400 rounded-lg hover:bg-indigo-500 duration-300">
                        Start Graphing Now
                    </Link>
                </div>
                
                <div className="w-full md:w-1/3 h-fit md:h-full flex flex-col sm:flex-row md:flex-col gap-2">

                    {/* Riemann Sphere Box */}
                    <div className="
                            w-full sm:max-md:w-1/2 h-fit md:h-1/2 p-5 flex flex-col justify-between
                            bg-gradient-to-br from-fuchsia-500 to-fuchsia-800
                            text-white rounded-lg">
                        <span className="text-xl mb-5 font-medium font-display">
                            Explore the Riemann-Sphere
                        </span>
                        <span>
                            <Link href={"/riemann-sphere"} className="w-fit p-3 bg-fuchsia-800 rounded-lg hover:bg-fuchsia-900 duration-300">
                                Start Graphing Now
                            </Link>
                        </span>
                    </div>

                    {/* Box */}
                    <div className="
                            w-full sm:max-md:w-1/2 h-fit md:h-1/2 p-5 flex flex-col justify-between
                            bg-gradient-to-br from-pink-500 to-pink-800
                            text-white rounded-lg">
                        
                    </div>
                </div>

            </div>
        </div>
        
    );
}

export default Page;