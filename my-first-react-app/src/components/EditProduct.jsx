import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../redux/productSlice';

const EditProduct = ({ product }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setAvailable(product.available);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: product.id,
      name,
      description,
      price: parseFloat(price),
      available,
    };
    dispatch(updateProduct(updatedProduct));
  };

  if (!product) {
    return <div></div>;
  }

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
    </form>
  );
};

export default EditProduct;