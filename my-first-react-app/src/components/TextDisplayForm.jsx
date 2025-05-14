import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const TextDisplayForm = () => {
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleButtonClick = () => {
        setDisplayText(inputText);
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', mt: 5 }}>
            <TextField
                label="Input Text"
                variant="outlined"
                fullWidth
                value={inputText}
                onChange={handleInputChange}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleButtonClick}
                sx={{ mt: 2 }}
            >
                Display
            </Button>
            {displayText && (
                <Typography variant="h6" sx={{ mt: 2 }}>
                    {displayText}
                </Typography>
            )}
        </Box>
    );
};

export default TextDisplayForm;