
import React from 'react';
import type { MenuCategory } from '../types';
import DropdownMenu from './DropdownMenu';

interface NavigationProps {
  categories: MenuCategory[];
  language: string;
}

const Navigation: React.FC<NavigationProps> = ({ categories, language }) => {
  const grouped = {
    pizza: categories.filter(c => c.id.startsWith('pizza-') && c.id !== 'pizza-sandwich'),
    pasta: categories.filter(c => c.id.startsWith('pasta-')),
    sandwiches: categories.filter(c => c.id.startsWith('sandwich-') || c.id === 'pizza-sandwich'),
    burgers: categories.filter(c => c.id.startsWith('burger-')),
  };

  const standalone = categories.filter(c => 
    !c.id.startsWith('pizza-') &&
    !c.id.startsWith('pasta-') &&
    !c.id.startsWith('sandwich-') &&
    !c.id.startsWith('burger-') &&
    c.id !== 'pizza-sandwich'
  );

  const navItemTitles = {
    ar: {
      pizza: 'البيتزا',
      pasta: 'الباستا',
      sandwiches: 'الساندويتشات',
      burgers: 'البرجر',
    },
    en: {
      pizza: 'Pizza',
      pasta: 'Pasta',
      sandwiches: 'Sandwiches',
      burgers: 'Burgers',
    }
  };

  const navItems = [
    { title: language === 'ar' ? navItemTitles.ar.pizza : navItemTitles.en.pizza, categories: grouped.pizza },
    { title: language === 'ar' ? navItemTitles.ar.pasta : navItemTitles.en.pasta, categories: grouped.pasta },
    { title: language === 'ar' ? navItemTitles.ar.sandwiches : navItemTitles.en.sandwiches, categories: grouped.sandwiches },
    { title: language === 'ar' ? navItemTitles.ar.burgers : navItemTitles.en.burgers, categories: grouped.burgers },
  ].filter(item => item.categories.length > 0);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    e.preventDefault();
    const element = document.getElementById(categoryId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${categoryId}`);
    }
  };

  return (
    <nav className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-10 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-3">
        <div className="flex justify-center items-center flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
          {navItems.map(item => (
            <DropdownMenu key={item.title} title={item.title} categories={item.categories} language={language} />
          ))}
          {standalone.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              onClick={(e) => handleLinkClick(e, category.id)}
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 font-bold tracking-wider text-sm uppercase transition-colors duration-300 pb-2 border-b-2 border-transparent hover:border-green-500 dark:hover:border-green-400"
            >
              {language === 'ar' ? category.title : category.englishTitle}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;