require('dotenv').config();
const path = require('path');
let markdownPlugin = require('@elderjs/plugin-markdown');
markdownPlugin.config.routes = ['blog', 'textPages', 'FRblog', 'customer'];

module.exports = {
  origin: '', // TODO: update this.
  lang: 'en',
  srcDir: 'src',
  distDir: 'public',
  rootDir: path.resolve(__dirname, '../getBlogs'),
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
    markdownPlugin,
    // '@elderjs/plugin-seo-check': {
    //   display: ['errors'], // If the errors are too verbose remove 'warnings'
    //   //writeLocation: './report.json', // if you want to write a report of errors
    // },
  },
  shortcodes: { closePattern: '}}', openPattern: '{{' },
};
