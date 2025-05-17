import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import productsReducer from './productsReducer';
import tasksReducer from './tasksReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    favorites: favoritesReducer,
    products: productsReducer,
    users: usersReducer,
});

export default rootReducer;