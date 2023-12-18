import React, {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from "react";


interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon: ReactNode;
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <div className="w-full p-1 pr-3 flex gap-3 items-center border border-zinc-200 rounded-[40px] shadow-inner bg-white">
            <div>
                <div className="w-[40px] h-[40px] flex justify-center items-center border border-zinc-200 shadow rounded-[50%] text-indigo-500">
                    { props.icon }
                </div>
            </div>
            
            <input
                {...props}
                className="w-full h-full outline-none"
            />
        </div>
    );
}


export default Input;