/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'red':'#A23645',
      'blue': '#1fb6ff',
      'blue-hover': '#0f7fcc',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'orange-hover': '#e66a31',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      /* lato: ['Lato', 'sans-serif'], */
      sans: ['Lato', 'sans-serif'],
      /* sans: ['Graphik', 'sans-serif'], */
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}

