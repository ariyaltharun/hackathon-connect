const { nextui } = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/*.html",
    "./frontend/*.{jsx,js,tsx,ts}",
    "./frontend/pages/*.{jsx,js,tsx,ts}",
    "./frontend/components/*.{jsx,js,tsx,ts}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
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
