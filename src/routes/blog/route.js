module.exports = {
  // WARNING: Here be dragons and magic of all sorts.

  // 'data' and 'all' for this route are populated by /plugins/elder-plugin/markdown/index.js
  // This example is designed to show you the power of plugins.

  // If you look in your `elder.config.js` you will see that the plugin is configured as so:
  // 'elderjs-plugin-markdown': {
  //   routes: ['blog'],
  // },

  // This is telling the simple markdown plugin, which route to control.

  data: ({ data, request }) => {
    const numberofReadAlsos = 3;
    const blogIndex = data.markdown.blog.findIndex((p) => p.frontmatter.title === request) + 1;
    data.ReadAlsoBlogs = data.markdown.blog.slice(blogIndex, blogIndex + numberofReadAlsos);

    return { data };
  },
  all: () => [],
  permalink: '/:slug/',
};
