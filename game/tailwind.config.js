/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Potato Sans"],
      body: ["Potato Sans"],
      alt: ["Montserrat"],
    },
    extend: {
      colors: {
        shuttleGray: "#5F6165",
        activeNavElement: "#FDD86D",
        bgNotify: "#DF0000",
      },
      keyframes: {
        scoreAnimation: {
          "0%": { opacity: 1, transform: "translate(0, -10px)" },
          "50%": { opacity: 1, transform: "translate(0, -100px)" },
          "100%": { opacity: 0, transform: "translate(0, -200px)" },
        },
      },
      animation: {
        scoreAnimation: "scoreAnimation 2s ease-out forwards",
      },
      backgroundImage: {
        "hero-pattern": "url('catApp/catappback1.png')",
      },
    },
  },
  plugins: [],
}
