// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode'],

  router: {
    options: {
      middleware: {
        'manifest-route-rule': {
          override: true, // Override the existing middleware
        },
      },
    },
  },

  colorMode: {
    classSuffix: '',
  },
});
