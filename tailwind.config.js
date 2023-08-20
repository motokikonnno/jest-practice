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
      },
    },
  },
  plugins: [],
};
