/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#3A393F',
        'highlight': '#E5CF8E',
        'text': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
