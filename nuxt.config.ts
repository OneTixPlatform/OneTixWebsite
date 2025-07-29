import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: "https://js.paystack.co/v1/inline.js",
          defer: true,
        },
      ],
    },
  },
  css: ["~/assets/css/main.css", "remixicon/fonts/remixicon.css"],
   mazUi: {
    injectComponents: true,
    injectCss: true,
    injectAos: {
      injectCss: true,
    },
    injectUseToast: {
      position: "top-right",
    },
    injectUseThemeHandler: true,
    devtools: true,
  },
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

  runtimeConfig: {
    public: {
      PAYSTACK_PUBLIC_KEY: process.env.NUXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
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
