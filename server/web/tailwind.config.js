/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#2E7D32', // Emerald Green
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FFD54F', // Warm Gold
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        earth: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#6D4C41', // Earth Brown
          600: '#a16207',
          700: '#854d0e',
          800: '#713f12',
          900: '#5c2e04',
        },
        accent: {
          50: '#f7f8f4',
          100: '#eef0e8',
          200: '#dde1d1',
          300: '#c8cfb4',
          400: '#b0ba94',
          500: '#A5D6A7', // Light Olive
          600: '#7c8471',
          700: '#63695c',
          800: '#51554b',
          900: '#43463f',
        },
      },
    },
  },
  plugins: [],
}

