import { useState, type FC } from 'react';
import { ThemeContext } from './ThemeContext';

type Props = {
    children: React.ReactNode
}

// Provider component
export const ThemeProvider: FC<Props> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
