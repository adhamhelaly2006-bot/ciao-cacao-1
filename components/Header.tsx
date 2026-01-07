
import React from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: string;
  language: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme, language }) => {
  return (
    <header className="py-12 bg-white dark:bg-gray-900 shadow-md relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <div className="absolute top-4 ltr:left-4 rtl:right-4">
          <ThemeToggle toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </div>
        <h1 className="text-6xl md:text-7xl font-black text-green-600 dark:text-green-400 tracking-tight">PIZZA</h1>
        <div className="mt-4 flex justify-center items-center">
          <div className="w-16 h-1 bg-green-600 dark:bg-green-400 rounded-full"></div>
        </div>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
          {language === 'ar' ? 'قائمة طعام شهية لوجبات لا تنسى' : 'A delicious menu for unforgettable meals'}
        </p>
      </div>
    </header>
  );
};

export default Header;