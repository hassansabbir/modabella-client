/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      theme: "Lobster Two",
      description: "Ysabeau SC",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
