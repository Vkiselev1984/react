import { ADD_TASK, REMOVE_TASK } from './actions';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  console.log('Action received in taskReducer:', action);
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), description: action.payload }],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;