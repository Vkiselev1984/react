import React from 'react';
import '../css/Greeting.css';

const Greeting = () => {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    return <h1>{greeting}</h1>; // Display the appropriate greeting
};

export default Greeting;