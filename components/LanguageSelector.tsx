
import React from 'react';

interface LanguageSelectorProps {
    onSelectLanguage: (language: 'ar' | 'en') => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelectLanguage }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="text-center">
                 <h1 className="text-5xl font-black text-[#00916E] tracking-wider mb-8">Ciao Cacao</h1>
                <h2 className="text-2xl font-bold text-black mb-6">Choose your language / اختر لغتك</h2>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => onSelectLanguage('en')}
                        className="px-8 py-3 bg-[#00916E] text-white font-bold rounded-full text-lg transition-transform transform hover:scale-105"
                    >
                        English
                    </button>
                    <button
                        onClick={() => onSelectLanguage('ar')}
                        className="px-8 py-3 bg-[#00916E] text-white font-bold rounded-full text-lg transition-transform transform hover:scale-105"
                    >
                        العربية
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
