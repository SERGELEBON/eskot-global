import type { Product } from '@/types';

export const productsData: Product[] = [
  // Plywood Products
  {
    id: 'plywood-marine-grade',
    name: 'Marine Grade Plywood 18mm',
    description: 'High quality, water resistant, ideal for outdoor projects and boats',
    price: 85.00,
    image: '/images/hero_left_panel.jpg',
    category: 'Plywood',
    serviceId: 'plywood',
    inStock: true,
    likes: 24,
    views: 156,
    specifications: [
      { label: 'Thickness', value: '18mm' },
      { label: 'Size', value: '4x8 feet' },
      { label: 'Grade', value: 'Marine WBP' },
    ]
  },
  {
    id: 'plywood-birch-15mm',
    name: 'Birch Plywood 15mm',
    description: 'Premium birch plywood for furniture and interior decoration',
    price: 65,
    image: '/images/materials_left.jpg',
    category: 'Plywood',
    serviceId: 'plywood',
    inStock: true,
    likes: 18,
    views: 203,
    specifications: [
      { label: 'Thickness', value: '15mm' },
      { label: 'Size', value: '4x8 feet' },
      { label: 'Grade', value: 'BB/CC' },
    ]
  },
  {
    id: 'plywood-standard-12mm',
    name: 'Standard Plywood 12mm',
    description: 'Versatile plywood for general construction and DIY projects',
    price: 45,
    image: '/images/scale_bottom_right.jpg',
    category: 'Plywood',
    serviceId: 'plywood',
    inStock: true,
    likes: 31,
    views: 287,
    specifications: [
      { label: 'Thickness', value: '12mm' },
      { label: 'Size', value: '4x8 feet' },
      { label: 'Grade', value: 'C/D' },
    ]
  },

  // Marine Boards
  {
    id: 'marine-board-tropical',
    name: 'Tropical Marine Board 20mm',
    description: 'Extreme moisture resistance, perfect for marine environments',
    price: 95,
    image: '/images/capability_top_left.jpg',
    category: 'Marine Boards',
    serviceId: 'marine-boards',
    inStock: true,
    likes: 15,
    views: 134,
    specifications: [
      { label: 'Thickness', value: '20mm' },
      { label: 'Treatment', value: 'WBP Pressure' },
      { label: 'Warranty', value: '10 years' },
    ]
  },
  {
    id: 'marine-board-standard',
    name: 'Standard Marine Board 16mm',
    description: 'Economical solution for outdoor projects requiring water resistance',
    price: 78,
    image: '/images/precision_left.jpg',
    category: 'Marine Boards',
    serviceId: 'marine-boards',
    inStock: true,
    likes: 12,
    views: 98,
    specifications: [
      { label: 'Thickness', value: '16mm' },
      { label: 'Treatment', value: 'Water resistant' },
      { label: 'Usage', value: 'Outdoor' },
    ]
  },

  // Melamine Boards
  {
    id: 'melamine-white-18mm',
    name: 'White Matte Melamine 18mm',
    description: 'Matte white surface, ideal for modern kitchens and offices',
    price: 55,
    image: '/images/capability_bottom_right.jpg',
    category: 'Melamine Boards',
    serviceId: 'melamine-boards',
    inStock: true,
    likes: 42,
    views: 321,
    specifications: [
      { label: 'Color', value: 'Matte white' },
      { label: 'Thickness', value: '18mm' },
      { label: 'Finish', value: 'Scratch resistant' },
    ]
  },
  {
    id: 'melamine-wood-grain',
    name: 'Oak Grain Melamine',
    description: 'Natural wood appearance with melamine durability',
    price: 62,
    image: '/images/materials_right_top.jpg',
    category: 'Melamine Boards',
    serviceId: 'melamine-boards',
    inStock: true,
    likes: 28,
    views: 189,
    specifications: [
      { label: 'Pattern', value: 'Natural oak' },
      { label: 'Thickness', value: '18mm' },
      { label: 'Texture', value: 'Grain bois' },
    ]
  },
  {
    id: 'melamine-black-gloss',
    name: 'Black Gloss Melamine',
    description: 'Glossy black finish for a modern and elegant look',
    price: 68,
    image: '/images/craft_right_bottom.jpg',
    category: 'Melamine Boards',
    serviceId: 'melamine-boards',
    inStock: false,
    likes: 35,
    views: 245,
    specifications: [
      { label: 'Color', value: 'Glossy black' },
      { label: 'Thickness', value: '18mm' },
      { label: 'Finish', value: 'High gloss' },
    ]
  },

  // Furniture Accessories
  {
    id: 'soft-close-hinges',
    name: 'Soft Close Hinges',
    description: 'Concealed hinges with premium soft close system',
    price: 12,
    image: '/images/craft_right_bottom.jpg',
    category: 'Hardware',
    serviceId: 'furniture-accessories',
    inStock: true,
    likes: 67,
    views: 432,
    specifications: [
      { label: 'Type', value: 'Concealed hinge' },
      { label: 'Max load', value: '20kg' },
      { label: 'Finish', value: 'Brushed nickel' },
    ]
  },
  {
    id: 'cabinet-handles-modern',
    name: 'Modern Cabinet Handles',
    description: 'Stainless steel handles for contemporary style',
    price: 15,
    image: '/images/precision_right_bottom.jpg',
    category: 'Hardware',
    serviceId: 'furniture-accessories',
    inStock: true,
    likes: 23,
    views: 167,
    specifications: [
      { label: 'Material', value: 'Stainless steel' },
      { label: 'Length', value: '128mm' },
      { label: 'Style', value: 'Moderne' },
    ]
  },
  {
    id: 'drawer-slides-full',
    name: 'Full Extension Drawer Slides',
    description: 'Full extension slides with soft close',
    price: 25,
    image: '/images/craft_left.jpg',
    category: 'Hardware',
    serviceId: 'furniture-accessories',
    inStock: true,
    likes: 19,
    views: 203,
    specifications: [
      { label: 'Extension', value: '100% full' },
      { label: 'Capacity', value: '45kg' },
      { label: 'Length', value: '450mm' },
    ]
  },

  // Quartz Tops
  {
    id: 'quartz-carrara-white',
    name: 'White Carrara Quartz',
    description: 'Quartz surface with classic Carrara veining',
    price: 320,
    image: '/images/materials_right_top.jpg',
    category: 'Countertops',
    serviceId: 'quartz-tops',
    inStock: true,
    likes: 58,
    views: 389,
    specifications: [
      { label: 'Thickness', value: '30mm' },
      { label: 'Finish', value: 'Polished' },
      { label: 'Slab size', value: '3200x1600mm' },
    ]
  },
  {
    id: 'quartz-grey-concrete',
    name: 'Concrete Grey Quartz',
    description: 'Modern concrete look for industrial kitchens',
    price: 295,
    image: '/images/scale_top_left.jpg',
    category: 'Countertops',
    serviceId: 'quartz-tops',
    inStock: true,
    likes: 34,
    views: 256,
    specifications: [
      { label: 'Thickness', value: '20mm' },
      { label: 'Finish', value: 'Matte' },
      { label: 'Style', value: 'Industriel' },
    ]
  },

  // Panels
  {
    id: 'mdf-high-density',
    name: 'High Density MDF 25mm',
    description: 'High density MDF panel for demanding applications',
    price: 48,
    image: '/images/materials_left.jpg',
    category: 'Panels',
    serviceId: 'panels',
    inStock: true,
    likes: 26,
    views: 178,
    specifications: [
      { label: 'Density', value: 'High (>750kg/m³)' },
      { label: 'Thickness', value: '25mm' },
      { label: 'Usage', value: 'Heavy furniture' },
    ]
  },
  {
    id: 'particle-board-moisture',
    name: 'Moisture Resistant Particle Board',
    description: 'Moisture resistant particle board for bathrooms',
    price: 42,
    image: '/images/scale_bottom_right.jpg',
    category: 'Panels',
    serviceId: 'panels',
    inStock: true,
    likes: 17,
    views: 142,
    specifications: [
      { label: 'Type', value: 'Moisture resistant' },
      { label: 'Thickness', value: '18mm' },
      { label: 'Certification', value: 'P5' },
    ]
  },
];

// Helper functions
export const getProductsByCategory = (category: string): Product[] =>
  productsData.filter(product => product.category === category);

export const getProductsByService = (serviceId: string): Product[] =>
  productsData.filter(product => product.serviceId === serviceId);

export const getProductById = (id: string): Product | undefined =>
  productsData.find(product => product.id === id);

export const getAllCategories = (): string[] =>
  Array.from(new Set(productsData.map(product => product.category)));

export const incrementProductViews = (productId: string): void => {
  const product = productsData.find(p => p.id === productId);
  if (product) {
    product.views += 1;
  }
};

export const toggleProductLike = (productId: string): boolean => {
  const product = productsData.find(p => p.id === productId);
  if (product) {
    // In a real app, you'd track user likes in state/database
    // For now, we'll just increment/decrement
    const isLiked = Math.random() > 0.5; // Simulate user like state
    product.likes += isLiked ? -1 : 1;
    return !isLiked;
  }
  return false;
};