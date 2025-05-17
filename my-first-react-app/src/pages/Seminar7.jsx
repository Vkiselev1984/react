import React from 'react';
import { useDispatch } from 'react-redux';
import TaskListAsync from '../components/TaskListAsync';
import { fetchTasks } from '../redux/taskSlice';

const Seminar7 = () => {
  const dispatch = useDispatch();

  const handleLoadTasks = () => {
    dispatch(fetchTasks());
  };

  return (
    <div>
      <h1>Seminar 7: Async Tasks with Redux Toolkit</h1>
      <button onClick={handleLoadTasks}>Load</button>
      <TaskListAsync />
    </div>
  );
};

export default Seminar7;
