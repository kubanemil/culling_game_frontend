import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main: React.FC = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/cards/')
            .then(response => response.data)
            .then(data => setCards(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Card List</h1>
            <ul>
                {cards.map(card => (
                    <li key={card.id}>
                        <img src={card.image} alt={card.name} />
                        <h2>{card.name}</h2>
                        <p>Points: {card.points}</p>
                        <p>Grade: {card.grade}</p>
                        <p>Action ID: {card.action_id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Main;