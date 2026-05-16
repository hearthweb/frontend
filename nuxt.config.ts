export default defineNuxtConfig({
  ssr: false,

  experimental: {
    viteEnvironmentApi: true,
  },

  modules: ["@nuxtjs/tailwindcss"],
})
