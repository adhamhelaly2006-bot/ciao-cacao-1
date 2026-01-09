import React from 'react';

interface HeaderProps {
    slogan: string;
    availability: string;
    timings: string;
    address: string;
    phone: string;
}

const Header: React.FC<HeaderProps> = ({ slogan, availability, timings, address, phone }) => {
    return (
        <header className="bg-white p-4 shadow-md transition-colors duration-300">
            <div className="container mx-auto text-center relative">
                <h1 className="text-5xl font-black text-[#00916E] tracking-wider">Ciao Cacao</h1>
                <div className="w-24 h-1 bg-[#00916E] mx-auto mt-2 mb-4"></div>
                
                <p className="mt-3 text-black max-w-lg mx-auto">
                    {slogan}
                    <br />
                    {availability}
                </p>
                <div className="mt-4 space-y-2 text-black">
                     <div className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" /></svg>
                        <span>{timings}</span>
                    </div>
                    <a href="https://maps.app.goo.gl/2T76sR5BCRWsdAJV8?g_st=ipc" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-[#00916E] hover:underline transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        <span>{address}</span>
                    </a>
                    <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 hover:text-[#00916E] hover:underline transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                        <span>{phone}</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;