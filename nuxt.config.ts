import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["maz-ui/nuxt", "@nuxtjs/color-mode", "nuxt-vuefire"],
  colorMode: {
    classSuffix: "",
    preference: "light", // or 'dark'
    fallback: "light",
  },
  vuefire: {
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
    },
    auth: {
      enabled: true,
      sessionCookies: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
