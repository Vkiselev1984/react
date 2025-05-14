import React from 'react';
import CurrentTime from '../components/CurrentTime';
import data from '../components/data';
import EventCard from '../components/EventCard';
import Greeting from '../components/Greeting';

const Seminar1 = () => {
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
        <div>
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
};

export default Seminar1;