import React, { useEffect, useState } from 'react';
import Box from '../components/Box';
import List from '../components/List';

const Seminar4 = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Симуляция загрузки данных
        const fetchData = () => {
            setTimeout(() => {
                const data = [
                    { id: 1, content: 'First item', style: { color: 'red' } },
                    { id: 2, content: 'Second item', style: { color: 'blue' } },
                    { id: 3, content: 'Third item', style: { color: 'green' } },
                    { id: 4, content: 'Fourth item', style: { color: 'purple' } },
                ];
                setItems(data);
                setLoading(false);
            }, 5000); // Задержка в 2 секунды для имитации загрузки
        };

        fetchData();
    }, []);

    const renderListItems = () => {
        return items.map(item => (
            <li key={item.id} style={item.style}>
                {item.content}
            </li>
        ));
    };

    const handleButtonClick = () => {
        alert('Button clicked! This could trigger an action.');
    };

    return (
        <div>
            <h1>Task 1: Box Component</h1>
            <Box>
                <h2>Heading</h2>
                <p>This is the text inside the Box component.</p>
            </Box>

            <Box>
                <img src="https://via.placeholder.com/150" alt="Sample" style={{ width: '100%' }} />
            </Box>

            <Box>
                <button onClick={handleButtonClick}>Click me</button>
            </Box>
            <hr />
            <h1>Task 1: List Component</h1>
            {loading ? (
                <p>Loading...</p> // Индикатор загрузки
            ) : (
                <List renderItems={renderListItems} />
            )}
        </div>
    );
};

export default Seminar4;