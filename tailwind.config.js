/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'ravn-black': '#121212',
        'dark-gray': '#333333',
        'light-gray': '#828282',
        'emphasis-red': '#EC5757',
        'gray-6': '#F2F2F2'
      }
    }
  },
  plugins: []
}
