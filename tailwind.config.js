/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {

      colors: {
        maroon: '#800000', // You can replace this with your desired maroon color code
        lightm: '#991b1b',
        black:  '#0c0a09',
        grey:   '#292524',
      },
    
    },
  },
  variants: {},
  plugins: [],
}

