/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#09101F',
        panel: '#0D1630',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(0,0,0,0.45)',
        soft: '0 18px 50px rgba(0,0,0,0.28)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(196,150,59,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(196,150,59,0.04) 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
