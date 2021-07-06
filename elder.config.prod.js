const path = require('path');
module.exports = {
  server: {
    prefix: '',
  },
  build: {},

  srcDir: './src/',
  distDir: 'public',
  rootDir: path.resolve(__dirname, '../getBlogs'),
  assets: './public/dist/static/',
  public: './public/',
  debug: {
    stacks: false,
    hooks: false,
    performance: false,
    build: false,
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncommenting this would disabled writing your files on build.
  },
  plugins: {},
};
