# J Performance System | Sistema de Entrenamiento Personalizado

[English](#english) | [Español](#español)

---

## Español

### 📋 Descripción del Proyecto

**J Performance System** es una aplicación web moderna para un entrenador personal que ofrece programas de entrenamiento personalizados, planes nutricionales y seguimiento de rendimiento. La plataforma permite a los clientes explorar diferentes planes de entrenamiento, ver testimonios, leer artículos del blog y contactar directamente con el entrenador.

### 🚀 Stack Tecnológico

Este proyecto está construido con tecnologías web modernas para garantizar rendimiento, escalabilidad y una excelente experiencia de usuario:

#### **Core**
- **[Vite](https://vitejs.dev/)** `v5.4.19` - Build tool ultrarrápido y servidor de desarrollo
- **[React](https://react.dev/)** `v18.3.1` - Biblioteca de interfaz de usuario
- **[TypeScript](https://www.typescriptlang.org/)** `v5.8.3` - JavaScript con tipos para mayor seguridad

#### **Estilización y UI**
- **[Tailwind CSS](https://tailwindcss.com/)** `v3.4.17` - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizables basados en Radix UI
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos accesibles y sin estilos
- **[Lucide React](https://lucide.dev/)** - Iconos modernos y personalizables
- **[Framer Motion](https://www.framer.com/motion/)** `v12.23.24` - Animaciones fluidas y profesionales

#### **Routing y Estado**
- **[React Router DOM](https://reactrouter.com/)** `v6.30.1` - Enrutamiento del lado del cliente
- **[TanStack Query](https://tanstack.com/query)** `v5.83.0` - Gestión de estado asíncrono

#### **Formularios y Validación**
- **[React Hook Form](https://react-hook-form.com/)** `v7.61.1` - Gestión de formularios performante
- **[Zod](https://zod.dev/)** `v3.25.76` - Validación de esquemas TypeScript-first

#### **Herramientas de Desarrollo**
- **[ESLint](https://eslint.org/)** `v9.32.0` - Linter para código limpio
- **[PostCSS](https://postcss.org/)** - Transformaciones CSS
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** `v6.3.0` - Despliegue automatizado a GitHub Pages

### 📁 Estructura de Carpetas

```
j-performance-launch/
├── public/                      # Archivos estáticos públicos
├── src/                         # Código fuente de la aplicación
│   ├── assets/                  # Recursos multimedia (imágenes, logos)
│   │   ├── clients/            # Fotos de clientes
│   │   ├── hero.png            # Imagen principal del hero
│   │   └── logo.png            # Logo de la marca
│   ├── components/             # Componentes React reutilizables
│   │   ├── ui/                 # Componentes de shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ... (50+ componentes)
│   │   ├── Navigation.tsx      # Barra de navegación principal
│   │   ├── Hero.tsx           # Sección hero de la página principal
│   │   ├── Footer.tsx         # Pie de página
│   │   ├── Highlights.tsx     # Sección de características destacadas
│   │   ├── PricingCard.tsx    # Tarjeta de plan de precios
│   │   ├── PackCard.tsx       # Tarjeta de pack de entrenamiento
│   │   ├── BlogCard.tsx       # Tarjeta de artículo de blog
│   │   ├── TestimonialCard.tsx # Tarjeta de testimonio
│   │   ├── ClientsCarousel.tsx # Carrusel de clientes
│   │   └── SectionSeparator.tsx # Separador visual
│   ├── data/                   # Datos estáticos
│   │   └── clients.ts          # Lista de clientes y testimonios
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-toast.ts        # Hook para notificaciones toast
│   │   └── use-mobile.tsx      # Hook para detección de móvil
│   ├── lib/                    # Utilidades y helpers
│   │   └── utils.ts            # Funciones auxiliares (cn, etc.)
│   ├── pages/                  # Páginas de la aplicación (rutas)
│   │   ├── Index.tsx           # Página principal (/)
│   │   ├── TrainingPlans.tsx   # Página de planes (/planes)
│   │   ├── Packs.tsx           # Página de packs (/packs)
│   │   ├── Blog.tsx            # Página de blog (/blog)
│   │   ├── Reviews.tsx         # Página de clientes (/reviews)
│   │   ├── Contact.tsx         # Página de contacto (/contacto)
│   │   └── NotFound.tsx        # Página 404
│   ├── App.tsx                 # Componente raíz con Router
│   ├── main.tsx                # Punto de entrada de la aplicación
│   ├── index.css               # Estilos globales y Tailwind
│   └── vite-env.d.ts          # Tipos TypeScript para Vite
├── .gitignore                  # Archivos ignorados por Git
├── components.json             # Configuración de shadcn/ui
├── eslint.config.js            # Configuración de ESLint
├── index.html                  # HTML base
├── package.json                # Dependencias y scripts
├── postcss.config.js           # Configuración de PostCSS
├── tailwind.config.ts          # Configuración de Tailwind CSS
├── tsconfig.json               # Configuración de TypeScript
├── tsconfig.app.json           # Config TS para la aplicación
├── tsconfig.node.json          # Config TS para scripts Node
└── vite.config.ts              # Configuración de Vite
```

### 🛠️ Configuración Local

#### Prerrequisitos

- **Node.js** v18 o superior ([Descargar](https://nodejs.org/))
- **npm** v9 o superior (incluido con Node.js)

#### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Luisotorres3/j-performance-launch.git
   cd j-performance-launch
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:8080`

#### Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo en el puerto 8080
npm run build        # Construye la aplicación para producción en /dist
npm run build:dev    # Construye en modo desarrollo
npm run preview      # Preview de la build de producción
npm run lint         # Ejecuta ESLint para verificar el código
npm run deploy       # Despliega a GitHub Pages (requiere configuración)
```

### 🌐 Despliegue a GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

#### Configuración Inicial

1. **Verificar la configuración en `vite.config.ts`**
   
   El proyecto ya tiene configurado el `base` path para GitHub Pages:
   ```typescript
   export default defineConfig({
     base: "/j-performance-launch/",  // Debe coincidir con el nombre del repo
     // ... otras configuraciones
   });
   ```

2. **Configurar GitHub Pages en el repositorio**
   - Ve a **Settings** → **Pages** en tu repositorio de GitHub
   - En **Source**, selecciona la rama `gh-pages` (se creará automáticamente)
   - Haz clic en **Save**

#### Proceso de Despliegue

Hay dos métodos para desplegar:

**Método 1: Despliegue Manual**

```bash
# 1. Construir la aplicación
npm run build

# 2. Desplegar a GitHub Pages
npm run deploy
```

El script `deploy` automáticamente:
- Toma el contenido de la carpeta `/dist`
- Lo publica en la rama `gh-pages`
- GitHub Pages detecta los cambios y actualiza el sitio

**Método 2: Despliegue Automático con GitHub Actions**

Puedes configurar CI/CD creando `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### Verificar el Despliegue

Después del despliegue, tu sitio estará disponible en:
```
https://luisotorres3.github.io/j-performance-launch/
```

**Nota**: El primer despliegue puede tardar unos minutos en estar disponible.

#### Solución de Problemas

- **404 en las rutas**: El proyecto usa `HashRouter` de React Router, por lo que todas las rutas funcionarán correctamente con `/#/ruta`
- **Base path incorrecto**: Asegúrate de que el `base` en `vite.config.ts` coincida exactamente con el nombre de tu repositorio
- **Recursos no cargan**: Verifica que todas las rutas de imágenes y assets sean relativas

### 📊 Diagrama de Componentes

Ver [COMPONENT_ARCHITECTURE.md](./COMPONENT_ARCHITECTURE.md) para un diagrama detallado de la jerarquía de componentes.

### 🎨 Personalización

#### Temas y Colores

Los colores del tema se pueden personalizar en `src/index.css`:

```css
:root {
  --primary: ...;
  --secondary: ...;
  /* Más variables de color */
}
```

#### Componentes de shadcn/ui

Para agregar nuevos componentes de shadcn/ui:

```bash
npx shadcn@latest add [component-name]
```

### 📝 Licencia

Todos los derechos reservados © 2024 J Performance Systems

---

## English

### 📋 Project Description

**J Performance System** is a modern web application for a personal trainer offering personalized training programs, nutrition plans, and performance tracking. The platform allows clients to explore different training plans, view testimonials, read blog articles, and contact the trainer directly.

### 🚀 Technology Stack

This project is built with modern web technologies to ensure performance, scalability, and an excellent user experience:

#### **Core**
- **[Vite](https://vitejs.dev/)** `v5.4.19` - Ultra-fast build tool and dev server
- **[React](https://react.dev/)** `v18.3.1` - User interface library
- **[TypeScript](https://www.typescriptlang.org/)** `v5.8.3` - JavaScript with types for better safety

#### **Styling and UI**
- **[Tailwind CSS](https://tailwindcss.com/)** `v3.4.17` - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Reusable components based on Radix UI
- **[Radix UI](https://www.radix-ui.com/)** - Accessible, unstyled primitive components
- **[Lucide React](https://lucide.dev/)** - Modern, customizable icons
- **[Framer Motion](https://www.framer.com/motion/)** `v12.23.24` - Smooth, professional animations

#### **Routing and State**
- **[React Router DOM](https://reactrouter.com/)** `v6.30.1` - Client-side routing
- **[TanStack Query](https://tanstack.com/query)** `v5.83.0` - Asynchronous state management

#### **Forms and Validation**
- **[React Hook Form](https://react-hook-form.com/)** `v7.61.1` - Performant form management
- **[Zod](https://zod.dev/)** `v3.25.76` - TypeScript-first schema validation

#### **Development Tools**
- **[ESLint](https://eslint.org/)** `v9.32.0` - Linter for clean code
- **[PostCSS](https://postcss.org/)** - CSS transformations
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** `v6.3.0` - Automated deployment to GitHub Pages

### 📁 Folder Structure

```
j-performance-launch/
├── public/                      # Public static files
├── src/                         # Application source code
│   ├── assets/                  # Media resources (images, logos)
│   │   ├── clients/            # Client photos
│   │   ├── hero.png            # Main hero image
│   │   └── logo.png            # Brand logo
│   ├── components/             # Reusable React components
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ... (50+ components)
│   │   ├── Navigation.tsx      # Main navigation bar
│   │   ├── Hero.tsx           # Homepage hero section
│   │   ├── Footer.tsx         # Footer component
│   │   ├── Highlights.tsx     # Featured highlights section
│   │   ├── PricingCard.tsx    # Pricing plan card
│   │   ├── PackCard.tsx       # Training pack card
│   │   ├── BlogCard.tsx       # Blog article card
│   │   ├── TestimonialCard.tsx # Testimonial card
│   │   ├── ClientsCarousel.tsx # Clients carousel
│   │   └── SectionSeparator.tsx # Visual separator
│   ├── data/                   # Static data
│   │   └── clients.ts          # Client list and testimonials
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-toast.ts        # Toast notification hook
│   │   └── use-mobile.tsx      # Mobile detection hook
│   ├── lib/                    # Utilities and helpers
│   │   └── utils.ts            # Helper functions (cn, etc.)
│   ├── pages/                  # Application pages (routes)
│   │   ├── Index.tsx           # Homepage (/)
│   │   ├── TrainingPlans.tsx   # Plans page (/planes)
│   │   ├── Packs.tsx           # Packs page (/packs)
│   │   ├── Blog.tsx            # Blog page (/blog)
│   │   ├── Reviews.tsx         # Clients page (/reviews)
│   │   ├── Contact.tsx         # Contact page (/contacto)
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx                 # Root component with Router
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles and Tailwind
│   └── vite-env.d.ts          # TypeScript types for Vite
├── .gitignore                  # Files ignored by Git
├── components.json             # shadcn/ui configuration
├── eslint.config.js            # ESLint configuration
├── index.html                  # Base HTML file
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # TS config for application
├── tsconfig.node.json          # TS config for Node scripts
└── vite.config.ts              # Vite configuration
```

### 🛠️ Local Setup

#### Prerequisites

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** v9 or higher (included with Node.js)

#### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Luisotorres3/j-performance-launch.git
   cd j-performance-launch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:8080`

#### Available Scripts

```bash
npm run dev          # Starts the development server on port 8080
npm run build        # Builds the application for production in /dist
npm run build:dev    # Builds in development mode
npm run preview      # Preview the production build
npm run lint         # Run ESLint to check the code
npm run deploy       # Deploy to GitHub Pages (requires configuration)
```

### 🌐 Deploying to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

#### Initial Setup

1. **Verify the configuration in `vite.config.ts`**
   
   The project already has the `base` path configured for GitHub Pages:
   ```typescript
   export default defineConfig({
     base: "/j-performance-launch/",  // Must match the repo name
     // ... other configurations
   });
   ```

2. **Configure GitHub Pages in the repository**
   - Go to **Settings** → **Pages** in your GitHub repository
   - Under **Source**, select the `gh-pages` branch (will be created automatically)
   - Click **Save**

#### Deployment Process

There are two deployment methods:

**Method 1: Manual Deployment**

```bash
# 1. Build the application
npm run build

# 2. Deploy to GitHub Pages
npm run deploy
```

The `deploy` script automatically:
- Takes the content from the `/dist` folder
- Publishes it to the `gh-pages` branch
- GitHub Pages detects the changes and updates the site

**Method 2: Automatic Deployment with GitHub Actions**

You can set up CI/CD by creating `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### Verify Deployment

After deployment, your site will be available at:
```
https://luisotorres3.github.io/j-performance-launch/
```

**Note**: The first deployment may take a few minutes to become available.

#### Troubleshooting

- **404 on routes**: The project uses `HashRouter` from React Router, so all routes will work correctly with `/#/route`
- **Incorrect base path**: Make sure the `base` in `vite.config.ts` exactly matches your repository name
- **Resources not loading**: Verify that all image and asset paths are relative

### 📊 Component Diagram

See [COMPONENT_ARCHITECTURE.md](./COMPONENT_ARCHITECTURE.md) for a detailed component hierarchy diagram.

### 🎨 Customization

#### Themes and Colors

Theme colors can be customized in `src/index.css`:

```css
:root {
  --primary: ...;
  --secondary: ...;
  /* More color variables */
}
```

#### shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

### 📝 License

All rights reserved © 2024 J Performance Systems
