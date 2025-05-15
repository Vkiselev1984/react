import React from 'react';
import { Provider } from 'react-redux';
import AddProduct from '../components/AddProduct';
import DisplayProductList from '../components/DisplayProductList';
import EditProduct from '../components/EditProduct';
import FavoritesList from '../components/FavoritesList';
import ProductList from '../components/ProductList';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import store from '../redux/store';


const Seminar6 = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Task list</h1>
        <TaskInput />
        <TaskList />
      </div>
      <div>
        <h1>Shop</h1>
        <ProductList />
        <FavoritesList />
      </div>
      <div>
        <h1>Product manager</h1>
        <AddProduct />
        <DisplayProductList />
        <EditProduct />
      </div>
    </Provider>
  );
};

export default Seminar6;