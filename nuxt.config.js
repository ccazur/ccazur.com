const {join} = require('path')
const json = require(__dirname+'/assets/locales/i18n.json');



module.exports = {
  /*
  ** Build configuration
  */
  build: {
    // publicPath: 'https://maison-mayons.jlbimmobilier.com'
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    titleTemplate: 'CCAZUR FRANCE ®',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CCAZUR FRANCE, You Think, We Do...' },

      { hid: 'msapplication-TileColor', name: "msapplication-TileColor", content: "#ffffff" },
      { hid: 'msapplication-TileImage', name: "msapplication-TileImage", content: "/img/icons/mstile-144x144.png" },
      { hid: 'msapplication-config', name: "msapplication-config", content: "/img/icons/browserconfig.xml" },
      { hid: 'theme-color', name: "theme-color", content: "#ffffff" },

      { hid: 'og:image:width', property: "og:image:width", content: "279" },
      { hid: 'og:image:height', property: "og:image:height", content: "279" },
      //Filled in index.vue : { property: "og:description", content: "Maison 239 m2 aux Mayons" },
      { hid: 'og:title', property: "og:title", content: "Maison Mayons - JLB Immobilier" },
      { hid: 'og:url', property: "og:url", content: "https://maison-mayons.jlbimmobilier.com" },
      { hid: 'og:image', property: "og:image", content: "https://maison-mayons.jlbimmobilier.com/img/icons/og-image.jpg" },
      
      { hid: 'google-site-verification', property: "google-site-verification", content: "89V1Qptr6XhW9mmCge2fxz-XWKGHDO4tN-f271PDnBE" },

    ],
    link: [
      { rel:"apple-touch-icon", sizes: "180x180", href: "/img/icons/apple-touch-icon.png" },
      { rel:"icon", type: "image/png", sizes: "32x32", href: "/img/icons/favicon-32x32.png" },
      { rel:"icon", type: "image/png", sizes: "16x16", href: "/img/icons/favicon-16x16.png" },
      { rel:"manifest", href: "/img/icons/site.webmanifest" },
      { rel:"mask-icon", href: "/img/icons/safari-pinned-tab.svg", color: "#010f41" },
      { rel:"shortcut icon", href: "/img/icons/favicon.ico" },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#dcd7af'
  },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#820808'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics'],
    ['nuxt-i18n', {
      locales: [
        { code: 'en', iso: 'en-EN'},
        { code: 'fr', iso: 'fr-FR'}
      ],
      defaultLocale: 'en',
      strategy: 'prefix',
      rootRedirect: 'fr',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          'fr': json[0][0],
          'en': json[1][0]
        }
      }
    }]
  ],

  'google-analytics': {
    id: 'UA-13022962-4'
  },

  router: {
    base: '/'
  },

  plugins: [

  ],

  generate: {
    routes: ['/', '/fr', '/en', '/fr/services', '/en/services', '/fr/contact', '/en/contact','/fr/legalnotice', '/en/legalnotice' ],
    minify: {
      removeEmptyAttributes: false,
      sortClassName: false
    }
  },

  css: [
    {src: join(__dirname, 'assets/scss/main.scss'), lang: 'sass'},
  ]
}
