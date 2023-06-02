/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
        secondary: "#0f172a",
        "custom-orange": "#ffa726",
        gray: "#475569",
        lightGray: "#f3f4f6",
        white: "#ffffff",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        "1bp": { max: "1300px" },
        "2bp": { max: "1160px" },
        "3bp": { max: "868px" },
        "4bp": { max: "640px" },
        "5bp": { max: "543px" },
      },
    },
  },
  plugins: [],
}
