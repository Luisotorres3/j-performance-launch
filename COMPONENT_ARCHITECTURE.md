# Component Architecture Diagram | Diagrama de Arquitectura de Componentes

[English](#english) | [Español](#español)

---

## Español

### 📐 Jerarquía de Componentes

Este documento describe la estructura completa de componentes de la aplicación J Performance System, mostrando cómo los componentes se relacionan y renderizan entre sí.

### 🎯 Estructura General de la Aplicación

```
main.tsx (Entry Point)
    └── App.tsx (Root Component)
        ├── QueryClientProvider (TanStack Query)
        ├── TooltipProvider (Radix UI)
        ├── Toaster (Toast Notifications)
        ├── Sonner (Toast Notifications Alternative)
        └── HashRouter (React Router)
            └── Routes
                ├── Route "/" → Index (Homepage)
                ├── Route "/planes" → TrainingPlans
                ├── Route "/packs" → Packs
                ├── Route "/blog" → Blog
                ├── Route "/reviews" → Reviews
                ├── Route "/contacto" → Contact
                └── Route "*" → NotFound (404)
```

---

### 📄 Páginas y sus Componentes

#### **1. Index Page** (`/`)
La página principal que presenta el negocio y sus servicios.

```
Index.tsx
├── Navigation
│   ├── Link (React Router)
│   ├── Button (shadcn/ui)
│   └── Menu/X Icons (Lucide React)
├── Hero
│   └── Motion Components (Framer Motion)
├── Highlights
│   ├── Dumbbell Icon (Lucide)
│   ├── Apple Icon (Lucide)
│   └── Target Icon (Lucide)
├── Clients Grid Section
│   └── Motion.div (Framer Motion) [×10 clients]
│       └── Button → Link to /reviews
├── Plans Section
│   └── Inline PricingCard-like components [×5 plans]
│       ├── Motion.div (Framer Motion)
│       └── Button → Link to /planes
├── CTA Section
│   └── Button [×2]
│       ├── Link to /planes
│       └── Link to /contacto
├── Footer
│   ├── Link (React Router) [×3]
│   ├── SectionSeparator
│   └── Social Icons (Lucide)
│       ├── Instagram
│       ├── Facebook
│       ├── Mail
│       └── Phone
└── Scroll to Top Button
    └── ChevronUp Icon (Lucide)
```

#### **2. TrainingPlans Page** (`/planes`)
Página de planes de entrenamiento con precios detallados.

```
TrainingPlans.tsx
├── Navigation
├── Hero Section with Motion (Framer Motion)
├── Plans Grid
│   └── PricingCard [×5 cards]
│       ├── Motion.div (Framer Motion)
│       ├── Badge (shadcn/ui) [if popular]
│       └── Button (shadcn/ui)
├── Packs Section
│   └── PackCard [×4 cards]
│       ├── Motion.div (Framer Motion)
│       ├── CheckCircle Icon (Lucide)
│       └── Button (shadcn/ui)
├── CTA Section
│   └── Button → Link to /contacto
├── Footer
└── Scroll to Top Button
```

#### **3. Packs Page** (`/packs`)
Página de paquetes de entrenamiento especiales.

```
Packs.tsx
├── Navigation
├── Hero Section
├── Packs Grid
│   └── PackCard [×8 cards]
│       ├── Motion.div (Framer Motion)
│       ├── CheckCircle Icon (Lucide)
│       └── Button (shadcn/ui)
├── CTA Section
│   └── Button → Link to /contacto
├── Footer
└── Scroll to Top Button
```

#### **4. Blog Page** (`/blog`)
Página de artículos y contenido educativo.

```
Blog.tsx
├── Navigation
├── Hero Section
├── Blog Grid
│   └── BlogCard [×6 articles]
│       ├── Motion.div (Framer Motion)
│       ├── Card (shadcn/ui)
│       ├── Badge (shadcn/ui)
│       ├── Calendar Icon (Lucide)
│       ├── Clock Icon (Lucide)
│       └── Button (shadcn/ui)
├── Footer
└── Scroll to Top Button
```

#### **5. Reviews Page** (`/reviews`)
Página de testimonios y clientes.

```
Reviews.tsx
├── Navigation
├── Hero Section
├── ClientsCarousel
│   └── Carousel (Embla Carousel)
│       └── Client Cards [×20 clients]
│           └── Motion.div (Framer Motion)
├── Testimonials Section
│   └── TestimonialCard [×6 testimonials]
│       ├── Motion.div (Framer Motion)
│       ├── Card (shadcn/ui)
│       ├── Avatar (shadcn/ui)
│       └── Star Icons (Lucide) [×5]
├── Footer
└── Scroll to Top Button
```

#### **6. Contact Page** (`/contacto`)
Página de formulario de contacto.

```
Contact.tsx
├── Navigation
├── Hero Section
├── Contact Form Section
│   ├── Form (React Hook Form + shadcn/ui)
│   │   ├── Input (shadcn/ui) [×3]
│   │   │   ├── User Icon (Lucide)
│   │   │   ├── Mail Icon (Lucide)
│   │   │   └── Phone Icon (Lucide)
│   │   ├── Textarea (shadcn/ui)
│   │   │   └── MessageSquare Icon (Lucide)
│   │   └── Button (shadcn/ui)
│   │       └── Send Icon (Lucide)
│   └── Toast (Sonner) [on submit]
├── Contact Info Section
│   ├── Mail Icon (Lucide)
│   ├── Phone Icon (Lucide)
│   └── MapPin Icon (Lucide)
├── Social Links
│   ├── Instagram Icon (Lucide)
│   └── Facebook Icon (Lucide)
├── Footer
└── Scroll to Top Button
```

#### **7. NotFound Page** (`*`)
Página 404 para rutas no encontradas.

```
NotFound.tsx
├── Navigation
├── 404 Content
│   ├── AlertCircle Icon (Lucide)
│   └── Button → Link to /
└── Footer
```

---

### 🧩 Componentes Reutilizables

#### **Navigation** (`components/Navigation.tsx`)
Barra de navegación presente en todas las páginas.
- **Renderiza**: Logo, Links de navegación, Menú móvil, Button CTA
- **Estado**: isOpen (para menú móvil)
- **Dependencias**: react-router-dom, lucide-react, shadcn/ui button

#### **Hero** (`components/Hero.tsx`)
Sección hero con información del entrenador.
- **Renderiza**: Imagen del entrenador, Información personal, Certificaciones, Logros
- **Dependencias**: framer-motion, assets

#### **Footer** (`components/Footer.tsx`)
Pie de página con enlaces y contacto.
- **Renderiza**: SectionSeparator, Links de navegación, Información de contacto, Iconos sociales
- **Dependencias**: react-router-dom, lucide-react

#### **Highlights** (`components/Highlights.tsx`)
Sección de características destacadas (3 columnas).
- **Renderiza**: Tarjetas de características con iconos
- **Dependencias**: lucide-react (Dumbbell, Apple, Target)

#### **PricingCard** (`components/PricingCard.tsx`)
Tarjeta de plan de precios.
- **Props**: title, price, originalPrice, savings, gift, popular, features[]
- **Renderiza**: Badge (popular), Lista de características, Button
- **Dependencias**: framer-motion, shadcn/ui

#### **PackCard** (`components/PackCard.tsx`)
Tarjeta de pack de entrenamiento.
- **Props**: title, description, price, originalPrice, savings, features[], image
- **Renderiza**: Card con imagen, Lista de características, Button
- **Dependencias**: framer-motion, shadcn/ui, lucide-react

#### **BlogCard** (`components/BlogCard.tsx`)
Tarjeta de artículo de blog.
- **Props**: title, excerpt, date, readTime, category, image
- **Renderiza**: Card, Badge (categoría), Calendar y Clock icons, Button
- **Dependencias**: framer-motion, shadcn/ui, lucide-react

#### **TestimonialCard** (`components/TestimonialCard.tsx`)
Tarjeta de testimonio de cliente.
- **Props**: name, role, content, rating, image
- **Renderiza**: Card, Avatar, Star icons (rating)
- **Dependencias**: framer-motion, shadcn/ui, lucide-react

#### **ClientsCarousel** (`components/ClientsCarousel.tsx`)
Carrusel de clientes con auto-scroll.
- **Props**: clients[] (from data)
- **Renderiza**: Embla Carousel con tarjetas de clientes
- **Dependencias**: embla-carousel-react, framer-motion

#### **SectionSeparator** (`components/SectionSeparator.tsx`)
Separador visual entre secciones.
- **Renderiza**: Elemento decorativo (línea o espaciado)

---

### 🎨 Componentes UI de shadcn/ui

La aplicación utiliza más de 50 componentes de la biblioteca shadcn/ui basada en Radix UI:

**Componentes de Formulario:**
- Input, Textarea, Button, Checkbox, Radio Group, Select, Switch, Slider, Label, Form

**Componentes de Layout:**
- Card, Separator, Tabs, Accordion, Collapsible, Resizable Panels, Scroll Area

**Componentes de Navegación:**
- Navigation Menu, Menubar, Dropdown Menu, Context Menu, Breadcrumb

**Componentes de Feedback:**
- Toast, Toaster, Sonner, Alert, Alert Dialog, Dialog, Drawer, Progress, Skeleton

**Componentes de Display:**
- Avatar, Badge, Tooltip, Hover Card, Popover, Aspect Ratio, Carousel, Chart, Table

**Otros:**
- Command, Calendar, Date Picker, Pagination, Sidebar, Toggle, Toggle Group

---

### 🔄 Flujo de Datos

```
User Interaction
    ↓
React Component (Page/Component)
    ↓
├─→ React Router (Navigation)
├─→ React Hook Form (Form Handling)
├─→ TanStack Query (Async State - si aplica)
├─→ Zod (Validation)
└─→ Local State (useState/useEffect)
    ↓
Component Re-render
    ↓
User Feedback (Toast, Navigation, UI Update)
```

---

### 📦 Dependencias de Datos

```
src/data/clients.ts
    ├─→ Index.tsx (Clients Grid)
    ├─→ Reviews.tsx (ClientsCarousel + Testimonials)
    └─→ ClientsCarousel.tsx (Carousel Data)
```

---

### 🎭 Patrones de Animación

La aplicación usa **Framer Motion** consistentemente:

- **`motion.div`** con `initial`, `whileInView`, `viewport`, `transition`
- **Animaciones de entrada**: `opacity: 0, y: 20/30` → `opacity: 1, y: 0`
- **Delays escalonados**: `delay: index * 0.05-0.1s` para listas
- **Hover effects**: `hover:scale-105`, `hover:shadow-xl`
- **Scroll-triggered**: `viewport={{ once: false }}` para repetir en scroll

---

## English

### 📐 Component Hierarchy

This document describes the complete component structure of the J Performance System application, showing how components relate to and render each other.

### 🎯 General Application Structure

```
main.tsx (Entry Point)
    └── App.tsx (Root Component)
        ├── QueryClientProvider (TanStack Query)
        ├── TooltipProvider (Radix UI)
        ├── Toaster (Toast Notifications)
        ├── Sonner (Toast Notifications Alternative)
        └── HashRouter (React Router)
            └── Routes
                ├── Route "/" → Index (Homepage)
                ├── Route "/planes" → TrainingPlans
                ├── Route "/packs" → Packs
                ├── Route "/blog" → Blog
                ├── Route "/reviews" → Reviews
                ├── Route "/contacto" → Contact
                └── Route "*" → NotFound (404)
```

---

### 📄 Pages and Their Components

#### **1. Index Page** (`/`)
The main page that presents the business and its services.

```
Index.tsx
├── Navigation
│   ├── Link (React Router)
│   ├── Button (shadcn/ui)
│   └── Menu/X Icons (Lucide React)
├── Hero
│   └── Motion Components (Framer Motion)
├── Highlights
│   ├── Dumbbell Icon (Lucide)
│   ├── Apple Icon (Lucide)
│   └── Target Icon (Lucide)
├── Clients Grid Section
│   └── Motion.div (Framer Motion) [×10 clients]
│       └── Button → Link to /reviews
├── Plans Section
│   └── Inline PricingCard-like components [×5 plans]
│       ├── Motion.div (Framer Motion)
│       └── Button → Link to /planes
├── CTA Section
│   └── Button [×2]
│       ├── Link to /planes
│       └── Link to /contacto
├── Footer
│   ├── Link (React Router) [×3]
│   ├── SectionSeparator
│   └── Social Icons (Lucide)
│       ├── Instagram
│       ├── Facebook
│       ├── Mail
│       └── Phone
└── Scroll to Top Button
    └── ChevronUp Icon (Lucide)
```

#### **2. TrainingPlans Page** (`/planes`)
Training plans page with detailed pricing.

```
TrainingPlans.tsx
├── Navigation
├── Hero Section with Motion (Framer Motion)
├── Plans Grid
│   └── PricingCard [×5 cards]
│       ├── Motion.div (Framer Motion)
│       ├── Badge (shadcn/ui) [if popular]
│       └── Button (shadcn/ui)
├── Packs Section
│   └── PackCard [×4 cards]
│       ├── Motion.div (Framer Motion)
│       ├── CheckCircle Icon (Lucide)
│       └── Button (shadcn/ui)
├── CTA Section
│   └── Button → Link to /contacto
├── Footer
└── Scroll to Top Button
```

#### **3. Packs Page** (`/packs`)
Special training packages page.

```
Packs.tsx
├── Navigation
├── Hero Section
├── Packs Grid
│   └── PackCard [×8 cards]
│       ├── Motion.div (Framer Motion)
│       ├── CheckCircle Icon (Lucide)
│       └── Button (shadcn/ui)
├── CTA Section
│   └── Button → Link to /contacto
├── Footer
└── Scroll to Top Button
```

#### **4. Blog Page** (`/blog`)
Educational articles and content page.

```
Blog.tsx
├── Navigation
├── Hero Section
├── Blog Grid
│   └── BlogCard [×6 articles]
│       ├── Motion.div (Framer Motion)
│       ├── Card (shadcn/ui)
│       ├── Badge (shadcn/ui)
│       ├── Calendar Icon (Lucide)
│       ├── Clock Icon (Lucide)
│       └── Button (shadcn/ui)
├── Footer
└── Scroll to Top Button
```

#### **5. Reviews Page** (`/reviews`)
Testimonials and clients page.

```
Reviews.tsx
├── Navigation
├── Hero Section
├── ClientsCarousel
│   └── Carousel (Embla Carousel)
│       └── Client Cards [×20 clients]
│           └── Motion.div (Framer Motion)
├── Testimonials Section
│   └── TestimonialCard [×6 testimonials]
│       ├── Motion.div (Framer Motion)
│       ├── Card (shadcn/ui)
│       ├── Avatar (shadcn/ui)
│       └── Star Icons (Lucide) [×5]
├── Footer
└── Scroll to Top Button
```

#### **6. Contact Page** (`/contacto`)
Contact form page.

```
Contact.tsx
├── Navigation
├── Hero Section
├── Contact Form Section
│   ├── Form (React Hook Form + shadcn/ui)
│   │   ├── Input (shadcn/ui) [×3]
│   │   │   ├── User Icon (Lucide)
│   │   │   ├── Mail Icon (Lucide)
│   │   │   └── Phone Icon (Lucide)
│   │   ├── Textarea (shadcn/ui)
│   │   │   └── MessageSquare Icon (Lucide)
│   │   └── Button (shadcn/ui)
│   │       └── Send Icon (Lucide)
│   └── Toast (Sonner) [on submit]
├── Contact Info Section
│   ├── Mail Icon (Lucide)
│   ├── Phone Icon (Lucide)
│   └── MapPin Icon (Lucide)
├── Social Links
│   ├── Instagram Icon (Lucide)
│   └── Facebook Icon (Lucide)
├── Footer
└── Scroll to Top Button
```

#### **7. NotFound Page** (`*`)
404 page for not found routes.

```
NotFound.tsx
├── Navigation
├── 404 Content
│   ├── AlertCircle Icon (Lucide)
│   └── Button → Link to /
└── Footer
```

---

### 🧩 Reusable Components

#### **Navigation** (`components/Navigation.tsx`)
Navigation bar present on all pages.
- **Renders**: Logo, Navigation links, Mobile menu, CTA Button
- **State**: isOpen (for mobile menu)
- **Dependencies**: react-router-dom, lucide-react, shadcn/ui button

#### **Hero** (`components/Hero.tsx`)
Hero section with trainer information.
- **Renders**: Trainer image, Personal info, Certifications, Achievements
- **Dependencies**: framer-motion, assets

#### **Footer** (`components/Footer.tsx`)
Footer with links and contact info.
- **Renders**: SectionSeparator, Navigation links, Contact info, Social icons
- **Dependencies**: react-router-dom, lucide-react

#### **Highlights** (`components/Highlights.tsx`)
Featured highlights section (3 columns).
- **Renders**: Feature cards with icons
- **Dependencies**: lucide-react (Dumbbell, Apple, Target)

#### **PricingCard** (`components/PricingCard.tsx`)
Pricing plan card.
- **Props**: title, price, originalPrice, savings, gift, popular, features[]
- **Renders**: Badge (popular), Features list, Button
- **Dependencies**: framer-motion, shadcn/ui

#### **PackCard** (`components/PackCard.tsx`)
Training pack card.
- **Props**: title, description, price, originalPrice, savings, features[], image
- **Renders**: Card with image, Features list, Button
- **Dependencies**: framer-motion, shadcn/ui, lucide-react

#### **BlogCard** (`components/BlogCard.tsx`)
Blog article card.
- **Props**: title, excerpt, date, readTime, category, image
- **Renders**: Card, Badge (category), Calendar and Clock icons, Button
- **Dependencies**: framer-motion, shadcn/ui, lucide-react

#### **TestimonialCard** (`components/TestimonialCard.tsx`)
Client testimonial card.
- **Props**: name, role, content, rating, image
- **Renders**: Card, Avatar, Star icons (rating)
- **Dependencies**: framer-motion, shadcn/ui, lucide-react

#### **ClientsCarousel** (`components/ClientsCarousel.tsx`)
Clients carousel with auto-scroll.
- **Props**: clients[] (from data)
- **Renders**: Embla Carousel with client cards
- **Dependencies**: embla-carousel-react, framer-motion

#### **SectionSeparator** (`components/SectionSeparator.tsx`)
Visual separator between sections.
- **Renders**: Decorative element (line or spacing)

---

### 🎨 shadcn/ui UI Components

The application uses over 50 components from the shadcn/ui library based on Radix UI:

**Form Components:**
- Input, Textarea, Button, Checkbox, Radio Group, Select, Switch, Slider, Label, Form

**Layout Components:**
- Card, Separator, Tabs, Accordion, Collapsible, Resizable Panels, Scroll Area

**Navigation Components:**
- Navigation Menu, Menubar, Dropdown Menu, Context Menu, Breadcrumb

**Feedback Components:**
- Toast, Toaster, Sonner, Alert, Alert Dialog, Dialog, Drawer, Progress, Skeleton

**Display Components:**
- Avatar, Badge, Tooltip, Hover Card, Popover, Aspect Ratio, Carousel, Chart, Table

**Other:**
- Command, Calendar, Date Picker, Pagination, Sidebar, Toggle, Toggle Group

---

### 🔄 Data Flow

```
User Interaction
    ↓
React Component (Page/Component)
    ↓
├─→ React Router (Navigation)
├─→ React Hook Form (Form Handling)
├─→ TanStack Query (Async State - if applicable)
├─→ Zod (Validation)
└─→ Local State (useState/useEffect)
    ↓
Component Re-render
    ↓
User Feedback (Toast, Navigation, UI Update)
```

---

### 📦 Data Dependencies

```
src/data/clients.ts
    ├─→ Index.tsx (Clients Grid)
    ├─→ Reviews.tsx (ClientsCarousel + Testimonials)
    └─→ ClientsCarousel.tsx (Carousel Data)
```

---

### 🎭 Animation Patterns

The application consistently uses **Framer Motion**:

- **`motion.div`** with `initial`, `whileInView`, `viewport`, `transition`
- **Entry animations**: `opacity: 0, y: 20/30` → `opacity: 1, y: 0`
- **Staggered delays**: `delay: index * 0.05-0.1s` for lists
- **Hover effects**: `hover:scale-105`, `hover:shadow-xl`
- **Scroll-triggered**: `viewport={{ once: false }}` to repeat on scroll
