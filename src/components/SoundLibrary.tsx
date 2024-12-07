import React from 'react';
import { SoundGrid } from './SoundGrid';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
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

  return (
    <div className="w-full">
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
    </div>
  );
}