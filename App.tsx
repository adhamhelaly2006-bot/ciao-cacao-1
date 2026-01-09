import React, { useState, useEffect } from 'react';
import LanguageSelector from './components/LanguageSelector';
import MenuView from './components/MenuView';

const App: React.FC = () => {
    const [language, setLanguage] = useState<'ar' | 'en' | null>(null);

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

    if (!language) {
        return <LanguageSelector onSelectLanguage={handleSelectLanguage} />;
    }

    return <MenuView language={language} />;
};

export default App;