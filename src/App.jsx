import { useState, useRef, useEffect, useCallback } from 'react'
import './App.css'
import CardDetails from './components/CardDetails'
import Carousel from './components/Carousel'
import Controls from './components/Controls'

// Music data defined outside component to prevent recreation on re-render
const musicData = [
  { title: 'BF1', artist: 'Artist', audio: '/songs/bf1.wav' },
  { title: 'Enam2', artist: 'Artist', audio: '/songs/enam2.wav' },
  { title: 'Nightrider', artist: 'Artist', audio: '/songs/nighrider.wav' },
  { title: 'Sleepindie', artist: 'Artist', audio: '/songs/sleepindie.wav' },
  { title: 'Sundress Ditto', artist: 'Artist', audio: '/songs/sundress ditto.wav' },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle card active
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3, 4]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handleNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % musicData.length;
    setActiveIndex(nextIndex);
  }, [activeIndex]);

  const handleShuffle = useCallback(() => {
    setCardOrder(prev => {
      const shuffled = [...prev];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
    setActiveIndex(2);
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Playback error:', error);
            setIsPlaying(false);
          });
      }
    }
  };

  // Load new track when activeIndex or cardOrder changes
  useEffect(() => {
    if (audioRef.current) {
      const wasPlaying = isPlaying;
      audioRef.current.pause();
      audioRef.current.src = musicData[cardOrder[activeIndex]].audio;
      audioRef.current.load();

      if (wasPlaying) {
        audioRef.current.play().catch((error) => {
          console.error('Playback error:', error);
          setIsPlaying(false);
        });
      }
    }
  }, [activeIndex, cardOrder]);

  // Update current time and handle events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      handleNext();
    };
    const handleError = (e) => {
      console.error('Audio error:', e);
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [handleNext]);

  return (
    <div className="app">
      <audio ref={audioRef} />
      <CardDetails activeCard={cardOrder[activeIndex]} />
      <Carousel
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        cardOrder={cardOrder}
      />
      <Controls
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onShuffle={handleShuffle}
      />
    </div>
  )
}

export default App
