import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';


const TaskInput = () => { 
const [description, setDescription] = useState(''); 
const dispatch = useDispatch(); 

const handleAddTask = () => {
    if (description.trim()) {
      dispatch(addTask(description));
      setDescription('');
    }
  };
return (
<div>
<input
type="text"
value={description}
onChange={(e) => setDescription(e.target.value)}
placeholder="Enter task description"
/>
<button onClick={handleAddTask}>Add</button>
</div>
);
};

export default TaskInput;