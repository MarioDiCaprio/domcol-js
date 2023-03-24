import React from 'react';
import Base from "../components/Base/Base";
import PlotPreviews from "../components/_index/PlotPreviews";
import {Container} from "@mui/material";


// noinspection JSUnusedGlobalSymbols
export default function Home() {
    return (
        <Base title="DomcolJS | Home" navbarMargins>
            <Container maxWidth="lg">

                <PlotPreviews />

            </Container>
        </Base>
    );
}
