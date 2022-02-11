import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  publicRuntimeConfig: {
    // API_BASE: "http://tamael.local:46031",
    API_BASE: "https://css-tricks.com",
  },
  css: ["~/assets/css/tailwind.css"],
});
