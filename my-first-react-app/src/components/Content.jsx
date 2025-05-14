import React from 'react';

const Content = ({ theme }) => {
    const contentStyle = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        padding: '20px',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s',
    };

    return (

        <h1 style={contentStyle}>Current theme: {theme}</h1>

    );
};

export default Content;