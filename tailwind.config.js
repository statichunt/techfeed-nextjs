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
        '30px':'30px',
        "nav":"17px",
        "authorText":"20px"
      },
      fontFamily: {
        'oswald': ['"Oswald"', 'sans-serif'], 
        'lora': ['"Lora"', 'serif']
      },
      textColor: {
        'headingColor': '#333',
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
        'footerBorder': '#f6f6f6'
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
        h300:"300px",
        h400: "400px",
        navBarHeight:"100px"


      },
      letterSpacing: {
      primary:"2px"
      },

      transitionDuration: {
        '0': '0ms',
        'primary-duration': '1000ms',
      },
      // custom width
      width: {
        'input-field': '48%',
        'about-content':'60%',
        'blog-width':'33.33%'
      },
      maxWidth: {
        "620":"620px",
        "720":"720px",
        "980":"980px",
        "1220":"1220px"

      }

    },

// transition



  }

}