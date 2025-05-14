import React from 'react';

const Box = ({ children }) => {
    const boxStyle = {
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px 0',
        backgroundColor: '#f9f9f9',
    };

    return <div style={boxStyle}>{children}</div>;
};

export default Box;