import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favoritesSlice';

const products = [
    { id: 1, name: 'Product 1', description: 'Product Description 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Product Description 2', price: 200 },
    { id: 3, name: 'Product 3', description: 'Product Description 3', price: 300 },
    ];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToFavorites = (product) => {
    dispatch(addFavorite(product));
  };

  return (
    <div>
      <h2>Product list</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.price}</p>
            <button onClick={() => handleAddToFavorites(product)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;