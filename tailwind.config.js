/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#DDDDDD",
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
      backgroundImage: {
        circularLight: "repeating-radial-gradient(#cb017c 2px, #DDDDDD 5px, #DDDDDD 100px);",
      },
      screens:{
        "2xl": { max: '1535px'},
        // => @media (max-width: 1535px) {...}
        "xl": { max: '1279px'},
        // => @media (max-width: 1279px) {...}
        "lg": { max: '1023px'},
        // => @media (max-width: 1023px) {...}
        "md": { max: '767px'},
        // => @media (max-width: 767px) {...}
        "sm": { max: '639px'},
        // => @media (max-width: 639px) {...}
        "xs": { max: '479px'},
        // => @media (max-width: 479px) {...}
      },
    },
  },
  plugins: [],
};
