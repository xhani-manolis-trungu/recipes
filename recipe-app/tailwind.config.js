/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      outline: {
        blue: ['2px solid #0000ff', '2px'],
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  variants: {
    appearance: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    outline: ['responsive', 'focus'],
    zIndex: ['responsive'],
  }
}

