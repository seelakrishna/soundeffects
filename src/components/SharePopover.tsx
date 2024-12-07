import React from 'react';
import { useFloating, useInteractions, useClick, useRole, useDismiss, offset, flip, shift } from '@floating-ui/react';
import { Facebook, Twitter, Linkedin, Link2, Mail } from 'lucide-react';
import { Sound } from '../types/sound';
import { shareToSocialMedia, copyToClipboard } from '../utils/share';

interface SharePopoverProps {
  sound: Sound;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function SharePopover({ sound, isOpen, setIsOpen }: SharePopoverProps) {
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(8), flip(), shift()],
    placement: 'top-end',
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

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

  if (!isOpen) return null;

  return (
    <div
      ref={refs.setFloating}
      style={floatingStyles}
      {...getFloatingProps()}
      className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 p-3 z-50 animate-in fade-in duration-200 w-[280px]"
    >
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {shareButtons.slice(0, 3).map((button) => (
            <button
              key={button.name}
              onClick={button.onClick}
              className={`flex flex-col items-center justify-center gap-1 p-3 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 ${button.className}`}
              title={button.name}
            >
              <button.icon className="w-5 h-5" />
              <span className="text-xs">{button.name}</span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {shareButtons.slice(3).map((button) => (
            <button
              key={button.name}
              onClick={button.onClick}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 ${button.className}`}
              title={button.name}
            >
              <button.icon className="w-4 h-4" />
              <span>{button.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}