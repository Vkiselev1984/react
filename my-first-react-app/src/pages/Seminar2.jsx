import React from 'react';
import CommentsList from '../components/CommentsList';
import Counter from '../components/Counter';
import TextInput from '../components/TextInput';
import Timer from '../components/Timer';
import TodoList from '../components/TodoList';

const Seminar2 = () => {
    return (
        <div>
            <h1>Counter</h1>
            <Counter />
            <h1>Text input</h1>
            <TextInput />
            <TodoList />
            <h1>Timer</h1>
            <Timer />
            <h1>Homework</h1>
            <CommentsList />
        </div>
    );
};

export default Seminar2;