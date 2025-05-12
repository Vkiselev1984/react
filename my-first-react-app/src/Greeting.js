// Greeting.js
import React from 'react';

const Greeting = () => {
    const currentHour = new Date().getHours(); // Get the current hour
    let greeting;

    // Set the greeting depending on the time of day
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