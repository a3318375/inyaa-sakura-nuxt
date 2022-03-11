import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      inset: {
        'menu': '2.5%',
        'smenu': '47.5%',
      },
      zIndex: {
        '-999': '-999',
      },
      transitionProperty: {
        height: 'height',
      },
      backgroundImage: {
        'img-default': "url('https://media.inyaw.com/cover/7037ade43b1e484eac903a111b7ea709.jpg')",
        'img-mobile-default': "url('https://media.inyaw.com/cover/14db2cf6e4b441368243b23722d212c9.png')",
      },
      transformOrigin: {
        'top-left-bg': '0px 0px',
      }
    },
    borderRadius: {
      'toc': '50%',
    },
    minWidth: {
      '1/4': '25%',
    },
    spacing: {
      '20p': '20%',
      '95p': '95%'
    }
  },
  plugins: [
    require('windicss/plugin/typography'),
  ],
})
