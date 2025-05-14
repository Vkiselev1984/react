import { Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';

const MaterialCounter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decreaseCount = () => {
        setCount(prevCount => Math.max(prevCount - 1, 0));
    };

    return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                Counter: {count}
            </Typography>
            <Button variant="contained" color="primary" onClick={increaseCount} style={{ marginRight: '10px' }}>
                Increase
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={decreaseCount}
                disabled={count === 0}
            >
                Decrease
            </Button>
        </Container>
    );
};

export default MaterialCounter;