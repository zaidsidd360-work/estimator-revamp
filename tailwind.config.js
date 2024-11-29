/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'silver-package-gradient': 'linear-gradient(118.67deg, #EEEEEE 0%, #9B9B9B 144.01%)',
        'gold-package-gradient': 'linear-gradient(118.8deg, #FFF7DC 0%, #D8B84D 128.06%)'
      },
    },
  },
  plugins: [
    require('tailwindcss-multi'),
  ]
}

