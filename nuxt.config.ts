export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  ssr: false,

  css: ["~/assets/css/main.css"],

  experimental: {
    viteEnvironmentApi: true,
  },
  compatibilityDate: "latest",

  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  },
})
