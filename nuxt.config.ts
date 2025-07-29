import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "remixicon/fonts/remixicon.css"],
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "maz-ui/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-vuefire",
    "nuxt-qrcode",
  ],
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
  qrcode: {
    options: {
      // variant: 'pixelated',
      // OR
      variant: {
        inner: "circle",
        marker: "rounded",
        pixel: "rounded",
      },
      radius: 1,
      // blackColor: 'currentColor', // 'var(--ui-text-highlighted)' if you are using `@nuxt/ui` v3
      // whiteColor: 'transparent',  // 'var(--ui-bg)'
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
