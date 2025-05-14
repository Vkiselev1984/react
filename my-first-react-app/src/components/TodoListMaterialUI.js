import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const TodoListMaterialUI = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() === '') return;
        setTasks([...tasks, task]);
        setTask('');
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                Task List
            </Typography>
            <Box sx={{ display: 'flex', mb: 2 }}>
                <TextField
                    label="New Task"
                    variant="outlined"
                    value={task}
                    onChange={handleInputChange}
                    fullWidth
                />
                <Button variant="contained" onClick={handleAddTask} sx={{ ml: 1 }}>
                    Добавить
                </Button>
            </Box>
            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index} secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                            <DeleteIcon />
                        </IconButton>
                    }>
                        <ListItemText primary={task} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default TodoListMaterialUI;