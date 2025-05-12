import React, { useEffect, useState } from 'react';
import '../css/Timer.css';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer-container">
            <div className="timer">
                Timer: {seconds} seconds
            </div>
        </div>
    );
};

export default Timer;