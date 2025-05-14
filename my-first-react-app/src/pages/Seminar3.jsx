import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React, { useState } from 'react';
import Content from '../components/Content';
import MaterialCounter from '../components/MaterialCounter';
import MessagesList from '../components/MessagesList';
import PropsGreeting from '../components/PropsGreeting';
import TemperatureConverter from '../components/TemperatureConverter';
import TextDisplayForm from '../components/TextDisplayForm';
import ThemeSwitcher from '../components/ThemeSwitcher';
import TodoListMaterialUI from '../components/TodoListMaterialUI';

const Seminar3 = () => {
    const [themeMode, setThemeMode] = useState('light');

    const handleThemeChange = (newTheme) => {
        setThemeMode(newTheme);
    };

    const theme = createTheme({
        palette: {
            mode: themeMode,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{ textAlign: 'center' }}>
                <h1>Task 1</h1>
                <h2>Props Greeting</h2>
                <PropsGreeting name="Alexey" />
                <PropsGreeting name="Maria" />
                <PropsGreeting name="Dmitry" />
                <h1>Task 2</h1>
                <h2>Welcome to the Counter App!</h2>
                <MaterialCounter />
                <hr />
                <h1>Task 3</h1>
                <h2>MessagesList</h2>
                <MessagesList />
                <hr />
                <h1>Task 4</h1>
                <h4>Text Display</h4>
                <TextDisplayForm />
                <hr />
                <h1>Task 5</h1>
                <h2>Theme Switcher</h2>
                <ThemeSwitcher onThemeChange={handleThemeChange} />
                <Content theme={theme.palette.mode} />
                <hr />
                <h1>Homework: Task 1</h1>
                <h2>Temperature Converter</h2>
                <TemperatureConverter />
                <hr />
                <h1>Homework: Task 2</h1>
                <h2>TodoListMaterialUI</h2>
                <TodoListMaterialUI />
            </div>
        </ThemeProvider>
    );
};

export default Seminar3;