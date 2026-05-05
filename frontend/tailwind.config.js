/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cinematic-black': '#050505',
        'cinematic-teal': {
          DEFAULT: '#2DD4BF',
          dark: '#134E4A',
          light: '#99F6E4',
        },
        'cinematic-grey': '#1A1A1B',
      },
      backdropBlur: {
        'liquid': '20px',
      },
      backgroundColor: {
        'glass': 'rgba(10, 10, 11, 0.7)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
