/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-eden":
          "linear-gradient(90deg, #5ED37D 9.02%, #CAF84C 107.87%)",
      },
      colors: {
        brand: {
          blue: "#171b47",
          green: "#00d27f",
        },
        indigo: {
          600: "#181d45",
          700: "#171b47",
        },
      },
    },
  },
  plugins: [],
};
