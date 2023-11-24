/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans'],
        // Define additional custom font stacks as needed
        customFont: ['Custom Font 1', 'Custom Font 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}