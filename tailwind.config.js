module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "ui-sans-serif", "sans-serif"],
        mono: ['"Ubuntu Mono"', "ui-monospace", "monospace"],
      },
      height: {
        140: "35rem",
      },
      colors: {
        green: {
          DEFAULT: "#5E8B25",
        },
        brown: {
          DEFAULT: "#442715",
        },
        yellow: {
          DEFAULT: "#D1B834",
          lighter: "#BEA72F",
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
