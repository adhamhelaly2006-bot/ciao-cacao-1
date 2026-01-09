import React from 'react';
import { MenuCategory } from '../types';

interface NavigationProps {
    categories: MenuCategory[];
    activeCategory: string;
    scrollToCategory: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ categories, activeCategory, scrollToCategory }) => {
    return (
        <nav className="sticky top-0 bg-[--nav-bg] backdrop-blur-sm z-10 shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-4 py-3 flex items-center gap-3 overflow-x-auto scrollbar-hide whitespace-nowrap">
                {categories.map(category => {
                    const isActive = activeCategory === category.id;
                    const classes = `px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out cursor-pointer ${
                        isActive 
                        ? 'bg-[#00916E] text-white shadow-md' 
                        : 'bg-[--nav-button-bg] text-[--nav-button-text] shadow-sm hover:bg-[--nav-button-hover-bg]'
                    }`;
                    return (
                        <a
                            key={category.id}
                            href={`#${category.id}`}
                            data-category-id={category.id}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToCategory(category.id);
                            }}
                            className={classes}
                        >
                            {category.name}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navigation;