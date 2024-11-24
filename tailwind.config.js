/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      sans: ['Roboto', 'sans-serif'], // Default for body text
      heading: ['Montserrat', 'sans-serif'], // For headings
      serif: ['Playfair Display', 'serif'],

    },
    animation: {
      fadeInDown: 'fadeInDown 0.8s ease-out',
      slideInLeft: 'slideInLeft 0.8s ease-out',
      slideInRight: 'slideInRight 0.8s ease-out',
    },
    keyframes: {
      fadeInDown: {
        '0%': { opacity: 0, transform: 'translateY(-20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      slideInLeft: {
        '0%': { opacity: 0, transform: 'translateX(-50px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      slideInRight: {
        '0%': { opacity: 0, transform: 'translateX(50px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
    },
  },
  plugins: [],
}