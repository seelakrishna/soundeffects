import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-primary-400" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="block w-full pl-11 pr-4 py-3 border border-primary-100 rounded-xl leading-5 bg-white/80 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent shadow-sm transition-all duration-200 hover:shadow-md font-medium"
        placeholder="Search sounds by name, category, or description..."
      />
    </div>
  );
}