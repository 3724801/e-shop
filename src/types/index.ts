export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export type Page = 'home' | 'about' | 'contact' | 'faq' | 'shipping' | 'returns' | 'size-guide' | 'track-order' | 'help';

export interface NavigationState {
  currentPage: Page;
  searchQuery: string;
  selectedCategory: string;
}