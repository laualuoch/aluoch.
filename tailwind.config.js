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
          primary: '#007bff',
          secondary: '#6c757d',
          background: '#fafafa',
          text: '#212529',
        },
        dark: {
          primary: '#28a745',
          secondary: '#ffffff',
          background: '#171c21',
          text: '#f8f9fa',
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

