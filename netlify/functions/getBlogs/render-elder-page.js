const { Elder, Page, getConfig } = require('@elderjs/elderjs');
const config = require('./elder.config');

const elder = new Elder({ context: 'server', ...config });

module.exports = async function renderElderPage(permalink, extraData) {
  await elder.bootstrap();
  let request = elder.serverLookupObject['/recruiting-blog/'];
  console.log(request, 'REQUEST');
  // console.log('elder locations', elder.settings.locations);

  const route = elder.routes['recruitingBlog'];

  const postPerPage = 10;
  let allPagesCount;

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
            coverImage: c.frontmatter.coverImage.toLowerCase(),
            categories: c.frontmatter.categories,
            title: c.frontmatter.title,
          },
        };
      });

      if (extraData.search) {
        blogs = blogs.filter((p) => p.frontmatter.title.toLowerCase().includes(extraData.search.toLowerCase()));
      }

      allPagesCount = Math.floor(blogs.length / postPerPage);
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
    postStart: extraData.page * postPerPage,
    postEnd: extraData.page * postPerPage + postPerPage,
    isLastPage: extraData.page === allPagesCount - 1,
    hasPrevious: extraData.page > 0,
    hasNext: extraData.page !== allPagesCount - 1,
    page: extraData.page,
    previousPage: { slug: `recruiting-blog/${extraData.page - 1}?search=${extraData.search}` },
    nextPage: { slug: `recruiting-blog/${extraData.page + 1}?search=${extraData.search}` },
    template: 'recruitingBlog',
    route: 'recruitingBlog',
    type: 'server',
    permalink: '/recruiting-blog/',
  };

  const page = new Page({
    ...elder,
    request,
    route,
  });

  return await page.html();
};
