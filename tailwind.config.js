/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Это важно для React-компонентов
  ],
  theme: {
    extend: { },
  plugins: [],
},
}