import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Sound } from '../types/sound';
import { useAudio } from '../contexts/AudioContext';
import { ShareButton } from './ShareButton';

interface SoundCardProps {
  sound: Sound;
}

export function SoundCard({ sound }: SoundCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { currentlyPlaying } = useAudio();

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        currentlyPlaying.current = null;
      } else {
        // Stop currently playing audio if any
        if (currentlyPlaying.current && currentlyPlaying.current !== audioRef.current) {
          currentlyPlaying.current.pause();
          // Trigger the onPause event on the currently playing audio
          currentlyPlaying.current.dispatchEvent(new Event('pause'));
        }
        
        audioRef.current.play();
        currentlyPlaying.current = audioRef.current;
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    currentlyPlaying.current = null;
  };

  const handlePause = () => {
    // Only update state if this audio element was externally paused
    if (audioRef.current && currentlyPlaying.current !== audioRef.current) {
      setIsPlaying(false);
    }
  };

  React.useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('pause', handlePause);
      return () => {
        audio.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={sound.image} 
          alt={sound.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <ShareButton sound={sound} />
          <button
            onClick={togglePlay}
            className="p-3 rounded-full bg-white/90 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-primary-500" />
            ) : (
              <Play className="w-6 h-6 text-primary-500" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">{sound.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <Volume2 className="w-4 h-4 text-primary-400" />
          <span className="text-sm text-primary-600 font-medium capitalize">{sound.category}</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 font-medium">{sound.description}</p>
        <audio ref={audioRef} src={sound.url} onEnded={handleEnded} />
      </div>
    </div>
  );
}