import React, { useState } from 'react';
import '../css/Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter: {count}</h1>
            <button className="increment-button" onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;