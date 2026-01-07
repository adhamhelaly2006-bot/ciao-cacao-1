
import React, { useState, useRef, useEffect } from 'react';
import type { MenuCategory } from '../types';

interface DropdownMenuProps {
  title: string;
  categories: MenuCategory[];
  language: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, categories, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);


  const handleToggle = () => setIsOpen(!isOpen);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (node.current && !node.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Handle mouse enter/leave for desktop
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
        setIsOpen(true);
    }
  }
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
        setIsOpen(false);
    }
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    e.preventDefault();
    const element = document.getElementById(categoryId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${categoryId}`);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={node} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={handleToggle}
        className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 font-bold tracking-wider text-sm uppercase transition-colors duration-300 pb-2 border-b-2 border-transparent hover:border-green-500 dark:hover:border-green-400 flex items-center focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        <svg className={`w-4 h-4 rtl:mr-1 ltr:ml-1 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      <div
        ref={menuRef}
        className={`absolute z-20 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-out ltr:origin-top-left rtl:origin-top-right ${isOpen ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95 pointer-events-none'}`}
      >
          <div className="py-1" role="menu" aria-orientation="vertical" >
            {categories.map(category => (
              <a
                key={category.id}
                href={`#${category.id}`}
                onClick={(e) => handleLinkClick(e, category.id)}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors ltr:text-left rtl:text-right"
                role="menuitem"
              >
                {language === 'ar' ? category.title : category.englishTitle}
              </a>
            ))}
          </div>
      </div>
    </div>
  );
};

export default DropdownMenu;