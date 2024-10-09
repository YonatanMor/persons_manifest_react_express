/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bgChangeOdd: {
          "0%": { backgroundColor: "#758694" }, // Tailwind blue-500
          "100%": { backgroundColor: "#1E3E62" }, // Tailwind red-500
        },
        bgChangeEven: {
          "0%": { backgroundColor: "#758694" }, // Different color for even lines
          "100%": { backgroundColor: "#0B192C" }, // Tailwind color for even lines
        },
      },
      animation: {
        "bg-change-odd": "bgChangeOdd 400ms ease-in-out forwards",
        "bg-change-even": "bgChangeEven 400ms ease-in-out forwards",
      },
      fontFamily: {
        Playwrite: ['"Playwrite DE Grund"', "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
