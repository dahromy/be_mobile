module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.scss"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        neutral: "var(--color-neutral)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        current: "var(--border-color)",
      }),
    },
    maxWidth: {
      "3.7xl": "53.81rem",
      "3.5xl": "804px",
      "6.2xl": "72.75rem",
      "8xl": "1479px",
    },
    fontFamily: {
      sans: ["Gilroy", "sans-serif"],
      serif: ["Gilroy", "serif"],
    },
  },
  variants: {},
  plugins: [],
};
