import styles from '../styles/Home.module.scss';
import React from 'react';
import Base from "../components/Base/Base";
import PreviewCarousel from "../components/_home/PreviewCarousel/PreviewCarousel";


export default function Home() {
    return (
        <Base title="DomcolJS | Home">

            {/* Preview Carousel */}
            <div className={styles.carouselWrapper}>
                <PreviewCarousel />
            </div>

            <div className={styles.sections}>

                <div className={styles.about}>
                    <h1>What is this website?</h1>
                    Inspired by <a href="https://www.desmos.com/">Desmos</a>, this website is a tool
                    for plotting mathematical functions. Specifically, this web-app plots complex-valued
                    functions using a method called <i>Domain Coloring</i>.
                </div>

            </div>

        </Base>
    );
}
