import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL
  },
  build: {
      transpile: ['@headlessui/vue']
  },
  buildModules: [
    'nuxt-windicss',
    '@unocss/nuxt',
  ],
  meta: {
    script: [
      { src: 'https://media.inyaw.com/css/APlayer/APlayer.min.js' },
      { src: 'https://media.inyaw.com/css/lv2d/live2dcubismcore.min.js' },
      { src: 'https://media.inyaw.com/css/lv2d/pixi.min.js' },
      { src: 'https://media.inyaw.com/css/lv2d/live2dv3.min.js' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://media.inyaw.com/css/APlayer/APlayer.min.css' },
    ],
  },
  css: [
    '~/assets/code.css',
    'highlight.js/styles/vs2015.css',
  ],
  unocss: {
    icons: true
  },
})
