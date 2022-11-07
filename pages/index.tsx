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

        </Base>
    );
}
