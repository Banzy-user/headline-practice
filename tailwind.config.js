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
        'primary-light': '#FF1E3F',
        'primary-dark': '#B80510',
        dark: '#0A0A0A',
        surface: '#141414',
        'surface-light': '#1E1E1E',
        'surface-border': 'rgba(255, 255, 255, 0.08)',
        bg: '#050505',
        'gray-text': '#A0A0A0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(227, 6, 19, 0.3), transparent)',
        'card-gradient': 'linear-gradient(145deg, rgba(20,20,20,0.9) 0%, rgba(10,10,10,0.9) 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(227, 6, 19, 0.3)',
        'glow-lg': '0 0 60px rgba(227, 6, 19, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}