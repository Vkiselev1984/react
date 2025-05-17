import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from '../middleware/loggerMiddleware';
import rootSaga from '../sagas/usersSaga';
import favoritesReducer from './favoritesSlice';
import productReducer from './productSlice';
import taskReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    favorites: favoritesReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(loggerMiddleware, sagaMiddleware), 
});

sagaMiddleware.run(rootSaga);

export default store;