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
    name: 'addSomethingToData',
    description: 'Use this hook to add a key to the "data" object on the "home" route. ',
    priority: 50,
    run: async ({ request, data }) => {
      console.log(data, 'DATA');
      let allBlogs = data.markdown.blog;

      if (extraData.search) {
        allBlogs = allBlogs.filter((p) => p.frontmatter.title.toLowerCase().includes(extraData.search.toLowerCase()));
      }

      console.log(allBlogs, 'ALL BLOGS SEARCH ');
      return {
        data: {
          ...data,
          searchBlogs: allBlogs,
        },
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
