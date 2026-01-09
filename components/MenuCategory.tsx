
import React from 'react';
import { MenuCategory as MenuCategoryType } from '../types';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
    category: MenuCategoryType;
    registerRef: (id: string, element: HTMLElement | null) => void;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, registerRef }) => {
    return (
        <section id={category.id} className="pt-4" ref={(el) => registerRef(category.id, el)}>
            <div className="text-center mb-6">
                <h2 className="inline-block text-3xl font-extrabold text-[#00916E] pb-2">
                    {category.name}
                </h2>
                <div className="w-20 h-1 bg-[#00916E] mx-auto mt-1"></div>
            </div>
            <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
                {category.items.map(item => (
                    <MenuItem key={item.name} item={item} />
                ))}
            </div>
        </section>
    );
};

export default MenuCategory;