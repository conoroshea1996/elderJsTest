const { Elder, Page, getConfig } = require('@elderjs/elderjs');
const config = require('./elder.config');

const elder = new Elder({ context: 'server', ...config });

module.exports = async function renderElderPage(permalink, extraData, isFrenchBlog) {
  await elder.bootstrap();
  let request = elder.serverLookupObject[permalink];

  const template = isFrenchBlog ? 'recruitingBlog' : 'FRrecruitingBlog';
  const route = elder.routes[template];

  const postPerPage = 10;
  let allPagesCount;

  const dataHook = {
    hook: 'data',
    name: 'addSomethingToData',
    description: 'Use this hook to add a key to the "data" object on the "home" route. ',
    priority: 50,
    run: async ({ request, data }) => {
      let blogs;
      if (isFrenchBlog) {
        blogs = data.markdown.FRblog.map((c) => {
          return {
            slug: c.slug,
            frontmatter: {
              coverImage: c.frontmatter.coverImage.toLowerCase(),
              categories: c.frontmatter.categories,
              title: c.frontmatter.title,
            },
          };
        });
      } else {
        blogs = data.markdown.blog.map((c) => {
          return {
            slug: c.slug,
            frontmatter: {
              coverImage: c.frontmatter.coverImage.toLowerCase(),
              categories: c.frontmatter.categories,
              title: c.frontmatter.title,
            },
          };
        });
      }

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

  const slug = isFrenchBlog ? 'fr/blog/' : 'recruiting-blog/';
  request = {
    slug: slug,
    postStart: extraData.page * postPerPage,
    postEnd: extraData.page * postPerPage + postPerPage,
    isLastPage: extraData.page === allPagesCount - 1,
    hasPrevious: extraData.page > 0,
    hasNext: extraData.page !== allPagesCount - 1,
    page: extraData.page,
    previousPage: { slug: `${slug}/${extraData.page - 1}?search=${extraData.search}` },
    nextPage: { slug: `${slug}/${extraData.page + 1}?search=${extraData.search}` },
    template: template,
    route: template,
    type: 'server',
    permalink: permalink,
  };

  const page = new Page({
    ...elder,
    request,
    route,
  });

  return await page.html();
};
