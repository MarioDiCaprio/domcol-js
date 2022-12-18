import styles from "./PreviewCarousel.module.scss";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {motion} from "framer-motion";


const PreviewCarousel: React.FC = () => {
    return (
        <motion.div
            className={styles.wrapper}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
        >
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
        </motion.div>
    );
}


export default PreviewCarousel;
