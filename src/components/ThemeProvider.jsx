import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext';


export const useTheme = () => {
    return useContext(ThemeContext);
}
export function ThemeProvider({ children }) {
    const initialTheme = () => {
        return localStorage.getItem("theme") || "night";
    }

    const [theme, setTheme] = useState(initialTheme);
    
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'emerald' ? 'night' : 'emerald'));
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

