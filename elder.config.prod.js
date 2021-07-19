require('dotenv').config();
const path = require('path');
const markdownPlugin = require('@elderjs/plugin-markdown');
const imagePlugin = require('@elderjs/plugin-images');

module.exports = {
  origin: '', // TODO: update this.
  lang: 'en',
  srcDir: 'src',
  distDir: 'public',
  rootDir: path.resolve(__dirname),
  build: {},
  prefix: '', // If you want your site to be built within a sub folder within your `distDir` you can use this.
  server: {},
  props: {
    hydration: 'html',
    compress: true,
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
    '@elderjs/plugin-images': {
      imageManifest: '/images/ejs-image-manifest.json',
      addVanillaLazy: true, // if you want to disable the lazyload plugin and add your own.
    },
  },
  shortcodes: { closePattern: '@@', openPattern: '@@' },
};
