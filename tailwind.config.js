/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
    },
    colors: {
      color: {
        primary: '#FFFFFF',
        accent: '#27AE60',
        secondary: '#23663F',
        grey: '#B3B3B3',
        background: '#F6F8FC',
        dark: '#222831',
        yellow: '#FFD43B'
      }
    }
  },
  plugins: [],
};
