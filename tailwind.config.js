module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        turquoise: {
          lightest: "#f0fafb",
          light: "#64babb",
          DEFAULT: "#5da5a4",
          dark: "#2b3939",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        grey: {
          DEFAULT: "#797f7d",
        },
        cyan: {
          lightGrayishBackground: "hsl(180, 52%, 96%)",
          lightGrayishFilterTablets: "hsl(180, 31%, 95%)",
          DEFAULT: "hsl(180, 29%, 50%)",
          darkGrayish: "hsl(180, 8%, 52%)",
          veryDarkGrayish: "hsl(180, 14%, 20%)",
        },
      },
      fontFamily: {
        sans: ["Spartan", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        xxs: ".6rem",
      },
      backgroundImage: (theme) => ({
        "bg-header-desktop": "url('/public/images/bg-header-desktop.svg')",
        "bg-header-mobile": "url('/public/images/bg-header-mobile.svg')",
        favicon: "url('/public/images/favicon-32x32.png')",
        "icon-remove": "url('/public/images/icon-remove.svg')",
      }),
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
};
