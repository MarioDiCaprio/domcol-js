import React, {ReactNode} from "react";
import { IoMdCloudDone as CloudIcon } from "react-icons/io";
import { FaUsers as CommunityIcon } from "react-icons/fa";


const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="w-full h-full px-5 py-14 flex justify-center items-center">
            <div className="
                w-full max-w-[500px] md:max-w-[800px]
                flex flex-col md:flex-row
                border border-zinc-200 rounded shadow-xl">
                
                <div className="w-full md:w-1/2 p-5 flex flex-col justify-center gap-10">
                    
                    <div className="flex items-center gap-3">
                        <div className="w-[50px] h-[50px] p-2 flex justify-center items-center rounded-[50%] text-white bg-gradient-to-br from-indigo-400 to-indigo-600">
                            <CloudIcon />
                        </div>
                        <div className="w-4/5">
                            <h2 className="text-xl font-bold font-display">
                                save on the cloud.
                            </h2>
                            <p className="text-sm text-zinc-700">
                                Conveniently store your projects in one place.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-[50px] h-[50px] p-2 flex justify-center items-center rounded-[50%] text-white bg-gradient-to-br from-fuchsia-400 to-fuchsia-700">
                            <CommunityIcon />
                        </div>
                        <div className="w-4/5">
                            <h2 className="text-xl font-bold font-display">
                                join the community.
                            </h2>
                            <p className="text-sm text-zinc-700">
                                Share your projects with like-minded people.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2 p-5 flex flex-col justify-center gap-3 bg-gradient-to-br from-indigo-400 to-indigo-600">
                    { children }
                </div>
                
            </div>
        </div>
    );
}


export default Layout;