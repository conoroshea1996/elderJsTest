const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: ({ request, settings }) => {
    return `${request.slug}`;
  }, // because we want more control we use a function for our permalink.

  all: async (request) => {
    let categories = [
      { category: 'recruiting-strategy' },
      { category: 'culture-branding' },
      { category: 'social-recruiting' },
      { category: 'remote-hiring' },
      { category: 'compliance-and-data' },
      { category: 'infographics' },
      { category: 'hr-events-and-people' },
      { category: 'hirehive-updates' },
    ];

    const postPerPage = 10;
    let slugList = [];

    // first create pages for all the blogs
    const allBlogs = request.data.markdown.blog;
    let pages = Math.floor(allBlogs.length / postPerPage);
    let remainder = allBlogs.length % postPerPage;
    if (remainder > 0) pages += 1;
    if (pages > 1) {
      for (let i = 0; i < pages; i++) {
        if (i === 0) {
          slugList.push({
            slug: `recruiting-blog/`,
            postStart: 0,
            postEnd: postPerPage,
            lastPage: pages,
            hasPrevious: false,
            hasNext: true,
            nextPage: { slug: `recruiting-blog/${i + 2}` },
            template: 'recruitingBlog',
          });
        } else {
          slugList.push({
            slug: `recruiting-blog/${i + 1}`,
            page: i + 1,
            postStart: i * postPerPage,
            postEnd: i * postPerPage + postPerPage,
            isLastPage: i === pages - 1,
            hasPrevious: true,
            previousPage: { slug: `recruiting-blog/${i - 1 === 0 ? '' : i}` },
            hasNext: i !== pages - 1,
            nextPage: { slug: `recruiting-blog/${i + 1 === pages ? '' : i + 2}` },
            template: 'recruitingBlog',
          });
        }
      }
    } else {
      slugList.push({
        slug: `recruiting-blog/`,
        postStart: 0,
        postEnd: postPerPage,
        isLastPage: true,
        hasPrevious: false,
        hasNext: false,
        template: 'recruitingBlog',
      });
    }

    // paginate all the blogs for each category 
    categories.forEach((c) => {
      const allBlogs = request.data.markdown.blog.filter((p) => p.frontmatter.categories.includes(c.category));
      let pages = Math.floor(allBlogs.length / postPerPage);
      let remainder = allBlogs.length % postPerPage;
      if (remainder > 0) pages += 1;
      if (pages > 1) {
        for (let i = 0; i < pages; i++) {
          if (i === 0) {
            slugList.push({
              slug: `recruiting-blog/${c.category}`,
              postStart: 0,
              postEnd: postPerPage,
              lastPage: pages,
              hasPrevious: false,
              hasNext: true,
              nextPage: { slug: `recruiting-blog/${c.category}/${i + 2}` },
              template: 'recruitingBlog',
              category: c.category,
            });
          } else {
            slugList.push({
              slug: `recruiting-blog/${c.category}/${i + 1}`,
              page: i + 1,
              postStart: i * postPerPage,
              postEnd: i * postPerPage + postPerPage,
              isLastPage: i === pages - 1,
              hasPrevious: true,
              previousPage: { slug: `recruiting-blog/${c.category}/${i - 1 === 0 ? '' : i}` },
              hasNext: i !== pages - 1,
              nextPage: { slug: `recruiting-blog/${c.category}/${i + 1 === pages ? '' : i + 2}` },
              template: 'recruitingBlog',
              category: c.category,
            });
          }
        }
      } else {
        slugList.push({
          slug: `recruiting-blog/${c.category}`,
          postStart: 0,
          postEnd: postPerPage,
          isLastPage: true,
          hasPrevious: false,
          hasNext: false,
          template: 'recruitingBlog',
          category: c.category,
        });
      }
    });

    return slugList;
  },

  data: ({ data, request, helpers }) => {
    // params.s for search
    // The data function populates what data should be in available in our Svelte template.
    // Since we will be listing out Elder.js's hooks, we make sure to populate that on the data object so it can be looped through
    // in our Svelte template.
    data.hookInterface = hookInterface;
    data.hookEntityDefinitions = hookEntityDefinitions;
    data.category = request.category ? request.category : '';

    data.blogs = data.markdown.blog.map((c) => {
      return {
        slug: c.slug,
        frontmatter: {
          coverImage: c.frontmatter.coverImage.toLowerCase(),
          categories: c.frontmatter.categories,
          title: c.frontmatter.title,
          date: c.frontmatter.date,
        },
      };
    });

    // sort blogs by date
    data.blogs = data.blogs.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

    if (data.category.length > 0 && !data.search) {
      data.blogs = data.blogs.filter((p) => p.frontmatter.categories.includes(data.category));
    }

    data.pageSize = 10;

    return {
      data,
      helpers,
      category: request.category,
    };
  },
};
