const { Elder, Page, getConfig } = require('@elderjs/elderjs');
const config = require('./elder.config');

const elder = new Elder({ context: 'server', ...config });

module.exports = async function renderElderPage(permalink, extraData) {
  await elder.bootstrap();
  let request = elder.serverLookupObject['/recruiting-blog/'];
  console.log(request, 'REQUEST');
  // console.log('elder locations', elder.settings.locations);

  const route = elder.routes['recruitingBlog'];

  const dataHook = {
    hook: 'data',
    name: 'addSomethingToData',
    description: 'Use this hook to add a key to the "data" object on the "home" route. ',
    priority: 50,
    run: async ({ request, data }) => {
      let blogs = data.markdown.blog.map((c) => {
        return {
          slug: c.slug,
          frontmatter: {
            coverImage: c.frontmatter.coverImage,
            categories: c.frontmatter.categories,
            title: c.frontmatter.title,
          },
        };
      });

      if (extraData.search) {
        blogs = blogs.filter((p) => p.frontmatter.title.toLowerCase().includes(extraData.search.toLowerCase()));
      }

      return {
        data: {
          ...data,
          blogs: blogs,
        },
      };
    },
  };

  elder.hooks.push(dataHook);

  request = {
    slug: 'recruiting-blog/',
    postStart: 10,
    postEnd: 20,
    lastPage: 29,
    hasPrevious: false,
    hasNext: true,
    page: 2,
    nextPage: { slug: `recruiting-blog/2?search=${extraData.search}` },
    template: 'recruitingBlog',
    route: 'recruitingBlog',
    type: 'server',
    permalink: '/recruiting-blog/'
  }
  
  const page = new Page({
    ...elder,
    request,
    route,
  });

  console.log(page, 'Page');

  return await page.html();
};
