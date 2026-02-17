import React from 'react';
import './Controls.css';

const Controls = ({ isPlaying, currentTime, duration, onPlayPause, onNext, onShuffle }) => {
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="controls-wrapper">
      <div className="controls">
        {/* Play/Pause button */}
        <button
          className="control-btn play-btn"
          aria-label={isPlaying ? "Pause" : "Play"}
          onClick={onPlayPause}
        >
          {isPlaying ? (
            // Pause icon
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <rect x="1" y="1" width="4" height="14" fill="currentColor" />
              <rect x="9" y="1" width="4" height="14" fill="currentColor" />
            </svg>
          ) : (
            // Play icon
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path d="M1 1.5L13 8L1 14.5V1.5Z" fill="currentColor" />
            </svg>
          )}
        </button>

        {/* Forward button */}
        <button
          className="control-btn forward-btn"
          aria-label="Next track"
          onClick={onNext}
        >
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
            <path d="M1 1.5L8 8L1 14.5V1.5Z" fill="currentColor" />
            <path d="M10 1.5L17 8L10 14.5V1.5Z" fill="currentColor" />
          </svg>
        </button>

        {/* Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline">
            <div
              className="timeline-progress"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Shuffle button */}
        <button className="control-btn shuffle-btn" aria-label="Shuffle" onClick={onShuffle}>
          <svg width="20" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M16 3h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 20L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M21 16v5h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 15c1.6 1.6 3.4 3.4 6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 4c2.6 1.6 4.4 3.4 6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Controls;
