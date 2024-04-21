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
      },
    },
  },
  plugins: [],
}
