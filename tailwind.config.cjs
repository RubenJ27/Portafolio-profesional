/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  important: true,
  theme: {
    extend: {
      colors: {
      'primary-color': '#00A0A6',
      'secondary-color': '#006366',
      'tertiary-color': '#00DFE6',
      'quaternary-color': '#00EAF2',
      'quaternary-color-complement': '#993B00',
      'quinario-color': '#00C5CC',
      'quinario-color-complement': '#E65900',
      'yellow-progress': '#FFD15C',
      'red-progress': '#FF4C60',
      'projects-management-progress': '#6C6CE5',
    },
    screens: {
      'tall': { 'raw': '(max-width: 420px)' },
      // => @media (min-height: 800px) { ... }
    },
    height: {
      '128': '75vh',
    },
    placeholderColor: {
      'white': '#ffffff',
    },
    gridTemplateColumns: {
      
      // Simple 16 column grid
      'grid-col': 'repeat(16, minmax(0, 1fr))',

      // Complex site-specific column configuration
      'footer': '200px minmax(900px, 1fr) 100px',
    }
    
  },
  },
  plugins: [],
}
