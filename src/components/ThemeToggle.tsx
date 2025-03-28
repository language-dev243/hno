import React from 'react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <span
        className={`
          absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-900 rounded-full 
          shadow-md transform transition-transform duration-300
          ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}
        `}
      >
        {theme === 'light' ? '☀️' : '🌙'}
      </span>
    </button>
  );
};