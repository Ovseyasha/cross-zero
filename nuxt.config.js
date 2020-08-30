// import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#023E86', height: '10px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    // apiKey: "AIzaSyAh3TsAlyDIvhoZPUsvAShpkjlPfAd-_Sw",
    // authDomain: "game-library-5babf.firebaseapp.com",
    // databaseURL: "https://game-library-5babf.firebaseio.com",
    // projectId: "game-library-5babf",
    // storageBucket: "game-library-5babf.appspot.com",
    // messagingSenderId: "743977539290",
    // appId: "1:743977539290:web:905c9f0b7bf7e21218b7e3",
    // measurementId: "G-TT58ED8V1Q"
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    font: {
      family: 'Montserrat'
    },
    // icons: 'mdi',
    theme: {
      dark: false,
      default: 'light',
      themes: {
        light: {
          primary: '#023E86',
          accent: '#E8E8E8',
          secondary: '#FD7E31',
          info: '#E8E8E8',
          warning: '#FEB300',
          error: '#FC0D2D',
          success: '#3B4E32'
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
