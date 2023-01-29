/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#d1d5db',
        success: '#22c55e',
        danger: '#b91c1c',
        warning: '#eab308',
        info: '#06b6d4',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
