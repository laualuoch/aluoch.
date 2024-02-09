/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        light: {
          primary: '#FFC0CB',
          secondary: '#FFB6C1',
          accent: '#FF69B4',
          baby: '#FFD9E6',
          background: '#FFFFFF',
          text: '#333333'
        },
        dark: {
          primary: '#001F3F',
          secondary: '#003366',
          accent: '#005b96',
          baby: '#0077b6',
          background: '#111111',
          text: '#CCCCCC'
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    variants: {
      backgroundColor: ['dark', 'light'],
      color: ['dark', 'light'],
    },
  },
  plugins: []
}

