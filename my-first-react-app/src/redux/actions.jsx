export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: description,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});