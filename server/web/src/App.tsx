import React from 'react';
import { ThemeToggle } from './components/ui/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <header className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-500">Mindfulness Institute</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-6">
        <div className="text-center py-12">
          <h2 className="text-4xl font-bold text-green-900 dark:text-green-100 mb-4">
            Train, Equip, and Inspire
          </h2>
          <p className="text-xl text-green-700 dark:text-green-300 mb-8">
            Creating mindful homes that cultivate wholeness
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Green</span>
            </div>
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Gold</span>
            </div>
            <div className="w-16 h-16 bg-earth-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Brown</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
