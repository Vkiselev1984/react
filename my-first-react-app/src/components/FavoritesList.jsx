import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../redux/favoritesSlice';

const FavoritesList = () => { 
const favorites = useSelector(state => state.favorites.items); 
const dispatch = useDispatch(); 

const handleRemoveFromFavorites = (item) => { 
dispatch(removeFavorite(item)); 
}; 

return (
<div>
<h2>Favorites</h2>
{favorites.length === 0 ? (
<p>No favorites</p>
) : (
<ul>
{favorites.map(item => (
<li key={item.id}>
<h3>{item.name}</h3>
<p>{item.description}</p>
<p>Price: {item.price} rub.</p>
<button onClick={() => handleRemoveFromFavorites(item)}>Remove from favorites</button>
</li>
))}
</ul>
)}
</div>
);
};

export default FavoritesList;