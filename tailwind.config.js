/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'LoginBox': '5px 6px 10px 3px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'signup-bg': "url('./src/images/signup-bg.jpg')"
      },
      colors: {
        'primary-text': '#294956',
        'secondary-text': '#6F7482',
        'link': '#1d4ae8'
      }
    },
  },
  plugins: [],
}