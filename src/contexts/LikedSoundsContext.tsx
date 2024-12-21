import React, { createContext, useContext, useState } from 'react';
import { Sound } from '../types/sound';

interface LikedSoundsContextType {
  likedSounds: Sound[];
  toggleLikedSound: (sound: Sound) => void;
  isLiked: (soundId: string) => boolean;
}

const LikedSoundsContext = createContext<LikedSoundsContextType | null>(null);

export function LikedSoundsProvider({ children }: { children: React.ReactNode }) {
  const [likedSounds, setLikedSounds] = useState<Sound[]>([]);

  const toggleLikedSound = (sound: Sound) => {
    setLikedSounds(prev => 
      prev.find(s => s.id === sound.id)
        ? prev.filter(s => s.id !== sound.id)
        : [...prev, sound]
    );
  };

  const isLiked = (soundId: string) => {
    return likedSounds.some(sound => sound.id === soundId);
  };

  return (
    <LikedSoundsContext.Provider value={{ likedSounds, toggleLikedSound, isLiked }}>
      {children}
    </LikedSoundsContext.Provider>
  );
}

export function useLikedSounds() {
  const context = useContext(LikedSoundsContext);
  if (!context) {
    throw new Error('useLikedSounds must be used within a LikedSoundsProvider');
  }
  return context;
}
