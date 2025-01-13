/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "bg-primary": "#f6f6f6",
        "bg-secondary": "#ececec",
        "bg-tertiary": "#FF136F",
      },
      colors: {
        "text-primary": "#FF136F",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  plugins: [require("daisyui")],
};
