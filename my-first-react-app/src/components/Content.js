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
        <div style={contentStyle}>
            <h1>Current theme: {theme}</h1>
        </div>
    );
};

export default Content;