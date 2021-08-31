export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href:'http://fonts.googleapis.com/css?family=Lato:300,400,700,900', rel:'stylesheet', type:'text/css' },
      { rel: 'stylesheet', href: 'css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'css/animate.css' },
      { rel: 'stylesheet', href: 'css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'css/simple-line-icons.css' },
      { rel: 'stylesheet', href: 'css/owl.carousel.css' },
      { rel: 'stylesheet', href: 'css/owl.transitions.css' },
      { rel: 'stylesheet', href: 'css/flexslider.css' },
      { rel: 'stylesheet', href: 'css/jquery-ui.css' },
      { rel: 'stylesheet', href: 'css/revolution-slider.css' },
      { rel: 'stylesheet', href: 'css/quick_view_popup.css' },
      { rel: 'stylesheet', href: 'css/blog.css' },
      { rel: 'stylesheet', href: 'css/style.css' },
      { rel: 'stylesheet', href: 'css/responsive.css'}
    ],
    script: [
      {
          type: 'text/javascript',
          src: 'js/jquery.min.js',
          body: true
      },
        {
            type: 'text/javascript',
            src: 'js/bootstap.min.js',
            body: true
        },
        {
          type: 'text/javascript',
          src: 'js/owl.carousel.min.js',
          body: true
      },
      {
          type: 'text/javascript',
          src: 'js/jquery.bxslider.js',
          body: true
      },
      {
        type: 'text/javascript',
        src: 'js/revolution-slider.js',
        body: true
    },
    {
        type: 'text/javascript',
        src: 'js/megamenu.js',
        body: true
    },
    {
      type: 'text/javascript',
      src: 'js/mobile-menu.js',
      body: true
  },
  {
      type: 'text/javascript',
      src: 'js/jquery-ui.js',
      body: true
  },
  {
      type: 'text/javascript',
      src: 'js/main.js',
      body: true
  },
  {
      type: 'text/javascript',
      src: 'js/countdown.js',
      body: true
  }
    ] 
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
