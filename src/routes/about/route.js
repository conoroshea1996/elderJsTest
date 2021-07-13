const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // WARNING: Here be dragons and magic of all sorts.

  // 'data' and 'all' for this route are populated by /plugins/elder-plugin/markdown/index.js
  // This example is designed to show you the power of plugins.

  // If you look in your `elder.config.js` you will see that the plugin is configured as so:
  // 'elderjs-plugin-markdown': {
  //   routes: ['blog'],
  // },

  // This is telling the simple markdown plugin, which route to control.

  all: () => [{ slug: 'about-hirehive' }],
  permalink: '/:slug/',
  data: ({ data, request }) => {
    // params.s for search
    // The data function populates what data should be in available in our Svelte template.
    // Since we will be listing out Elder.js's hooks, we make sure to populate that on the data object so it can be looped through
    // in our Svelte template.
    data.hookInterface = hookInterface;
    data.hookEntityDefinitions = hookEntityDefinitions;

    data.blogs = data.markdown.blog.map((c) => {
      return {
        slug: c.slug,
        frontmatter: {
          coverImage: c.frontmatter.coverImage,
          categories: c.frontmatter.categories,
          title: c.frontmatter.title,
          date: c.frontmatter.date,
        },
      };
    });

    data.blogs = data.blogs.filter((c) => c.frontmatter.categories.includes('hirehive-updates'));

    data.blogs.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

    data.blogs = data.blogs.slice(0, 4);

    return {
      data,
    };
  },
};
