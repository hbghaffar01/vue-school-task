export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity', 'nuxt-font-preload'],
  sanity: {
    projectId: 'd4423axh',
    dataset: 'production',
    useCdn: false,
    minimal: true,
  },
  fontPreload: {
    fonts: [
      {
        fontFamily: "Rubik",
        weights: [
          {
            weight: 400,
            sources: [
              {
                url: "/fonts/Rubik-Regular.woff2",
                format: "woff2",
                preload: true,
              },
            ],
          },
          {
            weight: 500,
            sources: [
              {
                url: "/fonts/Rubik-Medium.woff2",
                format: "woff2",
                preload: true,
              },
            ],
          },
          {
            weight: 600,
            sources: [
              {
                url: "/fonts/Rubik-Bold.woff2",
                format: "woff2",
                preload: true,
              },
            ],
          },
          {
            weight: 700,
            sources: [
              {
                url: "/fonts/Rubik-ExtraBold.woff2",
                format: "woff2",
                preload: true,
              },
            ],
          },
        ],
        defaultOptions: { fontDisplay: "swap" },
      },
    ],
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/images/logo.svg" },
        { rel: 'preload', href: '/images/backgrounds/wave-1.svg', as: 'image', type: 'image/svg+xml', media: '(max-width: 1280px)' },
        { rel: 'preload', href: '/images/backgrounds/wave-2.svg', as: 'image', type: 'image/svg+xml', media: '(min-width: 1280px)' },
        { rel: 'preload', href: '/images/backgrounds/wave-3.svg', as: 'image', type: 'image/svg+xml', media: '(max-width: 1280px)' },
        { rel: 'preload', href: '/images/backgrounds/wave-4.svg', as: 'image', type: 'image/svg+xml', media: '(min-width: 1280px)' },
        { rel: 'preload', href: '/images/chevron.svg', as: 'image', type: 'image/svg+xml' },
        { rel: 'preload', href: '/images/hero.svg', as: 'image', type: 'image/svg+xml' },
      ],
    },
  },
});