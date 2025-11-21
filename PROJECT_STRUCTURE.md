# J Performance Systems - Project Structure

## 📁 Project Organization

This document describes the clean, modular architecture of the J Performance Systems website.

### Directory Structure

```
src/
├── assets/              # Static assets
│   ├── clients/        # Client photos (.webp format)
│   ├── hero.png        # Hero section image
│   └── logo.png        # Brand logo
│
├── components/         # Reusable React components
│   ├── ui/            # shadcn/ui components (auto-generated)
│   ├── ClientsSection.tsx    # Client showcase grid
│   ├── CookieBanner.tsx      # GDPR cookie consent
│   ├── FAQ.tsx               # Frequently asked questions
│   ├── Footer.tsx            # Site footer with links
│   ├── Hero.tsx              # Landing page hero section
│   ├── Highlights.tsx        # Services highlights
│   ├── Navigation.tsx        # Site navigation bar
│   ├── PackCard.tsx          # Training plan card
│   ├── PricingCard.tsx       # Pricing display card
│   └── SectionSeparator.tsx  # Visual section divider
│
├── constants/          # Centralized configuration
│   └── plans.ts       # Training plans data & pricing logic
│
├── data/              # Static data files
│   └── clients.ts     # Client information & photos
│
├── hooks/             # Custom React hooks
│   ├── use-mobile.tsx # Mobile detection hook
│   └── use-toast.ts   # Toast notification hook
│
├── lib/               # Utility functions
│   └── utils.ts       # Helper functions (cn, etc.)
│
├── pages/             # Route pages
│   ├── Index.tsx            # Home page
│   ├── TrainingPlans.tsx    # Training plans catalog
│   ├── Checkout.tsx         # Plan selection & checkout
│   ├── Reviews.tsx          # Client testimonials
│   ├── Contact.tsx          # Contact form
│   ├── Blog.tsx             # Blog (coming soon)
│   ├── PrivacyPolicy.tsx    # Privacy policy
│   ├── LegalNotice.tsx      # Legal notice
│   ├── CookiesPolicy.tsx    # Cookies policy
│   └── NotFound.tsx         # 404 error page
│
├── App.tsx            # Main app component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles & Tailwind config
```

## 🏗️ Architecture Principles

### 1. **Modular Components**

- Each component has a single, well-defined responsibility
- Components are reusable across different pages
- No duplicate code or logic

### 2. **Centralized Configuration**

The `constants/plans.ts` file centralizes all training plan data:

- Plan definitions (features, pricing, gifts)
- Pricing calculation logic
- Period-based discounts

This ensures:

- **Single source of truth** for plan data
- **Easy maintenance** - update plans in one place
- **Type safety** with TypeScript interfaces

### 3. **Clean Imports**

- All imports are actively used
- No orphaned or unused components
- No circular dependencies

### 4. **Type Safety**

- TypeScript throughout the project
- Proper interfaces for data structures
- Type-safe component props

### 5. **Performance Optimized**

- WebP format for images (smaller file sizes)
- Lazy loading where appropriate
- Efficient re-renders with proper React patterns

## 🎨 Styling Approach

- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built, accessible components
- **Framer Motion** for animations
- **Custom CSS variables** in `index.css` for theme consistency

## 🔧 Key Files Explained

### `constants/plans.ts`

Centralized training plans configuration with:

- Plan definitions
- Pricing logic functions (`getPeriodPrice`, `getTotalPrice`)
- TypeScript interfaces for type safety

### `data/clients.ts`

Client data with:

- Client names and clubs
- Photo imports
- Previous clubs history

### `components/Navigation.tsx`

Main navigation with:

- Responsive mobile menu
- Active route highlighting
- Social media links

### `pages/TrainingPlans.tsx`

Training plans page with:

- Period selection (monthly, quarterly, semi-annual)
- Dynamic pricing based on period
- Plan comparison grid

### `pages/Checkout.tsx`

Checkout flow with:

- Plan customization
- Period and plan type selectors
- Contact form integration

## 📦 Dependencies

### Core

- React 18
- React Router v6 (HashRouter for GitHub Pages)
- TypeScript

### UI & Styling

- Tailwind CSS
- shadcn/ui components
- Framer Motion (animations)
- Lucide React (icons)

### Forms & Data

- React Hook Form
- Zod (validation)
- TanStack Query (data fetching)

## 🚀 Getting Started

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
npm run lint:fix
```

## 📝 Code Quality

- **No unused imports** - All imports are actively used
- **No unused files** - All files serve a purpose
- **Consistent formatting** - ESLint + Prettier
- **Type safety** - Full TypeScript coverage

## 🔄 Recent Cleanup

The following items were removed during cleanup:

- ❌ `App.css` - Not used
- ❌ `Packs.tsx` - Not in routing table
- ❌ `TestimonialCard.tsx` - Not imported anywhere
- ❌ `ClientsCarousel.tsx` - Not used
- ❌ `BlogCard.tsx` - Blog section not yet implemented
- ❌ `NavLink.tsx` - Unused wrapper component
- ❌ Various unused imports across files

## 🎯 Best Practices

1. **Component Creation**: Place new components in `components/` directory
2. **Data Management**: Add new data files to `data/` or `constants/`
3. **Routing**: Add new pages to `pages/` and update `App.tsx`
4. **Styling**: Use Tailwind utilities, avoid custom CSS when possible
5. **Types**: Define interfaces in the same file or in a shared types file

## 📖 Additional Documentation

- [Component Architecture](./COMPONENT_ARCHITECTURE.md)
- [Email Setup](./EMAIL_SETUP.md)

---

Last updated: November 2025
