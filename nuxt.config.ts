import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  loading: {
    color: 'blue',
    height: '15px'
  },
  meta: {
    meta: [
      { name: "charset", content: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap",
      },
    ],
  },
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
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: ["vue", "date-fns", "vue3-lazyload", "date-fns/locale"],
    },
  },
  publicRuntimeConfig: {
    API_BASE: process.env.API_BASE,
  },
  css: ["~/assets/css/main.css", "~/assets/css/tailwind.css"],
});
