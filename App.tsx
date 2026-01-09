import React, { useState, useEffect } from 'react';
import LanguageSelector from './components/LanguageSelector';
import MenuView from './components/MenuView';

const App: React.FC = () => {
    const [language, setLanguage] = useState<'ar' | 'en' | null>(null);
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedTheme = window.localStorage.getItem('theme');
            if (storedTheme === 'dark' || storedTheme === 'light') {
                return storedTheme;
            }
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'light';
            }
        }
        return 'dark';
    });

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        if (language) {
            document.documentElement.lang = language;
            document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
            document.body.style.fontFamily = language === 'ar' ? "'Cairo', sans-serif" : "'Poppins', sans-serif";
        }
    }, [language]);

    const handleSelectLanguage = (lang: 'ar' | 'en') => {
        setLanguage(lang);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    if (!language) {
        return <LanguageSelector onSelectLanguage={handleSelectLanguage} />;
    }

    return <MenuView language={language} theme={theme} toggleTheme={toggleTheme} />;
};

export default App;