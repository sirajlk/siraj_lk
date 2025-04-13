// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff91', // Tailwind's default blue-500, or replace with your own hex
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
      },
    },
  },
  plugins: [],
}
