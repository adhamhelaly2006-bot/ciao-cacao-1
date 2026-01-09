import React from 'react';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
    item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4 min-h-[80px]">
            <div className="flex items-start justify-between gap-4 h-full">
                <div className="text-start flex-grow">
                    <h3 className="text-lg font-bold text-black">{item.name}</h3>
                    {item.description && (
                         <p className="text-sm text-black mt-1">{item.description}</p>
                    )}
                </div>
                <div className="flex-shrink-0 pt-1">
                    <p className="text-xl font-bold text-[#00916E]">{item.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
