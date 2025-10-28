# HealthMart E-commerce Platform

## Overview

HealthMart is a modern e-commerce web application for health and wellness products, including supplements, vitamins, sports nutrition, and personal care items. Built as a single-page application (SPA) using React and TypeScript, it features a responsive design, shopping cart functionality, and is deployed to GitHub Pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool for fast development and optimized production builds
- Single-page application (SPA) architecture with client-side routing

**UI Components & Styling**
- shadcn/ui component library built on Radix UI primitives for accessible, high-quality UI components
- Tailwind CSS utility-first framework for styling with custom design tokens defined in CSS variables
- Design system implemented through HSL color values and CSS custom properties for theming
- Responsive design with mobile-first approach

**Routing**
- React Router for client-side navigation
- Special handling for GitHub Pages deployment using 404.html redirect pattern to support SPA routing on static hosting
- Fallback NotFound page for unmatched routes

**State Management**
- React Context API (CartContext) for global shopping cart state
- Local storage persistence for cart data
- TanStack Query for data fetching and server state management (configured but not actively used with backend)

**Key Features**
- Product catalog with filtering and categorization
- Shopping cart with add/remove/update quantity operations
- Product detail pages with tabs for descriptions, benefits, and usage
- Category browsing system
- Toast notifications for user feedback

### Data Layer

**Product Data**
- Static product data stored in TypeScript files (`src/data/products.ts`)
- Product interface defines: id, name, price, ratings, images, category, descriptions, benefits, ingredients, and usage instructions
- Helper functions for filtering products by category and retrieving featured/trending items
- No external database - all data is bundled with the application

### Deployment Architecture

**GitHub Pages Configuration**
- Base path set to "/" for root directory deployment
- Automated deployment via GitHub Actions workflow
- Manual deployment option using gh-pages package
- 404.html file implements SPA redirect pattern to handle client-side routes
- Special script in index.html to restore proper URL after redirect

**Build Configuration**
- Production builds output to `dist/` directory
- Assets organized in `assets/` subdirectory
- Source maps disabled for production
- Manual chunking disabled for simpler deployment

### Code Organization

**Directory Structure**
- `/src/components` - Reusable React components
- `/src/components/ui` - shadcn/ui component library
- `/src/pages` - Route-level page components
- `/src/contexts` - React Context providers
- `/src/data` - Static data files
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility functions
- `/public` - Static assets (404.html, robots.txt, ads.txt)

**TypeScript Configuration**
- Strict mode disabled for faster development
- Path aliases configured (@/ points to src/)
- Bundler module resolution for Vite compatibility

## External Dependencies

### UI & Component Libraries
- **@radix-ui/*** - Headless UI primitives for accessible components (accordion, dialog, dropdown, select, tabs, etc.)
- **shadcn/ui** - Pre-built component collection based on Radix UI
- **lucide-react** - Icon library
- **class-variance-authority** - Utility for managing component variants
- **tailwindcss** - Utility-first CSS framework
- **embla-carousel-react** - Carousel/slider functionality

### Routing & State Management
- **react-router-dom** - Client-side routing
- **@tanstack/react-query** - Data fetching and server state management

### Forms & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **zod** - Schema validation (implied by resolver usage)

### UI Enhancements
- **next-themes** - Theme switching capability
- **date-fns** - Date manipulation utilities
- **react-day-picker** - Calendar/date picker component
- **cmdk** - Command palette component
- **input-otp** - OTP input component
- **vaul** - Drawer component library

### Advertising
- **Google AdSense** - Integrated via script tags in index.html (ca-pub-9165666131480355)

### Deployment
- **gh-pages** - GitHub Pages deployment utility
- **GitHub Actions** - Automated CI/CD workflow for deployment

### Development Tools
- **Vite** - Build tool and dev server (configured to run on port 5000, host 0.0.0.0)
- **TypeScript** - Type checking and development
- **ESLint** - Code linting with TypeScript support
- **PostCSS** - CSS processing with Tailwind and Autoprefixer
- **lovable-tagger** - Development-only component tagging plugin

### Note on Database
The application currently does not use any database system. All product data is statically defined in TypeScript files. If a database is needed in the future, the architecture supports adding one through TanStack Query for data fetching, though Drizzle ORM is mentioned in configuration files but not implemented.