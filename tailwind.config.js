/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#000000',
        },
        card: {
          DEFAULT: '#1C1C1C',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
        },
        accent: {
          yellow: '#FFD700',
        }
      },
    },
  },
  plugins: [],
} 