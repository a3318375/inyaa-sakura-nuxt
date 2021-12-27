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
    require('windicss/plugin/forms'),
  ],
})
