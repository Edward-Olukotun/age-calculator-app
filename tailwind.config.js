/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'Purple': 'hsl(259, 100%, 65%)',
      'Lightred': 'hsl(0, 100%, 67%)',
      'White': 'hsl(0, 0%, 100%)',
      'Offwhite': 'hsl(0, 0%, 94%)',
      'Lightgrey': 'hsl(0, 0%, 86%)',
      'Smokeygrey': 'hsl(0, 1%, 44%)',
      'Offblack': 'hsl(0, 0%, 8%)',
    },
    extend: {},
  },
  plugins: [],
}
