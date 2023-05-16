/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      primary: '#5271FF',
      secondary: '#0A1E40',
      gray: '#777E90',
      white: '#ffffff',
    },
    
    extend: {
      fontFamily: {
        'Poppins': ['sans-serif'],
        'Lexend': ['Lexend'],
      },
    },
  },
  variants: {},
  plugins: [],
}
