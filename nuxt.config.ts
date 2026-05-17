import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  ssr: false,

  experimental: {
    viteEnvironmentApi: true,
  },

  modules: ["@nuxt/icon", "@nuxtjs/tailwindcss"],
})
