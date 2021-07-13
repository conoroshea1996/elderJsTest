const SitemapGenerator = require('sitemap-generator');

// create generator

// create generator
const Frenchgenerator = SitemapGenerator('https://youthful-mccarthy-ab0370.netlify.app/fr', {
  stripQuerystring: false,
  filepath: './public/fr/sitemap.xml',
  ignore: (url) => {},
});

Frenchgenerator.start();

generator.on('done', () => {
  console.log('FRENCH DONE');
});
