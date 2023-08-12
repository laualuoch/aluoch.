/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.js',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'green': '#99B8A5',
      'beige': '#E7E1C9',
      'jungle': '#D1CEBD',
      'pink': '#FCBAB1',
      'cream': '#F6EDDB',
      'black': '#000000',
      'crayola': "#E83151",
      'timberwolf': 'DBD4D3'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      chilanka: ['Chilanka'],
      nunito: ['Nunito']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: []
}

