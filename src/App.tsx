import React from 'react';
import { Music2 } from 'lucide-react';
import { SoundLibrary } from './components/SoundLibrary';

function App() {
  return (
    <div className="min-h-screen bg-gradient-radial from-white via-primary-50 to-primary-100">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg relative overflow-hidden border-b border-primary-100">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-primary-200/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-100 rounded-full">
              <Music2 className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 font-display tracking-tight">
                Sound Effects Library
              </h1>
              <p className="text-gray-600 mt-1 font-medium">
                Discover and play high-quality sound effects
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SoundLibrary />
      </main>
    </div>
  );
}

export default App;