import { useState, useMemo } from 'react';
import { sounds } from '../data/sounds';
import { SoundCategory } from '../types/sound';

export function useSoundLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<SoundCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(sounds.map(sound => sound.category));
    return Array.from(uniqueCategories) as SoundCategory[];
  }, []);

  const filteredSounds = useMemo(() => {
    let filtered = sounds;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(sound => sound.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(sound => 
        sound.name.toLowerCase().includes(query) ||
        sound.description.toLowerCase().includes(query) ||
        sound.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return {
    filteredSounds,
    categories,
    selectedCategory,
    searchQuery,
    setSelectedCategory,
    setSearchQuery
  };
}