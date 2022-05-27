module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  themes: [
    {
      carSkeleton: {
        primary: "#023e8a",
        secondary: "#48cae4",
        accent: "#293241",
        neutral: "#0fffff",
        "base-100": "#ffffff",
      },
    },
    "dark",
    "cupcake",
  ],
  plugins: [require("daisyui")],
};
