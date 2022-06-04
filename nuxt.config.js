export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Liam Boudraa - Développeur web passionné',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //Google fonts
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' }
    ],
    script: [
      { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/recaptcha',
    '@nuxtjs/dotenv'
  ],

  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    language: 'fr',   // Recaptcha language (v2)
    mode: 'base',       // Mode: 'base', 'enterprise'
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    version: 2,    // Version
    size: 'normal'        // Size: 'compact', 'normal', 'invisible' (v2)
  },

  serverMiddleware: [
    '~/server-middleware/server.js'
  ],


  styleResources: {
    scss: [
      '~/assets/scss/variables.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
