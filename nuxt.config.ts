import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL
  },
  modules: [
    '@nuxtjs/dayjs',
  ],
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
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css' },
    ],
  },
  css: [
    '~/assets/github.css',
    '~/assets/sakura.css',
  ],
  unocss: {
    icons: true
  },
  dayjs: {
    locales: ['zh-cn'],
    defaultLocale: ['zh-cn'],
    plugins: ['relativeTime'],
  },
})
