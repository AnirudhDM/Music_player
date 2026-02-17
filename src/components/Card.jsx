import React, { useState } from 'react';
import './Card.css';

const Card = ({ isActive, index, trackIndex, onClick, cardStyle }) => {
  const [isLiked, setIsLiked] = useState(false);

  // Music data matching CardDetails
  const musicData = [
    {
      title: 'BF1',
      artist: 'Artist',
      image: '/src/assets/images/ghost.png',
      audio: '/songs/bf1.wav',
      gradient: 'linear-gradient(145deg, rgba(220, 220, 230, 0.35), rgba(10, 10, 15, 0.85))'
    },
    {
      title: 'Enam2',
      artist: 'Artist',
      image: '/src/assets/images/landscape.png',
      audio: '/songs/enam2.wav',
      gradient: 'linear-gradient(145deg, rgba(220, 220, 230, 0.35), rgba(10, 10, 15, 0.85))'
    },
    {
      title: 'Nightrider',
      artist: 'Artist',
      image: '/src/assets/images/retro.png',
      audio: '/songs/nighrider.wav',
      gradient: 'linear-gradient(145deg, rgba(220, 220, 230, 0.35), rgba(10, 10, 15, 0.85))'
    },
    {
      title: 'Sleepindie',
      artist: 'Artist',
      image: '/src/assets/images/waves.png',
      audio: '/songs/sleepindie.wav',
      gradient: 'linear-gradient(145deg, rgba(220, 220, 230, 0.35), rgba(10, 10, 15, 0.85))'
    },
    {
      title: 'Sundress Ditto',
      artist: 'Artist',
      image: '/src/assets/images/portrait.png',
      audio: '/songs/sundress ditto.wav',
      gradient: 'linear-gradient(145deg, rgba(220, 220, 230, 0.35), rgba(10, 10, 15, 0.85))'
    },
  ];

  const currentTrack = musicData[trackIndex ?? index] || musicData[0];

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div
      className={`card ${isActive ? 'active' : ''}`}
      onClick={onClick}
      style={{ background: currentTrack.gradient, ...cardStyle }}
    >
      <div className="card-inner">
        {/* Cover Art */}
        <div className="cover-art">
          <img
            src={currentTrack.image}
            alt={`${currentTrack.title} cover`}
            className="cover-art-image"
          />
        </div>

        {/* Track Info */}
        <div className="track-info">
          <div className="track-details">
            <h3 className="track-title">{currentTrack.title}</h3>
            <p className="track-artist">{currentTrack.artist}</p>
          </div>

          {/* Like Button */}
          <button
            className={`like-btn ${isLiked ? 'liked' : ''}`}
            onClick={handleLikeClick}
            aria-label="Like"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill={isLiked ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
