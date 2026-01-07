
import React from 'react';
import type { MenuCategory as MenuCategoryType } from '../types';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
  language: string;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, language }) => {
  return (
    <section id={category.id} className="scroll-mt-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-600 dark:text-green-400 tracking-wide">
          {language === 'ar' ? category.title : category.englishTitle}
        </h2>
        <div className="mt-2 w-20 h-1.5 bg-green-600 dark:bg-green-400 mx-auto rounded-full"></div>
      </div>
      <div className="space-y-6">
        {category.items.map((item, index) => (
          <MenuItem key={`${item.name}-${index}`} item={item} language={language} />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;