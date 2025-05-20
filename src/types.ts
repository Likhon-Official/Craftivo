export interface Theme {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  featured: boolean;
  isNew: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
  categoryId: string;
}

export interface ThemeCategory {
  id: string;
  name: string;
}