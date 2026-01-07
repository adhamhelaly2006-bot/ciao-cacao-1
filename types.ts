
export interface MenuItem {
  name: string;
  englishName: string;
  price: string;
  description: string;
  englishDescription: string;
  note?: string;
  englishNote?: string;
}

export interface MenuCategory {
  title: string;
  id: string;
  englishTitle: string;
  items: MenuItem[];
}