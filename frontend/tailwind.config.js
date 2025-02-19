// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
  
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#AEE3E2',
        'pastel-purple': '#D7BCE8',
        'pastel-pink': '#F9C6D1',
        'pastel-orange': '#F8D5A3',
        'pastel-yellow': '#FAE3B0',
        'pastel-green': '#B6E2D3',
      },
    },
  },
  plugins: [],
}
