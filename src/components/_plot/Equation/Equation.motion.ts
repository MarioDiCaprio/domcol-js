import {MotionProps} from "framer-motion";


export const contextMotion: MotionProps = {
    layout: true,
    initial: { opacity: 0, translateY: '50vh' },
    animate: { opacity: 1, translateY: 0 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
}