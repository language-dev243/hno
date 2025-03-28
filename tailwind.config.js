/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#121212",
          text: "#e0e0e0",
          card: "#1E1E1E",
          primary: "#BB86FC",
          secondary: "#03DAC6",
        },
        light: {
          background: "#FFFFFF",
          text: "#000000",
          card: "#F5F5F5",
          primary: "#6200EE",
          secondary: "#03DAC6",
        },
      },
    },
  },
  plugins: [],
};
