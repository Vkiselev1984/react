import React from 'react';

const CurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();

    return (
        <h2 style={{ color: 'blue', textAlign: 'center' }}>
            Current time: {currentTime}
        </h2>
    );
};

export default CurrentTime;