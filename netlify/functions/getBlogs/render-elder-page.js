const { Elder, Page, getConfig } = require('@elderjs/elderjs');
const config = require('./elder.config');

const elder = new Elder({ context: 'server', ...config });

module.exports = async function renderElderPage(permalink, data = {}) {
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
    priority: 50,
    run: (opts) => {
      return {
        data: { ...opts.data, ...data },
      };
    },
  };

  elder.hooks.push(dataHook);
  // console.log(elder.hooks, 'ELDER HOOKS');

  console.log(data, 'DATA FOR PAGE');
  const page = new Page({
    ...elder,
    request,
    route,
    data: { ...data },
  });

  return await page.html();
};
