/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E30613',
        dark: '#111111',
        surface: '#FFFFFF',
        bg: '#F5F5F5',
      },
    },
  },
  plugins: [],
}