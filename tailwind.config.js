const { callbackPromise } = require("nodemailer/lib/shared");
const themeStyle = require("./config/style.json");
const primaryFont = themeStyle.font.fontFamily.primary.replace(/\+/g, " ");
const secoundaryFont = themeStyle.font.fontFamily.secoundary.replace(
  /\+/g,
  " "
);
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],

  darkMode: "media",

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
        secoundary: [
          secoundaryFont.replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, ""),
          themeStyle.font.fontFamily.secoundaryType,
        ],
      },
      height: {
        37: "300px",
      },
      letterSpacing: {
        primary: "2px",
        secoundary: "3px",
      },

      // custom width
      width: {
        120: "500px",
      },

      colors: {
        primaryColor: themeStyle.color.themeColor.primary,
        light: themeStyle.color.basicColor.light,
        dark: themeStyle.color.basicColor.dark,
        headingColor: themeStyle.color.textColor.dark,
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
