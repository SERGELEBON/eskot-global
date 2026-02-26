import type { Service, NavService } from '../types';

// Navigation services (lightweight version for nav)
export const navServices: NavService[] = [
  { id: 'plywood', name: 'Plywood' },
  { id: 'marine-boards', name: 'Marine Boards' },
  { id: 'melamine-boards', name: 'Melamine Boards' },
  { id: 'furniture-accessories', name: 'Furniture Accessories' },
  { id: 'quartz-tops', name: 'Quartz Tops' },
  { id: 'cutting-edging', name: 'Cutting & Edging' },
  { id: 'panels', name: 'Panels' },
];

// Full services data (single source of truth)
export const servicesData: Record<string, Service> = {
  plywood: {
    id: 'plywood',
    name: 'Plywood',
    shortDesc: 'High-quality plywood for all applications',
    description: 'High-quality plywood for construction and furniture making',
    fullDescription: `Our plywood is sourced from trusted manufacturers and meets international quality standards. 
We offer a wide range of plywood types including softwood, hardwood, and tropical plywood suitable 
for various applications. Whether you need plywood for construction, furniture, or decorative purposes, 
we have the right product for you.`,
    features: [
      'Various thicknesses from 3mm to 25mm',
      'Different grades: A, B, C, D and combinations',
      'Marine-grade plywood available',
      'Tropical hardwood options',
      'Bulk quantities at competitive prices',
      'Custom cutting services available',
    ],
    applications: [
      'Construction and building',
      'Furniture manufacturing',
      'Interior design',
      'Packaging',
      'DIY projects',
    ],
    specifications: [
      { label: 'Thickness Range', value: '3mm - 25mm' },
      { label: 'Standard Sizes', value: '4x8 feet, 3x7 feet' },
      { label: 'Grades Available', value: 'A, B, C, D, BB/CC' },
      { label: 'Glue Types', value: 'MR, WBP, Melamine' },
    ],
    image: '/images/hero_left_panel.jpg',
    gallery: [
      '/images/materials_left.jpg',
      '/images/scale_bottom_right.jpg',
      '/images/partner_bottom_left.jpg',
    ],
  },
  'marine-boards': {
    id: 'marine-boards',
    name: 'Marine Boards',
    shortDesc: 'Water-resistant boards for marine applications',
    description: 'Water-resistant boards for marine and outdoor applications',
    fullDescription: `Our marine boards are specially manufactured to withstand moisture and harsh weather conditions. 
Treated with advanced water-resistant chemicals, these boards are perfect for marine applications, 
outdoor furniture, and any project that requires durability in wet conditions.`,
    features: [
      'Advanced water-resistant treatment',
      'Resistant to rot and decay',
      'High structural strength',
      'Suitable for saltwater environments',
      'Long-lasting durability',
      'Available in various thicknesses',
    ],
    applications: [
      'Boat building and repair',
      'Dock and pier construction',
      'Outdoor furniture',
      'Bathroom and kitchen cabinets',
      'Swimming pool surrounds',
    ],
    specifications: [
      { label: 'Water Resistance', value: 'WBP Grade' },
      { label: 'Thickness Range', value: '9mm - 25mm' },
      { label: 'Treatment', value: 'Pressure treated' },
      { label: 'Warranty', value: '10 years' },
    ],
    image: '/images/capability_top_left.jpg',
    gallery: [
      '/images/precision_left.jpg',
      '/images/craft_left.jpg',
      '/images/hero_left_panel.jpg',
    ],
  },
  'melamine-boards': {
    id: 'melamine-boards',
    name: 'Melamine Boards',
    shortDesc: 'Pre-finished boards in various colors',
    description: 'Pre-finished decorative boards in various colors and textures',
    fullDescription: `Melamine boards offer a perfect combination of aesthetics and functionality. 
The pre-finished surface is durable, scratch-resistant, and easy to clean. Available in a wide 
range of colors, wood grain patterns, and textures to match any interior design style.`,
    features: [
      'Wide range of colors and finishes',
      'Scratch and stain resistant',
      'Easy to clean and maintain',
      'No additional finishing required',
      'Consistent color and texture',
      'Cost-effective solution',
    ],
    applications: [
      'Kitchen cabinets',
      'Wardrobes and closets',
      'Office furniture',
      'Shelving units',
      'Wall paneling',
    ],
    specifications: [
      { label: 'Thickness Range', value: '16mm - 25mm' },
      { label: 'Core Material', value: 'Particle board, MDF' },
      { label: 'Surface Finish', value: 'Matte, Gloss, Textured' },
      { label: 'Colors Available', value: '50+ options' },
    ],
    image: '/images/capability_bottom_right.jpg',
    gallery: [
      '/images/materials_right_top.jpg',
      '/images/craft_right_bottom.jpg',
      '/images/precision_right_bottom.jpg',
    ],
  },
  'furniture-accessories': {
    id: 'furniture-accessories',
    name: 'Furniture Accessories',
    shortDesc: 'Hardware, handles, hinges, and more',
    description: 'Complete range of hardware and fittings for furniture',
    fullDescription: `We stock a comprehensive selection of furniture accessories to complete any project. 
From decorative handles and knobs to functional hinges and drawer slides, we have everything 
you need to build professional-quality furniture. Our products are sourced from reputable 
manufacturers and built to last.`,
    features: [
      'Wide selection of handles and knobs',
      'Soft-close hinges and slides',
      'Drawer systems and organizers',
      'Shelf supports and brackets',
      'Furniture legs and casters',
      'Connection fittings',
    ],
    applications: [
      'Kitchen cabinets',
      'Bedroom furniture',
      'Office furniture',
      'Built-in wardrobes',
      'Custom furniture projects',
    ],
    specifications: [
      { label: 'Handle Materials', value: 'Zinc, Aluminum, Stainless' },
      { label: 'Finishes', value: 'Chrome, Brass, Matte Black' },
      { label: 'Hinge Types', value: 'Concealed, Overlay, Inset' },
      { label: 'Load Capacity', value: 'Up to 50kg per slide' },
    ],
    image: '/images/craft_right_bottom.jpg',
    gallery: [
      '/images/precision_right_bottom.jpg',
      '/images/craft_left.jpg',
      '/images/hero_right_top_panel.jpg',
    ],
  },
  'quartz-tops': {
    id: 'quartz-tops',
    name: 'Quartz Tops',
    shortDesc: 'Elegant countertops for kitchens and bathrooms',
    description: 'Premium quartz countertops for kitchens and bathrooms',
    fullDescription: `Our quartz countertops combine beauty with exceptional durability. 
Made from engineered stone, they offer the elegance of natural stone with superior 
performance characteristics. Non-porous, stain-resistant, and available in a stunning 
array of colors and patterns.`,
    features: [
      'Non-porous and hygienic',
      'Stain and scratch resistant',
      'Heat resistant',
      'Easy maintenance',
      'Wide color selection',
      'Professional installation available',
    ],
    applications: [
      'Kitchen countertops',
      'Bathroom vanities',
      'Reception desks',
      'Table tops',
      'Window sills',
    ],
    specifications: [
      { label: 'Thickness', value: '20mm, 30mm' },
      { label: 'Slab Size', value: '3200 x 1600mm' },
      { label: 'Composition', value: '93% Quartz, 7% Resin' },
      { label: 'Warranty', value: '15 years' },
    ],
    image: '/images/materials_right_top.jpg',
    gallery: [
      '/images/scale_top_left.jpg',
      '/images/partner_top_right.jpg',
      '/images/materials_left.jpg',
    ],
  },
  'cutting-edging': {
    id: 'cutting-edging',
    name: 'Cutting & Edging',
    shortDesc: 'Professional board processing services',
    description: 'Professional board processing and edge banding',
    fullDescription: `Our state-of-the-art cutting and edging facility provides precision processing 
for all types of boards. Using advanced CNC machinery, we deliver accurate cuts and perfect 
edge finishing. Our edge banding service gives your boards a professional, factory-finished look.`,
    features: [
      'Precision CNC cutting',
      'Edge banding in various colors',
      'Custom sizing available',
      'Fast turnaround time',
      'Bulk processing discounts',
      'Professional finish quality',
    ],
    applications: [
      'Custom furniture parts',
      'Cabinet components',
      'Shelving units',
      'Wall paneling',
      'Commercial fit-outs',
    ],
    specifications: [
      { label: 'Cutting Accuracy', value: '±0.2mm' },
      { label: 'Max Panel Size', value: '3660 x 1830mm' },
      { label: 'Edge Band Width', value: '0.4mm - 3mm' },
      { label: 'Turnaround', value: '24-48 hours' },
    ],
    image: '/images/precision_left.jpg',
    gallery: [
      '/images/capability_top_left.jpg',
      '/images/craft_left.jpg',
      '/images/hero_left_panel.jpg',
    ],
  },
  panels: {
    id: 'panels',
    name: 'Panels',
    shortDesc: 'MDF, particle board, and specialty panels',
    description: 'MDF, particle board, and specialty panels',
    fullDescription: `We supply a comprehensive range of panel products including MDF, particle board, 
and specialty panels. Our panels are sourced from quality manufacturers and are suitable 
for furniture making, construction, and interior applications. Available in various 
thicknesses and sizes to meet your project needs.`,
    features: [
      'MDF panels in various densities',
      'Standard and moisture-resistant particle board',
      'Specialty panels available',
      'Custom sizing service',
      'Bulk pricing options',
      'Fast delivery',
    ],
    applications: [
      'Furniture manufacturing',
      'Cabinet making',
      'Interior fit-outs',
      'Display units',
      'Shelving systems',
    ],
    specifications: [
      { label: 'MDF Thickness', value: '3mm - 38mm' },
      { label: 'Particle Board', value: '16mm - 38mm' },
      { label: 'Standard Size', value: '3660 x 1830mm' },
      { label: 'Density Options', value: 'Standard, High' },
    ],
    image: '/images/materials_left.jpg',
    gallery: [
      '/images/scale_bottom_right.jpg',
      '/images/partner_bottom_left.jpg',
      '/images/materials_left.jpg',
    ],
  },
};

// Helper function to get all services as array
export const getAllServices = (): Service[] => Object.values(servicesData);

// Helper function to get service by ID
export const getServiceById = (id: string): Service | undefined => servicesData[id];

// Helper function to get other services (excluding current)
export const getOtherServices = (excludeId: string, limit: number = 4): Service[] =>
  Object.values(servicesData)
    .filter((service) => service.id !== excludeId)
    .slice(0, limit);
