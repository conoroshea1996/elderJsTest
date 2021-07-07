const { Elder, Page, getConfig } = require('@elderjs/elderjs');
const config = require('./elder.config');

const elder = new Elder({ context: 'server', ...config });

module.exports = async function renderElderPage(permalink, extraData) {
  await elder.bootstrap();
  const request = elder.serverLookupObject['/recruiting-blog/'];
  // console.log('elder locations', elder.settings.locations);

  const route = elder.routes['recruitingBlog'];

  const dataHook = {
    hook: 'data',
    name: 'add Extra data',
    description: 'Use this hook to add a key to the "data" object on the "home" route. ',
    priority: 50,
    run: async ({ request, data }) => {
      return {
        data: {
          ...data,
          ...extraData,
        },
      };
    },
  };

  elder.hooks.push(dataHook);

  const page = new Page({
    request,
    route,
    ...elder,
  });

  return await page.html();
};
