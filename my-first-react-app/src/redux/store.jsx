import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import productReducer from './productSlice';
import taskReducer from './reducer';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    favorites: favoritesReducer,
    products: productReducer,
  },
});

export default store;