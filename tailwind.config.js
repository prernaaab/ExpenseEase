/** @type {import('tailwindcss').Config} */

import { transform } from 'framer-motion';

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
        'signup-bg': "url('./src/assets/signup-bg.jpg')"
      },
    },
  },
  plugins: [],
}