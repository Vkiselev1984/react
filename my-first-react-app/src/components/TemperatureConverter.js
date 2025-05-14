import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        if (!isNaN(value) && value !== '') {
            const convertedValue = (value * 9 / 5) + 32;
            setFahrenheit(convertedValue.toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        if (!isNaN(value) && value !== '') {
            const convertedValue = (value - 32) * 5 / 9;
            setCelsius(convertedValue.toFixed(2));
        } else {
            setCelsius('');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
            <TextField
                label="Цельсий (°C)"
                variant="outlined"
                value={celsius}
                onChange={handleCelsiusChange}
                sx={{ mb: 2 }}
                type="number"
            />
            <TextField
                label="Фаренгейт (°F)"
                variant="outlined"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                type="number"
            />
        </Box>
    );
};

export default TemperatureConverter;