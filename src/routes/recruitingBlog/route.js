const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: ({ request, settings }) => {
    if (request.category) {
      return `/recruiting-blog/${request.category}`;
    } else {
      return '/recruiting-blog';
    }
  }, // because we want more control we use a function for our permalink.

  all: async () => [
    { category: 'recruiting-strategy' },
    { category: 'culture-branding' },
    { category: 'social-recruiting' },
    { category: 'remote-hiring' },
    { category: 'compliance-and-data' },
    { category: 'infographics' },
    { category: 'hr-events-and-people' },
    { category: 'hirehive-updates' },
    { category: '' },
  ],

  data: ({ data, request }) => {
    // params.s for search
    // The data function populates what data should be in available in our Svelte template.
    // Since we will be listing out Elder.js's hooks, we make sure to populate that on the data object so it can be looped through
    // in our Svelte template.
    data.hookInterface = hookInterface;
    data.hookEntityDefinitions = hookEntityDefinitions;
    data.category = request.category;

    data.blogs = data.markdown.blog;

    // sort blogs by date
    data.blogs = data.blogs.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

    if (data.category.length > 0 && !data.search) {
      data.blogs = data.blogs.filter((p) => p.frontmatter.categories.includes(data.category));
    } else if (data.category.length === 0 && data.search) {
      data.blogs = data.blogs.filter((p) => p.frontmatter.title.toLowerCase().includes(data.search.toLowerCase()));
    }

    return {
      data,
      category: request.category,
    };
  },
};
