import React from 'react';
import Base from "../components/Base/Base";
import PlotPreviews from "../components/_index/PlotReviews/PlotPreviews";
import {Container} from "@mui/material";
import Credentials from "../components/Credentials/Credentials";


// noinspection JSUnusedGlobalSymbols
export default function Home() {
    return (
        <Base title="Domcol JS | Home" navbarMargins>
            <Container maxWidth="lg">

                <PlotPreviews />

            </Container>
            <Credentials />
        </Base>
    );
}
