module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#5E8B25",
        },
        brown: {
          DEFAULT: "#6E6544",
          light: "#A59863",
        },
        concrete: {
          DEFAULT: "#D4CEBC",
        },
        success: {
          DEFAULT: "#81BC37",
        },
        info: {
          DEFAULT: "#0094B4",
        },
        error: {
          DEFAULT: "#E63779",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
