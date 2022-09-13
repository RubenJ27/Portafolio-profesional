/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {colors: {
      'primary-color': '#00A0A6',
      'secondary-color': '#006366',
      'tertiary-color': '#00DFE6',
      'quaternary-color': '#00EAF2',
      'quaternary-color-complement': '#993B00',
      'quinario-color': '#00C5CC',
      'quinario-color-complement': '#E65900',
    },
  },
  },
  plugins: [],
}
