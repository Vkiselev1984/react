import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks.tasks);
  
    if (!Array.isArray(tasks)) {
      console.error("Tasks is not an array:", tasks);
      return <div>Error: Task data is not available.</div>;
    }
  
    if (tasks.length === 0) {
      return <div>No tasks available.</div>; // Сообщение, если нет задач
    }
  
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    );
  };

export default TaskList;