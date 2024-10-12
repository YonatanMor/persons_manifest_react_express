/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bgChangeOdd: {
          "0%": { backgroundColor: "#758694" },
          "100%": { backgroundColor: "#1E3E62" },
        },
        bgChangeEven: {
          "0%": { backgroundColor: "#758694" },
          "100%": { backgroundColor: "#0B192C" },
        },
        fadeInOut: {
          "0%, 100%": { opacity: 0 },
          "25%, 75%": { opacity: 1 },
        },
      },
      animation: {
        "bg-change-odd": "bgChangeOdd 400ms ease-in-out forwards",
        "bg-change-even": "bgChangeEven 400ms ease-in-out forwards",
        fadeInOut: "fadeInOut 3s forwards",
      },
      fontFamily: {
        Playwrite: ['"Playwrite DE Grund"', "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
