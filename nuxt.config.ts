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
      { src: 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js' },
      { src: 'https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/pixi.js@4.6.1/dist/pixi.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/live2dv3@1.2.2/live2dv3.min.js' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/a3318375/APlayer@1.11/dist/APlayer.min.css' },
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
