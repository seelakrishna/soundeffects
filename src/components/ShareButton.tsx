import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import { Sound } from '../types/sound';
import { SocialShare } from './SocialShare';

interface ShareButtonProps {
  sound: Sound;
}

export function ShareButton({ sound }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-white/90 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
        title="Share sound"
      >
        <Share2 className="w-5 h-5 text-primary-500" />
      </button>
      {isOpen && <SocialShare sound={sound} onClose={() => setIsOpen(false)} />}
    </div>
  );
}