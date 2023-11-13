/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "Helvetica", "sans-serif"],
      },
      keyframes: {
        open: {
          "0%": { transform: "translateY(-4rem)" },
          "100%": { transform: "translateY(4rem)" },
        },
        close: {
          "0%": { transform: "translateY(4rem)" },
          "100%": { transform: "translateY(0)" },
        },
        "rotate-scale-up": {
          "0%": {
            transform: "scale(1) rotateY(0)",
          },
          "50%": {
            transform: "scale(2) rotateY(180deg)",
          },
          "100%": {
            transform: "scale(1) rotateY(360deg)",
          },
        },
      },
      animation: {
        open: "open 0.5s linear forwards",
        close: "close 0.5s linear forwards",
        "rotate-scale-up-ver": "rotate-scale-up 0.65s linear both",
      },
    },
  },

  plugins: [],
};
