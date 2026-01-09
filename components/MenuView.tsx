import React, { useState, useEffect, useRef, useCallback } from 'react';
import { translations } from '../constants';
import { MenuCategory as MenuCategoryType } from '../types';
import Header from './Header';
import Navigation from './Navigation';
import MenuCategory from './MenuCategory';

interface MenuViewProps {
    language: 'ar' | 'en';
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const MenuView: React.FC<MenuViewProps> = ({ language, theme, toggleTheme }) => {
    const { header, menuData } = translations[language];
    const [activeCategory, setActiveCategory] = useState<string>(menuData[0]?.id || '');

    const scrollToCategory = (categoryId: string) => {
        const el = document.getElementById(categoryId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveCategory(categoryId);
        }
    };

    const sectionRefs = useRef<Map<string, HTMLElement | null>>(new Map());
    const registerRef = useCallback((id: string, element: HTMLElement | null) => {
        sectionRefs.current.set(id, element);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveCategory(entry.target.id);
                        const navLink = document.querySelector(`a[data-category-id="${entry.target.id}"]`);
                        if (navLink) {
                            navLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                        }
                    }
                });
            },
            { rootMargin: '-120px 0px -60% 0px' }
        );

        const currentRefs = sectionRefs.current;
        currentRefs.forEach((sectionEl) => {
            if (sectionEl) observer.observe(sectionEl);
        });

        return () => {
            currentRefs.forEach((sectionEl) => {
                if (sectionEl) observer.unobserve(sectionEl);
            });
        };
    }, [registerRef]);

    return (
        <>
            <Header
                slogan={header.slogan}
                availability={header.availability}
                timings={header.timings}
                address={header.address}
                phone={header.phone}
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <Navigation
                categories={menuData}
                activeCategory={activeCategory}
                scrollToCategory={scrollToCategory}
            />
            <main className="container mx-auto p-4 pb-8">
                <div className="space-y-8">
                    {menuData.map((category: MenuCategoryType) => (
                        <MenuCategory key={category.id} category={category} registerRef={registerRef} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default MenuView;