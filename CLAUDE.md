# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Technology Stack

- **Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.19
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: GSAP 3.14.2 with @gsap/react
- **Routing**: React Router DOM 7.13.1
- **Forms**: React Hook Form 7.70.0 with Zod validation
- **Icons**: Lucide React

## Project Architecture

### Directory Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Route components (Home, About, Services, Quote, Contact, etc.)
├── data/               # Static data and content
│   └── services.ts     # Service definitions and data
├── types/              # TypeScript type definitions
│   └── index.ts        # Centralized types
├── hooks/              # Custom React hooks
│   └── use-mobile.ts   # Mobile detection hook
├── lib/                # Utility functions
│   └── utils.ts        # Common utilities
├── App.tsx             # Main app component with routing
└── main.tsx            # Application entry point
```

### Key Architectural Patterns

- **Component-based**: UI built with reusable React components
- **Route-based pages**: Each major section is a separate page component
- **Centralized data**: Services data stored in `/src/data/services.ts`
- **Type safety**: Comprehensive TypeScript types in `/src/types/index.ts`
- **shadcn/ui integration**: UI components configured with "new-york" style
- **Intersection Observer**: Custom fade-in animations handled in App.tsx
- **Path aliases**: `@/` mapped to `src/` for clean imports

### Business Domain
This is a website for Kings Group, a building materials supplier in Ghana specializing in:
- Plywood and marine boards
- Melamine boards and panels
- Furniture accessories and hardware
- Quartz countertops
- Board cutting and edging services

### Key Components
- **Services system**: Dynamic service pages with detailed specifications
- **Navigation**: Multi-level navigation with service categories
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Animation system**: GSAP-powered animations with intersection observer
- **Chatbot**: Interactive assistant with predefined Q&A that redirects to WhatsApp

### Development Notes
- Uses Vite with React plugin and inspect plugin for debugging
- shadcn/ui configured with slate base color and CSS variables
- Custom CSS animations defined in App.css for fade-in effects
- Service data is strongly typed with comprehensive interfaces
- Path-based routing with service detail pages using URL parameters