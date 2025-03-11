/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--my-primary)", // Custom blue color
        secondary: "#9333EA", // Custom purple
        accent: "#F59E0B", // Custom orange
        softGray: "#F3F4F6", // Light gray background
      },
    },
  },
  plugins: [require()],
};
