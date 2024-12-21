import React, { useState } from 'react';
import { SoundGrid } from './SoundGrid';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
import { LikedSoundsLibrary } from './LikedSoundsLibrary';
import { useSoundLibrary } from '../hooks/useSoundLibrary';

export function SoundLibrary() {
  const {
    filteredSounds,
    categories,
    selectedCategory,
    searchQuery,
    setSelectedCategory,
    setSearchQuery
  } = useSoundLibrary();

  const [showLikedSounds, setShowLikedSounds] = useState(false);

  return (
    <div className="w-full space-y-8">
      <div className="flex gap-4">
        <button
          onClick={() => setShowLikedSounds(false)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            !showLikedSounds
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
              : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
          }`}
        >
          All Sounds
        </button>
        <button
          onClick={() => setShowLikedSounds(true)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            showLikedSounds
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
              : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
          }`}
        >
          Your Library
        </button>
      </div>

      {showLikedSounds ? (
        <LikedSoundsLibrary />
      ) : (
        <>
          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <SoundGrid sounds={filteredSounds} />
        </>
      )}
    </div>
  );
}
