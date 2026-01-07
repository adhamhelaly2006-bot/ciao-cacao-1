
import React from 'react';

interface LanguageSelectorProps {
  onSelectLanguage: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelectLanguage }) => {
  return (
    <div className="fixed inset-0 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center z-50">
      <div className="text-center">
        <h1 className="text-5xl font-black text-green-600 dark:text-green-400 tracking-tight mb-4">
          Welcome
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
          Please select your language
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onSelectLanguage('en')}
            className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            English
          </button>
          <button
            onClick={() => onSelectLanguage('ar')}
            className="px-8 py-3 bg-white dark:bg-gray-800 border border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 font-bold rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
