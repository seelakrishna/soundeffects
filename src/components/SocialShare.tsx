import React, { useEffect, useRef } from 'react';
import { Facebook, Twitter, Linkedin, Link2, Mail } from 'lucide-react';
import { Sound } from '../types/sound';
import { shareToSocialMedia, copyToClipboard } from '../utils/share';

interface SocialShareProps {
  sound: Sound;
  onClose: () => void;
}

export function SocialShare({ sound, onClose }: SocialShareProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const shareButtons = [
    {
      name: 'Copy Link',
      icon: Link2,
      onClick: () => copyToClipboard(window.location.href),
      className: 'bg-primary-500 hover:bg-primary-600',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      onClick: () => shareToSocialMedia('twitter', sound),
      className: 'bg-[#1DA1F2] hover:bg-[#0c90e0]',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      onClick: () => shareToSocialMedia('facebook', sound),
      className: 'bg-[#1877F2] hover:bg-[#0d65d9]',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      onClick: () => shareToSocialMedia('linkedin', sound),
      className: 'bg-[#0A66C2] hover:bg-[#095197]',
    },
    {
      name: 'Email',
      icon: Mail,
      onClick: () => shareToSocialMedia('email', sound),
      className: 'bg-gray-600 hover:bg-gray-700',
    },
  ];

  return (
    <div 
      ref={containerRef}
      className="absolute bottom-full right-0 mb-2 flex items-center gap-2 animate-in"
      style={{ minWidth: 'max-content' }}
    >
      {shareButtons.map((button) => (
        <button
          key={button.name}
          onClick={() => {
            button.onClick();
            onClose();
          }}
          className={`p-2 rounded-full text-white shadow-lg transition-all duration-200 hover:scale-110 ${button.className}`}
          title={button.name}
        >
          <button.icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
}