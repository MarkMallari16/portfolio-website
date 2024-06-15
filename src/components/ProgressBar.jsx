import React from 'react'
import { easeIn, easeInOut, motion, useScroll, useSpring } from 'framer-motion';

function ProgressBar() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    })
    return (
        <motion.div
            className='fixed top-0 left-0 w-full h-1 bg-secondary origin-left z-50'
            style={{ scaleX: scaleX }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scaleX }}

        >

        </motion.div>
    )
}

export default ProgressBar