import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
function ScrollBtn() {
    const [scrollVisible, setIsScrollVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 5

            setIsScrollVisible(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollVisible ? 1 : 0 }} className={`fixed bottom-0 right-0 me-10 mb-10 transition-all ease-in-out`}>
            <button onClick={scrollToTop} className="btn btn-secondary text-white px-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                </svg>
            </button>
        </motion.div>
    )
}

export default ScrollBtn