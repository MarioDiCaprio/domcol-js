import styles from '../styles/Home.module.scss';
import React from 'react';
import Base from "../components/Base/Base";
import PreviewCarousel from "../components/_home/PreviewCarousel/PreviewCarousel";
import {motion, MotionProps, Variants} from "framer-motion";


const sectionItemVariants: Variants = {
    before: { opacity: 0, translateX: -40 },
    after: { opacity: 1, translateX: 0 }
}

const sectionMotion: MotionProps = {
    initial: 'before',
    whileInView: 'after',
    viewport: { once: true },
    transition: { staggerChildren: 0.5, duration: 0.7 }
}


export default function Home() {
    return (
        <Base title="DomcolJS | Home" style={{ overflowX: 'hidden' }}>

            {/* Preview Carousel */}
            <div className={styles.carouselWrapper}>
                <PreviewCarousel />
            </div>

            <div className={styles.sections}>

                <motion.div
                    className={styles.about}
                    {...sectionMotion}
                    transition={{
                        ...sectionMotion.transition,
                        delayChildren: 1.4
                    }}
                >
                    <motion.h1 variants={sectionItemVariants}>
                        What is this website?
                    </motion.h1>
                    <motion.p variants={sectionItemVariants}>
                        Inspired by <a href="https://www.desmos.com/">Desmos</a>, this website is a tool
                        for plotting mathematical functions. Specifically, this web-app plots complex-valued
                        functions using a method called <i>Domain Coloring</i>.
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.footer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 2.1 }}
                >
                    <p>
                        designed & built by <a href="https://mariodicaprio.vercel.app">Mario Di Caprio</a>
                    </p>
                </motion.div>

            </div>

        </Base>
    );
}
