/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fff5f7',
          100: '#ffe4e9',
          200: '#ffccd5',
          300: '#ffa3b0',
          400: '#ff7a8b',
          500: '#ff5066',
          600: '#db3f54',
          700: '#b33343',
          800: '#80252f',
          900: '#661d25'

        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};