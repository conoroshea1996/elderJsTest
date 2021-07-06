require('dotenv').config();
const path = require('path');

module.exports = {
  origin: '', // TODO: update this.
  lang: 'en',
  rootDir: path.resolve(__dirname, '../getBlogs'),
  distDir: '/var/task/functions/getBlogs/public',
  srcDir: '/var/task/functions/getBlogs/src',
  build: {},
  prefix: '', // If you want your site to be built within a sub folder within your `distDir` you can use this.
  server: {},
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

  shortcodes: { closePattern: '}}', openPattern: '{{' },
};
