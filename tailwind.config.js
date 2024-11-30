/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1A1A1A",
        dark: "#090D1F",
      },
      fontSize: {
        custom: "325.8px",
      },
    },
  },
  plugins: [],
};
