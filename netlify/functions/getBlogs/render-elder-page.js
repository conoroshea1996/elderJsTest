const { Elder, Page, getConfig } = require('@elderjs/elderjs');
const config = require('./elder.config');

const elder = new Elder({ context: 'server', ...config });

module.exports = async function renderElderPage(permalink, extraData) {
  await elder.bootstrap();
  const request = elder.serverLookupObject['/recruiting-blog/'];
  console.log(request, 'Request');
  // console.log('elder locations', elder.settings.locations);

  const route = elder.routes['recruitingBlog'];

  console.log(route, 'ROUTE');

  const dataHook = {
    hook: 'data',
    name: 'addData',
    description: 'Adds custom data to data object',
    priority: 1,

    run: async ({ request, data }) => {
      return {
        data: {
          ...data,
          search: 'top',
        },
      };
    },
  };

  elder.hooks.push(dataHook);
  // console.log(elder.hooks, 'ELDER HOOKS');

  const page = new Page({
    ...elder,
    request,
    route,
  });

  return await page.html();
};
