import React, { useEffect, useState } from 'react'

function useScroll() {
    const [scrollVisible, setIsScrollVisible] = useState(false);


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


    return { scrollVisible };
}

export default useScroll