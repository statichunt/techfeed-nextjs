module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'media',

  variants: {
    extend: {
      variantOrder: [
        'first',
        'last',
        'odd',
        'even',
        'visited',
        'checked',
        'group-hover',
        'group-focus',
        'focus-within',
        'hover',
        'focus',
        'focus-visible',
        'active',
        'disabled',
      ],
      opacity: ['disabled'],
      display: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],

  theme: {
    extend: {
      colors: {
        buttonColor: "#c8ab77"
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '30px':'30px'
      },
      fontFamily: {
        'display': ['"Oswald"', 'sans-serif'],
        'lora': ['"Lora"', 'serif']
      },
      textColor: {
        'headingColor': '#333333',
        'commonColor': '#c8ab77',
        'commonColorHover': '#9b7a3e',
        'nameColor': '#aaa',
        'linkHoverColor': '#f7f8fa',
        'white': '#ffff',
        'black': '#000',
        'green': 'green',
        'red': 'red'

      },
      borderColor: {
        'commonColor': '#c8ab77',
        'bannerIconBorder': '#ddd',
        'footerBorder': '#dee2e6'
      },
      height: {
        h1: "0.25rem",
        bannerHeight: "600px",
        h12: "3rem",
        h16: "4rem",
        h32: "8rem",
        logoHeight: "160px",
        authorImage: "13rem",
        h200: "200px",
        h400: "400px"


      },

    }



  }

}