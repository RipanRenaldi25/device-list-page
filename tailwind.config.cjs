/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-header": "#43B7F9",
        "blue-check-box": "#2D5BFF",
      },
    },
  },
  plugins: [],
};
