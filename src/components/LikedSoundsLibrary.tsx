import React from 'react';
import { Heart } from 'lucide-react';
import { useLikedSounds } from '../contexts/LikedSoundsContext';
import { SoundGrid } from './SoundGrid';

export function LikedSoundsLibrary() {
  const { likedSounds } = useLikedSounds();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Heart className="w-6 h-6 text-primary-500" fill="currentColor" />
        <h2 className="text-2xl font-bold text-gray-900">Your Library</h2>
        <span className="px-2 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
          {likedSounds.length} sounds
        </span>
      </div>
      <SoundGrid sounds={likedSounds} />
    </div>
  );
}
