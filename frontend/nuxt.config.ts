// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'JuanaFinder',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined' },
        //{ rel: "icon", type: "image/x-icon", href: ".png" }
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
})
