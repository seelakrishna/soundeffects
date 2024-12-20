import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useSoundStore } from '../store/useSoundStore';
import { SoundCard } from './SoundCard';
import { Button } from './ui/Button';
import { Footer } from './Footer';

interface LibraryPageProps {
  onClose: () => void;
}

export const LibraryPage: React.FC<LibraryPageProps> = ({ onClose }) => {
  const { favorites } = useSoundStore();
  const [playingSound, setPlayingSound] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-pink-50">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="rounded-full p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">My Library</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Favorites</h2>
            {favorites.length === 0 ? (
              <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                <p className="text-gray-500">No favorite sounds yet.</p>
                <p className="text-sm text-gray-400 mt-2">
                  Click the heart icon on any sound to add it to your favorites.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((sound) => (
                  <SoundCard
                    key={sound.id}
                    sound={sound}
                    isPlaying={playingSound === sound.id}
                    onPlay={() => setPlayingSound(sound.id)}
                    onPause={() => setPlayingSound(null)}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};
