module.exports = {
  purge: [
    './pages//*.{js,ts,jsx,tsx}', './components//*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  
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
    },
  },
  plugins: [],

  theme: {
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
    },
    fontFamily:{
      'display':['"Oswald"','sans-serif'],
      'lora':['"Lora"','serif']
    },
    textColor:{
      'headingColor':'#333333',
      'commonColor':'#c8ab77',
      'commonColorHover':'#9b7a3e',
      'nameColor':'#aaa',
      'linkHoverColor':'#f7f8fa',
      'white':'#ffff'
    },
    borderColor:{
      'commonColor':'#c8ab77'
    },
    // backgroundColor:{

    //   'commonColor':'#c8ab77'

    // }
    // screens: {
    //   'mobile': '480px',
    //   // => @media (min-width: 640px) { ... }

      
    // },
   
  }

}
