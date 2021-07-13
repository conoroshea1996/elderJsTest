const SitemapGenerator = require('sitemap-generator');

// create generator
const generator = SitemapGenerator('https://youthful-mccarthy-ab0370.netlify.app/', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml',
  ignore: (url) => {
    return url.includes('fr/');
  },
});

// start the crawler
generator.start();

generator.on('done', () => {
  console.log('ENGLISH DONE');
});

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
