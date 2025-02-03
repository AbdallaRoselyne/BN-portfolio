/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 5s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%", backgroundSize: "200%" },
          "50%": { backgroundPosition: "100% 50%", backgroundSize: "200%" },
        },
      },
    },
  },
  plugins: [],
};
