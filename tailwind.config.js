/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./frontend/*.{jsx,js,tsx,ts}",
    "./frontend/components/*.{jsx,js,tsx,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// // tailwind.config.js
// const { nextui } = require("@nextui-org/react");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // ...
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [nextui()]
// }
