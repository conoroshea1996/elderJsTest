const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  all: () => [{ slug: '/customers/' }],
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: '/customers/',
  data: ({ data }) => {
    // The data function populates what data should be in available in our Svelte template.
    // Since we will be listing out Elder.js's hooks, we make sure to populate that on the data object so it can be looped through
    // in our Svelte template.
    data.hookInterface = hookInterface;
    data.hookEntityDefinitions = hookEntityDefinitions;

    data.customers = data.markdown.customer;
    data.mainStory = data.markdown.customer.find((c) => c.frontmatter.slug === 'the-water-project');

    data.otherCustomerStories = data.markdown.customer.filter((c) => c.slug !== 'the-water-project');
    return {
      data,
    };
  },
};
