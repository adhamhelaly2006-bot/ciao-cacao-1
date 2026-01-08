
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
        <h1 className="text-6xl md:text-7xl font-black text-green-600 dark:text-green-400 tracking-tight">
          Ciao Cacao
        </h1>
        <div className="mt-4 flex justify-center items-center">
          <div className="w-16 h-1 bg-green-600 dark:bg-green-400 rounded-full"></div>
        </div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {language === 'ar' 
            ? 'نحن نقدم لك أطباق مصنوعة بحب، مكونات طازجة و تجربة لا تنسى! 💚 في انتظارك نستمتع معاً' 
            : 'We offer you dishes made with love, fresh ingredients, and an unforgettable experience! 💚 We are waiting for you to enjoy together'}
        </p>

        <div className="mt-8 space-y-3 text-lg text-gray-700 dark:text-gray-300">
          <div className="flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{language === 'ar' ? '3:00 صباحاً - 11:00 صباحاً' : '3:00 AM - 11:00 AM'}</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{language === 'ar' ? 'طنطا شارع 306 سور سيتي كلوب من الكورنيش' : 'Tanta, 306 St, City Club Wall, from the Corniche'}</span>
          </div>
          <div className="flex items-center justify-center gap-3" dir="ltr">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:01000167408" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">01000167408</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;