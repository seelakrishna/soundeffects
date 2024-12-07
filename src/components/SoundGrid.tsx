import React from 'react';
import { Volume2 } from 'lucide-react';
import { Sound } from '../types/sound';
import { SoundCard } from './SoundCard';

interface SoundGridProps {
  sounds: Sound[];
}

export function SoundGrid({ sounds }: SoundGridProps) {
  if (sounds.length === 0) {
    return (
      <div className="text-center py-12">
        <Volume2 className="w-16 h-16 text-primary-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg font-display">
          No sounds found matching your criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sounds.map(sound => (
        <SoundCard key={sound.id} sound={sound} />
      ))}
    </div>
  );
}