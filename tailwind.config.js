const themeStyle = require("./config/style.json");
const primaryFont = themeStyle.font.fontFamily.primary.replace(/\+/g, " ");
const secondaryFont = themeStyle.font.fontFamily.secondary.replace(/\+/g, " ");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {
      variantOrder: [
        "first",
        "last",
        "odd",
        "even",
        "visited",
        "checked",
        "group-hover",
        "group-focus",
        "focus-within",
        "hover",
        "focus",
        "focus-visible",
        "active",
        "disabled",
      ],
      opacity: ["disabled"],
      display: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],

  theme: {
    extend: {
      fontSize: {
        default: themeStyle.font.fontSize.default,
        large: themeStyle.font.fontSize.large,
        small: themeStyle.font.fontSize.small,
        h1: themeStyle.font.fontSize.h1,
        h2: themeStyle.font.fontSize.h2,
        h3: themeStyle.font.fontSize.h3,
        h4: themeStyle.font.fontSize.h4,
        h5: themeStyle.font.fontSize.h5,
        h6: themeStyle.font.fontSize.h6,
      },
      fontFamily: {
        primary: [
          primaryFont.replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, ""),
          themeStyle.font.fontFamily.primaryType,
        ],
        secondary: [
          secondaryFont.replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, ""),
          themeStyle.font.fontFamily.secondaryType,
        ],
      },
      height: {
        37: "18.75rem",
      },
      letterSpacing: {
        primary: "2px",
        secondary: "3px",
      },

      colors: {
        primaryColor: themeStyle.color.themeColor.primary,
        light: themeStyle.color.basicColor.light,
        dark: themeStyle.color.basicColor.dark,
        textDark: themeStyle.color.textColor.dark,
        textColor: themeStyle.color.textColor.default,
        textLight: themeStyle.color.textColor.light,
        borderColor: themeStyle.color.themeColor.border,
        facebook: themeStyle.color.socialColor.facebook,
        twitter: themeStyle.color.socialColor.twitter,
        pinterest: themeStyle.color.socialColor.pinterest,
      },
    },
  },
};
