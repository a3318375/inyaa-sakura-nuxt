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
  ],
  css: [
    '~/assets/github.css',
    '~/assets/sakura.css',
  ],
  dayjs: {
    locales: ['zh-cn'],
    defaultLocale: ['zh-cn'],
    plugins: ['relativeTime'],
  },
})
