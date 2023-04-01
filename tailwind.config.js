/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        99999: 99999,
      },
      maxWidth: {
        "80rem": "80rem",
      },
      colors: {
        verydark: "#010103",
        websiteprimary: "#AFD275",
        blackprimary: "#010016",
        paragrey: "#706f7b",
        nightrider: "#2d2d2d",
      },
    },
  },
  plugins: [],
};
