const themeStyle = require("./config/style.json");
const primaryFont = themeStyle.font.fontFamily.primary.replace(/\+/g, " ");
const secondaryFont = themeStyle.font.fontFamily.secondary.replace(/\+/g, " ");
const base = Number(themeStyle.font.fontSize.base.replace("px", ""));
const font_scale = themeStyle.font.fontSize.font_scale;
const h6 = base;
const h5 = h6 * font_scale;
const h4 = h5 * font_scale;
const h3 = h4 * font_scale;
const h2 = h3 * font_scale;
const h1 = h2 * font_scale;
const h1_sm = h1 * 0.625;
const h2_sm = h2 * 0.625;
const h3_sm = h3 * 0.8;
const large = base + base * 0.125;
const small = base - base * 0.125;

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
        base: themeStyle.font.fontSize.base,
        large: large + "px",
        small: small + "px",
        h1: h1 + "px",
        h2: h2 + "px",
        h3: h3 + "px",
        h4: h4 + "px",
        h5: h5 + "px",
        h6: h6 + "px",
        h1_sm: h1_sm + "px",
        h2_sm: h2_sm + "px",
        h3_sm: h3_sm + "px",
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

      colors: {
        primaryColor: themeStyle.color.themeColor.primary,
        light: themeStyle.color.basicColor.light,
        dark: themeStyle.color.basicColor.dark,
        textDark: themeStyle.color.textColor.dark,
        textColor: themeStyle.color.textColor.default,
        textLight: themeStyle.color.textColor.light,
        textGray: themeStyle.color.textColor.gray,
        grayLight: themeStyle.color.textColor.grayLight,
        borderColor: themeStyle.color.themeColor.border,
        borderDark: themeStyle.color.themeColor.borderDark,
        borderLight: themeStyle.color.themeColor.borderLight,
        facebook: themeStyle.color.socialColor.facebook,
        twitter: themeStyle.color.socialColor.twitter,
        pinterest: themeStyle.color.socialColor.pinterest,
        body: themeStyle.color.themeColor.body,
      },
    },
  },
};
