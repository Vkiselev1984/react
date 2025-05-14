import React, { useState } from 'react';

const ThemeSwitcher = ({ onThemeChange }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        onThemeChange(newTheme);
    };

    return (
        <button onClick={toggleTheme}>
            Switch theme to {theme === 'light' ? 'dark' : 'light'}
        </button>
    );
};

export default ThemeSwitcher;