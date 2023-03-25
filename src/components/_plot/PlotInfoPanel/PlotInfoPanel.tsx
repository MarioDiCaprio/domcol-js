import React, {useEffect, useState} from "react";
import {Context} from "./PlotInfoPanel.styles";
import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {Interval, transformInterval} from "../utils";


/////////////////////////////////////////////////////////////////////////////////////////////

function prettify(n: number): string {
    return (Math.round(n * 100) / 100).toString()
}

/////////////////////////////////////////////////////////////////////////////////////////////


interface PlotInfoPanelProps {
    screenWidth: number;
    screenHeight: number;
    domainX: Interval;
    domainY: Interval;
}


const PlotInfoPanel: React.FC<PlotInfoPanelProps> = ({ screenWidth, screenHeight, domainX, domainY }) => {
    const [mouseX, setMouseX] = useState<number>(0);
    const [mouseY, setMouseY] = useState<number>(0);

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        });
    }, []);

    const transformedX = transformInterval(mouseX, [0, screenWidth], domainX);
    const transformedY = transformInterval(screenHeight - mouseY, [0, screenHeight], domainY);

    return (
        <>
            {/* @ts-ignore */}
            <Context component={Paper}>
                <Table>
                    <TableHead>

                        <TableRow>
                            <TableCell>

                            </TableCell>
                            <TableCell>
                                Real
                            </TableCell>
                            <TableCell>
                                Imaginary
                            </TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell>
                                Domain
                            </TableCell>
                            <TableCell>
                                <span id="PlotInfoPanel-">

                                </span>
                                { prettify(transformedX) }
                            </TableCell>
                            <TableCell>
                                { prettify(transformedY) }
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </Context>
        </>
    );
}

export default PlotInfoPanel;