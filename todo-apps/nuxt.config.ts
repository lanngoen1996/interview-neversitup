// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-auth-utils',
  ],
  colorMode: {
    preference: 'light'
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
