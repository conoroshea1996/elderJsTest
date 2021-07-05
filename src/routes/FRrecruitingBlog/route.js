const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  permalink: ({ request, settings }) => {
    if (request.category) {
      return `/fr/blog/${request.category}`;
    } else {
      return '/fr/blog/';
    }
  }, // because we want more control we use a function for our permalink.

  all: async () => [
    { category: 'strategies-de-recrutement' },
    { category: 'culture-de-lentreprise-branding' },
    { category: 'choisir-son-ats' },
    { category: 'mise-en-conformite-donnees' },
    { category: 'produit' },
    { category: 'le-recrutement-et-les-reseaux-sociaux' },
    { category: 'evenements-rh' },
    { category: '' },
  ],

  data: ({ data, request }) => {
    const queryParams = request.req ? request.req.query : {};
    data.blogs = data.markdown.FRblog;
    data.category = request.category;

    // sort blogs by date
    data.blogs = data.blogs.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

    if (data.category.length > 0 && !queryParams.s) {
      data.blogs = data.blogs.filter((p) => p.frontmatter.categories.includes(data.category));
    } else if (data.category && queryParams.s) {
      // check for any category and also the title
      data.blogs = data.blogs.filter(
        (p) =>
          p.frontmatter.categories.includes(data.category) &&
          p.frontmatter.title.toLowerCase().includes(queryParams.s.toLowerCase()),
      );
    } else if (!data.category && queryParams.s) {
      data.blogs = data.blogs.filter((p) => p.frontmatter.title.toLowerCase().includes(queryParams.s.toLowerCase()));
    }

    return {
      data,
      category: request.category,
      x: queryParams,
    };
  },

  layout: 'FrLayout',
};
