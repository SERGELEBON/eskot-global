// Centralized Type Definitions

export interface Service {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  fullDescription: string;
  features: string[];
  applications: string[];
  specifications: { label: string; value: string }[];
  image: string;
  gallery: string[];
}

export interface NavService {
  id: string;
  name: string;
}

export interface Feature {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Value {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  lines: string[];
  href: string;
}

export interface FAQ {
  q: string;
  a: string;
}

// Product types for gallery and cart
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  serviceId: string;
  inStock: boolean;
  likes: number;
  views: number;
  specifications?: { label: string; value: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
}

// Gallery filter types
export interface GalleryFilter {
  category: string;
  serviceId?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  inStock?: boolean;
}
