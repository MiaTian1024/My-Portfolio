/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F5EBEB",
        secondary: "#c254a3",
        tertiary: "#7897AB",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        dark: "#1b1b1b",
        light: "#f5f5f5",
        pink: "#cb017c",
        blue:"#400572",
        darkBlue:"#230341",
        pinkDark: "#58E6D9",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }, 
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(#cb017c 2px, #DDDDDD 5px, #DDDDDD 100px);",
      },
    },
  },
  plugins: [],
};
