
import React, { useState, useEffect } from 'react';
import { MENU_DATA } from './constants';
import MenuCategory from './components/MenuCategory';
import Header from './components/Header';
import Navigation from './components/Navigation';
import LanguageSelector from './components/LanguageSelector';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [language, setLanguage] = useState<string | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const html = document.documentElement;
    if (language === 'ar') {
      html.setAttribute('lang', 'ar');
      html.setAttribute('dir', 'rtl');
    } else if (language === 'en') {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
    }
  }, [language]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSelectLanguage = (lang: string) => {
    setLanguage(lang);
  };

  if (!language) {
    return <LanguageSelector onSelectLanguage={handleSelectLanguage} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F7F5] dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header toggleTheme={toggleTheme} currentTheme={theme} language={language} />
      <Navigation categories={MENU_DATA} language={language} />
      <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="space-y-12">
          {MENU_DATA.map((category) => (
            <MenuCategory key={category.id} category={category} language={language} />
          ))}
        </div>
      </main>
      <footer className="text-center p-8 text-gray-400 dark:text-gray-500">
        <p>&copy; {new Date().getFullYear()} Ciao Cacao. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}</p>
      </footer>
    </div>
  );
};

export default App;