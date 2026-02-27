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
This is a website for ESKOT GLOBAL, a building materials supplier in Ghana specializing in:
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

## Brand Colors

The project uses ESKOT GLOBAL's brand color scheme:
- **Primary Blue (Bleu Nuit)**: `#08085E` or `#000066` - Main brand color
- **Hover/Dark Blue**: `#000066` - Darker variant for hover states
- **Accent Cyan**: `#00AEEF` or `#29ABE2` - For highlights and accents
- **Previous Orange**: `#B8860B` - Used for text visibility and professionalism

## Key Technical Concepts

### Animation System
The site uses a custom IntersectionObserver-based animation system in App.tsx:
- Elements with `.fade-in` class animate when scrolling into view
- Animation observer re-initializes on route changes using `useLocation` hook
- App is split into `App` (router wrapper) and `AppContent` (main content) to enable route detection

### Form Architecture
- Multi-step forms using React Hook Form with Zod validation
- Quote system with file upload and WhatsApp integration
- Comprehensive error handling and field validation

### Service Data Architecture
- Single source of truth in `/src/data/services.ts`
- Lightweight `NavService` type for navigation
- Full `Service` interface for detailed pages
- Dynamic routing with service detail pages using URL parameters

### Chatbot System
- Conversational flow with service-specific Q&A
- WhatsApp integration for transaction completion
- Predefined conversation paths and automatic redirects

## Common Maintenance Tasks

### Updating Service Information
- Edit `/src/data/services.ts` for service content
- Update service images in `/public/images/`
- Modify navigation in `NavService` array if adding/removing services

### Color Scheme Updates
- Primary colors defined globally in components
- Search for hex codes (`#08085E`, `#00AEEF`, etc.) to update consistently
- Test hover states and accessibility when changing colors

### Animation Debugging
- Check IntersectionObserver setup in App.tsx if animations don't trigger
- Ensure `.fade-in` class is applied to elements that should animate
- Verify route change detection is working with useLocation dependency

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.