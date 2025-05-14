import React from 'react';
import '../css/PropsGreeting.css';

const PropsGreeting = ({ name }) => {
    return <h1>Привет, {name}!</h1>;
};

export default PropsGreeting;