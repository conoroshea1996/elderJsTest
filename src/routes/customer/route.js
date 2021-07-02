const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  all: () => [],
  permalink: '/customers/:slug/',

  data: ({ data, request }) => {
    data.hookInterface = hookInterface;
    data.hookEntityDefinitions = hookEntityDefinitions;

    return {
      data,
    };
  },
};
