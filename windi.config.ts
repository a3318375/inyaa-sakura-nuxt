import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
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
      '20p': '20%'
    }
  },
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
  ],
})
