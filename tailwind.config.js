/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Include the new App Router structure
    './pages/**/*.{js,ts,jsx,tsx}', // Optional: in case you have pages still
    './components/**/*.{js,ts,jsx,tsx}', // Include components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
