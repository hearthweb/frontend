import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  ssr: false,

  experimental: {
    viteEnvironmentApi: true,
  },

  modules: ["@nuxt/icon", "@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],

  auth: {
    // Protect all pages by default
    globalAppMiddleware: true,

    provider: {
      // Use the local provider
      type: "local",

      // Specify the prefix for the routes
      baseURL: "/api/auth",

      // API endpoints for login, logout, and session
      endpoints: {
        signIn: { path: "/login", method: "post" },
        signOut: { path: "/logout", method: "post" },
        getSession: { path: "/me", method: "get" },
      },

      // Specify the login page to redirect to
      pages: {
        login: "/login",
      },
    },
  },
})
