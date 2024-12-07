import React, { createContext, useContext, useRef } from 'react';

interface AudioContextType {
  currentlyPlaying: React.MutableRefObject<HTMLAudioElement | null>;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const currentlyPlaying = useRef<HTMLAudioElement | null>(null);

  return (
    <AudioContext.Provider value={{ currentlyPlaying }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}