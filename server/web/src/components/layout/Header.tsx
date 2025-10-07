import React from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Mindfulness Institute" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-bold text-primary-500">Mindfulness Institute</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-green-700 dark:text-green-300 hover:text-primary-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button size="sm" className="hidden md:block">
              Get Started
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-green-700 dark:text-green-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-green-700 dark:text-green-300 hover:text-primary-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};