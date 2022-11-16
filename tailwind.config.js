/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        cust_brightRed: 'hsl(12, 88%, 59%)',
        cust_brightRedLight: 'hsl(12, 88%, 69%)',
        cust_brightRedXtraLight: 'hsl(12, 88%, 95%)',
        cust_darkBlue: 'hsl(228, 39%, 23%)',
        cust_darkGrayishBlue: 'hsl(227, 12%, 61%)',
        cust_xtraDarkBlue: 'hsl(233, 12%, 13%)',
        cust_xtraPaleRed: 'hsl(13, 100%, 96%)',
        cust_xtraLightGray: 'hsl(12, 88%, 59%)',
      },
    },
  },
  plugins: [],
}
