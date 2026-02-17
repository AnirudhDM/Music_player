import React from 'react';
import Card from './Card';
import './Carousel.css';

const positionMap = {
  '0':  { ry: 0,   tx: 0,    tz: 0,    opacity: 1,    zIndex: 5, pointerEvents: 'auto' },
  '1':  { ry: -45, tx: 260,  tz: -120, opacity: 1,    zIndex: 3, pointerEvents: 'auto' },
  '-1': { ry: 45,  tx: -260, tz: -120, opacity: 1,    zIndex: 3, pointerEvents: 'auto' },
  '2':  { ry: -65, tx: 430,  tz: -260, opacity: 0.85, zIndex: 1, pointerEvents: 'auto' },
  '-2': { ry: 65,  tx: -430, tz: -260, opacity: 0.85, zIndex: 1, pointerEvents: 'auto' },
};

const Carousel = ({ activeIndex, setActiveIndex, cardOrder }) => {
  const totalCards = 5;

  const getCardStyle = (index) => {
    const diff = ((index - activeIndex) % totalCards + totalCards) % totalCards;
    const normalized = diff > Math.floor(totalCards / 2) ? diff - totalCards : diff;
    const pos = positionMap[normalized.toString()];

    return {
      transform: `rotateY(${pos.ry}deg) translateX(${pos.tx}px) translateZ(${pos.tz}px)`,
      opacity: pos.opacity,
      zIndex: pos.zIndex,
      pointerEvents: pos.pointerEvents,
    };
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {[...Array(totalCards)].map((_, index) => (
          <Card
            key={index}
            index={index}
            trackIndex={cardOrder[index]}
            isActive={index === activeIndex}
            cardStyle={getCardStyle(index)}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
