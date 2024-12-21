import React from 'react';
import { Heart } from 'lucide-react';
import { Sound } from '../types/sound';
import { useLikedSounds } from '../contexts/LikedSoundsContext';

interface LikeButtonProps {
  sound: Sound;
}

export function LikeButton({ sound }: LikeButtonProps) {
  const { toggleLikedSound, isLiked } = useLikedSounds();
  const liked = isLiked(sound.id);

  return (
    <button
      onClick={() => toggleLikedSound(sound)}
      className={`p-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ${
        liked 
          ? 'bg-primary-500 text-white' 
          : 'bg-white/90 hover:bg-white text-primary-500'
      }`}
      title={liked ? 'Remove from library' : 'Add to library'}
    >
      <Heart className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} />
    </button>
  );
}
