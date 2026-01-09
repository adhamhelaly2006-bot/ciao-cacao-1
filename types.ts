
export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface HeaderTranslations {
    slogan: string;
    availability: string;
    timings: string;
    address: string;
    phone: string;
}

export interface Translations {
    header: HeaderTranslations;
    menuData: MenuCategory[];
}
