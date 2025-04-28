/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",
        secondary: "#4b5563",
        accent: "#f59e0b",
        dark: {
          primary: "#f3f4f6",
          secondary: "#d1d5db",
          background: "#1f2937",
          surface: "#374151",
        }
      },
    },
  },
  plugins: [],
}; 