import React from 'react';
import { SoundCategory } from '../types/sound';

interface CategoryFilterProps {
  categories: SoundCategory[];
  selectedCategory: SoundCategory | 'all';
  onSelectCategory: (category: SoundCategory | 'all') => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onSelectCategory('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedCategory === 'all'
            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
            : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-primary-100'
        }`}
      >
        All Sounds
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
              : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-primary-100'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}