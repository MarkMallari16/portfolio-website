import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useScroll from '../hooks/useScroll';
function ScrollBtn() {
    const { scrollVisible } = useScroll();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const fadeScrollVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: scrollVisible ? 1 : 0, y: scrollVisible ? -20 : 0 }
    }
    
    return (
        <motion.div
            className={`fixed bottom-0 right-0 me-10 mb-10`}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, delay: 0.1, ease: 'easeInOut' }}
            variants={fadeScrollVariants}>
            <button onClick={scrollToTop} className="btn btn-secondary  px-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                </svg>
            </button>
        </motion.div>
    )
}

export default ScrollBtn