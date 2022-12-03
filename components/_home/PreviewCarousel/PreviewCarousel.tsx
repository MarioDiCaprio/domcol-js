import styles from "./PreviewCarousel.module.scss";
import React from "react";
import Carousel from "react-bootstrap/Carousel";


const PreviewCarousel: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Carousel fade>

                {/* Slide 1 */}
                <Carousel.Item>
                    <img className={styles.image} src="/img/home-carousel/slide1.png" alt="" />
                    <Carousel.Caption>
                        <h1 className={styles.caption}>Plot Complex-Valued Functions</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 2 */}
                <Carousel.Item>
                    <img className={styles.image} src="/img/home-carousel/slide2.png" alt="" />
                    <Carousel.Caption>
                        <h1 className={styles.caption}>Easy To Use</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 3 */}
                <Carousel.Item>
                    <img className={styles.image} src="/img/home-carousel/slide3.png" alt="" />
                    <Carousel.Caption>
                        <h1 className={styles.caption}>Fractal Support</h1>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}


export default PreviewCarousel;
