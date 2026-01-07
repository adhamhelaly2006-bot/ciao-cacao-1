
import React from 'react';
import type { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
  language: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, language }) => {
  const name = language === 'ar' ? item.name : item.englishName;
  const description = language === 'ar' ? item.description : item.englishDescription;
  const note = language === 'ar' ? item.note : item.englishNote;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md dark:hover:bg-gray-700/50 transition-all duration-300 border border-transparent dark:border-gray-700 text-right">
      <div className="flex justify-between items-baseline">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 ltr:text-left rtl:text-right">{name}</h3>
        <div className="flex-grow mx-4 border-b border-dashed border-gray-300 dark:border-gray-600"></div>
        <p className="text-xl font-bold text-green-600 dark:text-green-400 whitespace-nowrap">{item.price}</p>
      </div>
      {description && (
        <p className="mt-2 text-md text-gray-600 dark:text-gray-400 ltr:text-left rtl:text-right">{description}</p>
      )}
      {note && (
        <div className="ltr:text-left rtl:text-right">
          <p className="mt-1 text-sm text-yellow-800 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/40 px-2 py-1 rounded-md inline-block">({note})</p>
        </div>
      )}
    </div>
  );
};

export default MenuItem;