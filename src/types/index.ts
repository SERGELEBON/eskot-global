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
