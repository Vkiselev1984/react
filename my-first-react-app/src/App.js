// App.js
import React from 'react';
import './App.css';
import CurrentTime from './CurrentTime';
import data from './data';
import EventCard from './EventCard';
import Greeting from './Greeting';

function App() {
  const events = [
    {
      title: "Rock band concert",
      date: "November 25, 2023",
      location: "Sports Palace"
    },
    {
      title: "Contemporary art exhibition",
      date: "November 30, 2023",
      location: "Art Gallery"
    },
    {
      title: "Street food festival",
      date: "December 5, 2023",
      location: "Central Park"
    }
  ];
  return (
    <div className="App">
      <Greeting />   <CurrentTime />
      <h1>Upcoming events</h1>
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}
      <h1>Products List</h1>
      <ul>
        {data.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button className="add-to-cart">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;