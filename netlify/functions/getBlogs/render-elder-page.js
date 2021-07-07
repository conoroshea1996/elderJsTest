const { Elder, Page, getConfig } = require('@elderjs/elderjs');
const config = require('./elder.config');

const elder = new Elder({ context: 'server', ...config });

module.exports = async function renderElderPage(permalink, extraData) {
  await elder.bootstrap();
  const request = elder.serverLookupObject['/recruiting-blog/'];
  // console.log('elder locations', elder.settings.locations);

  const route = elder.routes['recruitingBlog'];

  let routeData = { ...extraData };

  const dataHook = {
    hook: 'data',
    name: 'addData',
    description: 'Adds custom data to data object',
    priority: 50,
    run: async ({ request, data }) => {
      routeData = { ...routeData, data };
    },
  };

  elder.hooks.push(dataHook);
  // console.log(elder.hooks, 'ELDER HOOKS');

  console.log(routeData);
  const page = new Page({
    ...elder,
    request,
    route,
    data: routeData,
  });

  return await page.html();
};
