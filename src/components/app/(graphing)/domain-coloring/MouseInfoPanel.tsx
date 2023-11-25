"use client"

import React, {useEffect, useState} from "react";
import {Interval, transformInterval} from "@/components/app/(graphing)/utils";


function prettify(n: number): string {
    return (Math.round(n * 100) / 100).toString()
}


interface MouseInfoPanelProps {
    screen: { width: number, height: number };
    domain: { x: Interval, y: Interval };
}

const MouseInfoPanel: React.FC<MouseInfoPanelProps> = ({ screen, domain }) => {
    const [mouseX, setMouseX] = useState<number>(0);
    const [mouseY, setMouseY] = useState<number>(0);

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        });
    }, []);

    const transformedX = transformInterval(mouseX, {min: 0, max: screen.width}, domain.x);
    const transformedY = transformInterval(screen.height - mouseY, {min: 0, max: screen.height}, domain.y);
    
    return (
        <div className="fixed right-0 bottom-0 m-5 p-2 bg-white rounded shadow-2xl">
            <table className="min-w-[300px] table-fixed text-left">
                
                <thead>
                    <tr>
                        <th className="w-1/3"></th>
                        <th className="w-1/3">Real</th>
                        <th className="w-1/3">Imaginary</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <th className="w-1/3">Domain</th>
                        <td className="w-1/3">{ prettify(transformedX) }</td>
                        <td className="w-1/3">{ prettify(transformedY) }</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    );
}


export default MouseInfoPanel;