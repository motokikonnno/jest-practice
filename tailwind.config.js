/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "emerald-green": "#29cb97",
        "right-blue": "#679cf6",
        "right-gray": "#748aa1",
        "right-black": "#363c43",
        "back-black": "#292e33",
        "status-blue": "#4072ee",
        "status-purple": "#b558f6",
        "status-yellow": "#fec400",
        "black-blue": "#4072ee",
        "calendar-gray": "#B8C5D3",
        "calendar-black": "#32393F",
      },
    },
  },
  plugins: [],
};
