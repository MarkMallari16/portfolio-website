import React, { useState, useEffect } from 'react'

function useTheme() {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "emerald"
    });

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);

        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'emerald' ? 'dark' : 'emerald'));
    }

    return { theme, toggleTheme };
}

export default useTheme