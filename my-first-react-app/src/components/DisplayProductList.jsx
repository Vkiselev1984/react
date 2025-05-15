import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, selectProducts, toggleAvailability, updateProduct } from '../redux/productSlice';

const EditProduct = ({ product, onSave, onCancel }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...product, name, description, price: parseFloat(price), available });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Название:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Описание:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Цена:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Доступен:
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
        </label>
      </div>
      <button type="submit">Сохранить</button>
      <button type="button" onClick={onCancel}>Отменить</button>
    </form>
  );
};

const DisplayProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSave = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
    setEditingProduct(null);
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Available: {product.available ? 'Yes' : 'No'}</p>
            <button onClick={() => dispatch(toggleAvailability(product.id))}>
              Toggle accessibility
            </button>
            <button onClick={() => dispatch(removeProduct(product.id))}>
              Delete product
            </button>
            <button onClick={() => setEditingProduct(product)}>
              Edit
            </button>
          </li>
        ))}
      </ul>

      {editingProduct && (
        <EditProduct
          product={editingProduct}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default DisplayProductList;