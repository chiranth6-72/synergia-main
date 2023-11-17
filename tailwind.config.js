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
        "gradient-linear":
          "linear-gradient(80deg, rgba(244,10,216,1) 0%, rgba(56,25,144,1) 85%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "event-bg": "url('/images/bg/event.png')",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "Helvetica", "sans-serif"],
        "red-hat-display": ["Red Hat Display", "sans-serif"],
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
            transform: "scale(1) rotateY(0) opacity(0)",
          },
          "50%": {
            transform: "scale(1) rotateY(180deg) ",
          },
          "100%": {
            transform: "scale(1) rotateY(360deg) opacity(1)",
          },
        },
        grow: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "6%",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateY(10rem) opacity(0)",
          },
          "100%": {
            transform: "translateY(0) opacity(1)",
          },
        },
      },
      animation: {
        open: "open 0.5s linear forwards",
        close: "close 0.5s linear forwards",
        "rotate-scale-up-ver": "rotate-scale-up 0.65s linear both",
        grow: "grow 1s linear forwards",
        "slide-in-bt-nodelay": "slide-in 0.5s linear both",
      },

      colors: {
        "primary-green": "#cdff6b",
        "primary-white": "#fefeff",
        "primary-black": "#000000",
        "primary-purple": "#381990",
        primary: "lineat",
      },
    },
  },

  plugins: [],
};
