import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}
export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "emerald"
    });

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

