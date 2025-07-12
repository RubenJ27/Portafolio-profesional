# Portafolio Profesional

Este es un portafolio profesional desarrollado con **React + Vite** para mostrar habilidades, experiencia y proyectos de un desarrollador frontend.

[Ver Landing Page](https://landing-page-ruben-jaramillo.web.app/) 😎

---

## 🚀 Tecnologías

- **Frontend:** React 18+, Vite
- **Estilos:** Tailwind CSS
- **Iconos:** FontAwesome (brands y solid)
- **Scroll:** react-scroll-to-top
- **Deployment:** Firebase Hosting
- **Gestor de paquetes:** Yarn

---

## 📁 Estructura del Proyecto

```
src/
├── features/              # Secciones principales (feature-based)
│   ├── home/
│   ├── profile/
│   ├── services/
│   ├── experience/
│   ├── portfolio/
│   └── contact/
├── shared/
│   └── components/        # Componentes reutilizables (NavBar, Footer)
├── database/              # Datos estáticos (proyectos)
├── assets/                # Imágenes, iconos, recursos
├── cv/                    # Currículum en PDF
├── App.jsx
└── index.css
```

---

## 🖥️ Funcionalidades

- **SPA** con navegación suave entre secciones
- **Galería de proyectos** con links a demo y código fuente
- **Formulario de contacto** funcional
- **Descarga de CV** en PDF
- **Diseño responsive** y accesible
- **Scroll to top** personalizado

---

## ⚙️ Scripts útiles

```bash
# Desarrollo local
yarn dev

# Build de producción
yarn build

# Preview local del build
yarn preview

# Deploy a Firebase Hosting
yarn deploy
```

---

## 📝 Convenciones y buenas prácticas

- Componentes en **PascalCase**
- Solo **functional components** y hooks
- Estilos solo con **Tailwind CSS**
- Imágenes optimizadas y lazy loading
- Accesibilidad: alt text, aria-labels, navegación por teclado
- SEO básico: estructura semántica y meta tags

---

## 📦 Cómo instalar y correr el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/portafolio-profesional.git
   cd portafolio-profesional
   ```
2. Instala dependencias:
   ```bash
   yarn
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   yarn dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📂 Agregar nuevos proyectos

- Edita el archivo `src/database/projects.js` y sigue la estructura existente:
  ```js
  {
    id: 1,
    title: "Nombre del Proyecto",
    description: "Descripción breve...",
    technologies: ["React", "Tailwind", "Vite"],
    url: "/assets/portfolio/imagen.png",
    url_github: "https://github.com/...",
    url_live: "https://...",
  }
  ```

---

## 📄 Licencia

Este proyecto es personal y de código abierto. Puedes usarlo como referencia para tu propio portafolio.
