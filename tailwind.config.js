/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px'
    },
    extend: {
      colors: {
        primary: {
          'cyan': 'hsl(180, 66%, 49%)',
          'dark-violet': 'hsl(257, 27%, 26%)'
        },
        secondary: {
          'red': 'hsl(0, 87%, 67%)'
        },
        neutral: {
          'gray': 'hsl(0, 0%, 75%)',
          'grayish-violet': 'hsl(257, 7%, 63%)',
          'very-dark-blue': 'hsl(255, 11%, 22%)',
          'very-dark-violet': 'hsl(260, 8%, 14%)'                 } 
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
