import React, { useState } from 'react';
import '../css/TextInput.css';

const TextInput = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="text-input-container">
            <input
                type="text"
                className="text-input"
                value={text}
                onChange={handleChange}
                placeholder="Enter text here"
            />
            <p className="text-output">You entered: {text}</p>
        </div>
    );
};

export default TextInput;