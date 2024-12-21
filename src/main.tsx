import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AudioProvider } from './contexts/AudioContext';
import { LikedSoundsProvider } from './contexts/LikedSoundsContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioProvider>
      <LikedSoundsProvider>
        <App />
      </LikedSoundsProvider>
    </AudioProvider>
  </StrictMode>
);
