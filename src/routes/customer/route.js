const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  all: () => [],
  permalink: '/customers/:slug/',

  data: ({ data, request }) => {
    data.hookInterface = hookInterface;
    data.hookEntityDefinitions = hookEntityDefinitions;

    const customerStoryIndex = data.markdown.customer.findIndex((c) => c.slug === request.slug);
    console.log(customerStoryIndex);

    data.previousStory = data.markdown.customer[customerStoryIndex - 1];
    data.nextStory = data.markdown.customer[customerStoryIndex + 1];

    return {
      data,
    };
  },
};
