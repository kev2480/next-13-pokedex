/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pokemon': {
          red: "#DC0A2D",
          almond: "#DEDEDE",
          blue: "#2BAAFD",
          yellow: "#FFF27E",
          green: "#51AD60"
        }
      },
      boxShadow: {
        thick: '0 0 0 4px black'
      }
    }
  },
  plugins: [],
}