export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Flitto 기술 블로그 ',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '전 세계 천만 명 이상 사용하는 통합 번역 플랫폼, 플리토의 기술 블로그입니다.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.svg',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/reset.css', '@/assets/css/font.css'],

  styleResources: {
    scss: ['@/assets/scss/colors.scss', '@/assets/scss/screen.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', '@nuxtjs/proxy'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  },

  // port
  server: {
    port: 4000,
  },
}
