import React from 'react';
import { Github, Twitter, Mail, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      hoverColor: 'hover:text-gray-900'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      hoverColor: 'hover:text-[#0A66C2]'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@soundfx.com',
      hoverColor: 'hover:text-blue-600'
    }
  ];

  return (
    <footer className="bg-white/80 backdrop-blur-sm shadow-lg mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">About SoundFX</h3>
            <p className="text-gray-600 leading-relaxed">
              Your premier destination for high-quality sound effects. Perfect for creators,
              developers, and audio enthusiasts looking to enhance their projects.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {['Browse Sounds', 'Categories', 'My Library', 'Support'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Connect With Us</h3>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 transition-colors duration-200 ${social.hoverColor}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-600 mt-4">
              Stay updated with our latest sound additions and features.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} SoundFX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};Z
