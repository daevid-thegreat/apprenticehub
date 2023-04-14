/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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
