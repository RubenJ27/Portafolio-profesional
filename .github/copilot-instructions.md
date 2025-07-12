# GitHub Copilot Instructions - Portafolio Profesional

## Contexto del Proyecto

Este es un portafolio profesional desarrollado con React + Vite, diseñado para mostrar habilidades, experiencia y proyectos de un desarrollador frontend.

## Stack Tecnológico

- **Frontend**: React 18+ con Vite
- **Styling**: Tailwind CSS
- **Iconos**: FontAwesome (brands y solid)
- **Scroll**: react-scroll-to-top
- **Deployment**: Firebase Hosting
- **Package Manager**: Yarn

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── NavBar.jsx      # Navegación principal
│   └── Footer.jsx      # Pie de página
├── pages/              # Páginas del sitio
│   ├── HomePage.jsx    # Página de inicio/hero
│   ├── ProfilePage.jsx # Sobre mí
│   ├── ServicesPage.jsx # Servicios ofrecidos
│   ├── ExperiencePage.jsx # Experiencia laboral
│   ├── PortfolioPage.jsx # Galería de proyectos
│   └── ContactPage.jsx # Información de contacto
├── database/           # Data estática
│   └── projects.js     # Array de proyectos
├── assets/            # Recursos estáticos
│   ├── icons/         # Iconos SVG
│   ├── portfolio/     # Imágenes de proyectos
│   └── profile/       # Fotos de perfil
└── cv/               # Currículum en PDF
```

## Convenciones de Código

### Componentes React

- Usar functional components con hooks
- Exportar como default para páginas principales
- Usar named exports para componentes auxiliares
- Mantener componentes en PascalCase

### Estilos

- Usar Tailwind CSS exclusivamente
- Colores personalizados definidos en tailwind.config.cjs:
  - `quinario-color-complement` para elementos principales
  - Hover states con `hover:bg-orange-700`
- Responsive design mobile-first

### Estructura de Datos

- Proyectos almacenados en `src/database/projects.js`
- Cada proyecto debe tener: título, descripción, tecnologías, imagen, links
- Imágenes en `src/assets/portfolio/`

## Patrones de Desarrollo

### Importaciones

```jsx
// Librerías externas primero
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes internos
import ComponentName from "./path/to/component";

// Estilos al final
import "./styles.css";
```

### FontAwesome

- Iconos de brands: `fab` (ya configurado)
- Iconos sólidos: `faIconName` de `@fortawesome/free-solid-svg-icons`
- Siempre agregar al library antes de usar

### Scroll to Top

- Configurado con icono de flecha hacia arriba
- Estilos: botón circular, fondo `quinario-color-complement`
- Posición fija en bottom-right

## Reglas Específicas

1. **Consistencia Visual**: Mantener el esquema de colores existente
2. **Responsividad**: Todos los componentes deben ser responsive
3. **Performance**: Optimizar imágenes y lazy loading cuando sea necesario
4. **Accesibilidad**: Incluir alt text, aria-labels y navegación por teclado
5. **SEO**: Meta tags apropiados y estructura semántica

## Funcionalidades Clave

### Navegación

- Single Page Application con smooth scroll
- Navbar sticky/fixed
- Scroll to top button

### Portafolio

- Galería de proyectos con filtros por tecnología
- Modal/detail view para cada proyecto
- Links a demo y código fuente

### Contacto

- Formulario de contacto funcional
- Links a redes sociales
- Descarga de CV en PDF

## Sugerencias para Copilot

- Al agregar nuevos proyectos, seguir la estructura de `projects.js`
- Mantener consistencia en naming de clases CSS
- Usar semantic HTML5 elements
- Implementar loading states y error handling
- Considerar dark mode toggle si se solicita
- Optimizar para Core Web Vitals

## Comandos Útiles

```bash
# Desarrollo
yarn dev

# Build
yarn build

# Preview
yarn preview

# Deploy
yarn deploy
```

## Notas Adicionales

- El proyecto usa Vite como bundler para mejor performance
- Firebase hosting configurado en `firebase.json`
- Tailwind PostCSS configurado en `postcss.config.cjs`
- Assets organizados por categorías en carpetas específicas
