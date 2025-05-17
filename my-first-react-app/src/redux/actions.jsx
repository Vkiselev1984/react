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

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});

export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error,
});