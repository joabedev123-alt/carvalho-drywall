/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171a1e",
        mute: "#5d656f",
        paper: "#f3f0ea",
        foam: "#f7f5f1",
        line: "#ddd6cb",
        navy: "#071018",
        brand: "#0f4e96",
        branddeep: "#0a3368",
      },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "serif"],
        sans: ["Outfit", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
      boxShadow: {
        soft: "0 18px 40px -28px rgba(16, 24, 32, 0.45)",
      },
    },
  },
  plugins: [],
};
