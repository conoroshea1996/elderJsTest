const { Elder, Page, getConfig } = require('@elderjs/elderjs');
const config = require('./elder.config');

console.log(config);
const elder = new Elder({ context: 'server', ...config });
console.log(elder);

module.exports = async function renderElderPage(permalink, data = {}) {
  await elder.bootstrap();
  const request = elder.serverLookupObject[permalink];

  console.log('elder locations', elder.settings.locations);

  const route = elder.routes[request.route];

  const dataHook = {
    hook: 'data',
    name: 'addData',
    description: 'Adds custom data to data object',
    priority: 50,
    run: (opts) => {
      console.log(opts, 'OPTS');
      return {
        data: { ...opts.data, ...data },
      };
    },
  };

  elder.hooks.push(dataHook);

  const page = new Page({
    ...elder,
    request,
    route,
  });

  return await page.html();
};
