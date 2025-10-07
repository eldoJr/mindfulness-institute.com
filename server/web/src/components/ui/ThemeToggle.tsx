import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  return (
    <div className="flex items-center bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-1">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`p-2 rounded-md transition-colors ${
            theme === value
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-800/50'
          }`}
          title={label}
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  );
};