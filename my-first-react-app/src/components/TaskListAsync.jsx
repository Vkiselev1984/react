import React from 'react';
import { useSelector } from 'react-redux';

const TaskListAsync = () => {
  const { items: tasks = [], loading, error } = useSelector(state => state.tasks);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!tasks.length) return <div>No task</div>;

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title} {task.completed ? '(Completed)' : ''}
        </li>
      ))}
    </ul>
  );
};

export default TaskListAsync;
