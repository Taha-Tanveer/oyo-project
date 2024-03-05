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
        "login-backgriund":
          'url("https://images.pexels.com/photos/1340304/pexels-photo-1340304.jpeg")',
      },
      height:{
        "large-box":"325px"
      }
    },
  },
  plugins: [],
};
