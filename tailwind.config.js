/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colour:'#070624',
      
    },
  },

  screens: {
    'md': '768px',
    tablet: '960px',
    'xl': '1280px',
    laptop: "1366px",
    '2xl': '1536px',
    
  },
  plugins: [ require('flowbite/plugin')],
}

