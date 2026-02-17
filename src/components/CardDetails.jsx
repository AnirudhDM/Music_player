import React from 'react';
import './CardDetails.css';

const CardDetails = ({ activeCard }) => {
  // Music data for different cards
  const cardData = [
    { title: 'BF1', artist: 'Artist' },
    { title: 'Enam2', artist: 'Artist' },
    { title: 'Nightrider', artist: 'Artist' },
    { title: 'Sleepindie', artist: 'Artist' },
    { title: 'Sundress Ditto', artist: 'Artist' },
  ];

  const currentCard = cardData[activeCard] || cardData[0];

  return (
    <div className="card-details">
      <h1 className="card-title">
        {currentCard.title} <span className="card-subtitle">{currentCard.artist}</span>
      </h1>
    </div>
  );
};

export default CardDetails;
