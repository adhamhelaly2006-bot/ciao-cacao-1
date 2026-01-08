
import React from 'react';
import type { MenuCategory } from '../types';

interface NavigationProps {
  categories: MenuCategory[];
  language: string;
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ categories, language, activeCategory, setActiveCategory }) => {
  const navRef = React.useRef<HTMLDivElement>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    e.preventDefault();
    setActiveCategory(categoryId); // Instantly update active state for better UX
    const element = document.getElementById(categoryId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Scroll the nav bar to keep the active item in view on smaller screens
        const activeLink = e.currentTarget;
        if (navRef.current) {
            navRef.current.scrollTo({
                left: activeLink.offsetLeft - navRef.current.offsetWidth / 2 + activeLink.offsetWidth / 2,
                behavior: 'smooth'
            });
        }
        window.history.pushState(null, '', `#${categoryId}`);
    }
  };

  return (
    <nav className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-10 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div 
        ref={navRef}
        className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            onClick={(e) => handleLinkClick(e, category.id)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out block cursor-pointer
              ${activeCategory === category.id 
                ? 'bg-green-600 text-white shadow-md' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm'
              }`
            }
          >
            {language === 'ar' ? category.title : category.englishTitle}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;