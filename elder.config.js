require('dotenv').config();
module.exports = {
  origin: '', // TODO: update this.
  lang: 'en',
  srcDir: 'src',
  distDir: 'public',
  rootDir: process.cwd(),
  build: {},
  prefix: '', // If you want your site to be built within a sub folder within your `distDir` you can use this.
  server: {},
  props: {
    hydration: 'hybrid',
    compress: false,
  },
  debug: {
    stacks: false, // output details of the stack consolidation process.
    hooks: false, // outputs the details of each hook as they are run.
    performance: false, // outputs a full performance report of how long it took to run each page.
    build: false, // gives additional details about the build process.
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncomment this hook to disabled writing your files during build.
  },
  plugins: {
    '@elderjs/plugin-markdown': {
      routes: ['blog', 'textPages', 'FRblog', 'customer'],
    },
    '@elderjs/plugin-browser-reload': {
      // this reloads your browser when nodemon restarts your server.
      port: 8080,
      reload: false, // if you are having issues with reloading not working, change to true.
    },
    '@elderjs/plugin-images': {
      debug: false,
      cssString: false,
      //comonent out when deploying to netlify so it doesn't make the images again takes ages
      // folders: [
      //   {
      //     src: 'assets/images/*', // glob of where your original images are. Relative to rootDir/process.cwd() defined in your elder.config.js. Careful with **.
      //     output: 'images/', // where files should be put within the distDir defined in your elder.config.js.
      //   },
      //   {
      //     src: 'assets/fr/images/*', // glob of where your original images are. Relative to rootDir/process.cwd() defined in your elder.config.js. Careful with **.
      //     output: 'fr/images/', // where files should be put within the distDir defined in your elder.config.js.
      //   },
      //   {
      //     src: 'assets/customers/images/*', // glob of where your original images are. Relative to rootDir/process.cwd() defined in your elder.config.js. Careful with **.
      //     output: 'customers/images/', // where files should be put within the distDir defined in your elder.config.js.
      //   },
      // ],
      imageManifest: '/images/ejs-image-manifest.json',
      addVanillaLazy: true, // if you want to disable the lazyload plugin and add your own.
      widths: [1280, 768, 576, 400], // Sizes the images will be resized to.
    },
    '@elderjs/plugin-sitemap': {
      origin: 'https://youthful-mccarthy-ab0370.netlify.app',
      exclude: [], // an array of permalinks or permalink prefixes. So you can do ['500'] and it will match /500**
      routeDetails: {},
      lastUpdate: {}, // configurable last update for each route type.
    },

    // '@elderjs/plugin-seo-check': {
    //   display: ['errors'], // If the errors are too verbose remove 'warnings'
    //   //writeLocation: './report.json', // if you want to write a report of errors
    // },
  },
  shortcodes: { closePattern: '@@', openPattern: '@@' },
};
