const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  permalink: ({ request }) => {
    return `${request.slug}`;
  }, // because we want more control we use a function for our permalink.

  all: async (request) => {
    let categories = [
      { category: 'strategies-de-recrutement' },
      { category: 'culture-de-lentreprise-branding' },
      { category: 'choisir-son-ats' },
      { category: 'mise-en-conformite-donnees' },
      { category: 'produit' },
      { category: 'le-recrutement-et-les-reseaux-sociaux' },
      { category: 'evenements-rh' },
    ];

    const postPerPage = 10;
    let slugList = [];

    // first create pages for all the blogs
    const allBlogs = request.data.markdown.FRblog;
    let pages = Math.floor(allBlogs.length / postPerPage);
    let remainder = allBlogs.length % postPerPage;
    if (remainder > 0) pages += 1;
    if (pages > 1) {
      for (let i = 0; i < pages; i++) {
        if (i === 0) {
          slugList.push({
            slug: `fr/blog/`,
            postStart: 0,
            postEnd: postPerPage,
            lastPage: pages,
            hasPrevious: false,
            hasNext: true,
            nextPage: { slug: `fr/blog/${i + 2}` },
            template: 'recruitingBlog',
          });
        } else {
          slugList.push({
            slug: `fr/blog/${i + 1}`,
            page: i + 1,
            postStart: i * postPerPage,
            postEnd: i * postPerPage + postPerPage,
            isLastPage: i === pages - 1,
            hasPrevious: true,
            previousPage: { slug: `fr/blog/${i - 1 === 0 ? '' : i}` },
            hasNext: i !== pages - 1,
            nextPage: { slug: `fr/blog/${i + 1 === pages ? '' : i + 2}` },
            template: 'recruitingBlog',
          });
        }
      }
    } else {
      slugList.push({
        slug: `fr/blog/`,
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
      const allBlogs = request.data.markdown.FRblog.filter((p) => p.frontmatter.categories.includes(c.category));
      let pages = Math.floor(allBlogs.length / postPerPage);
      let remainder = allBlogs.length % postPerPage;
      if (remainder > 0) pages += 1;
      if (pages > 1) {
        for (let i = 0; i < pages; i++) {
          if (i === 0) {
            slugList.push({
              slug: `fr/blog/${c.category}`,
              postStart: 0,
              postEnd: postPerPage,
              lastPage: pages,
              hasPrevious: false,
              hasNext: true,
              nextPage: { slug: `fr/blog/${c.category}/${i + 2}` },
              template: 'recruitingBlog',
              category: c.category,
            });
          } else {
            slugList.push({
              slug: `fr/blog/${c.category}/${i + 1}`,
              page: i + 1,
              postStart: i * postPerPage,
              postEnd: i * postPerPage + postPerPage,
              isLastPage: i === pages - 1,
              hasPrevious: true,
              previousPage: { slug: `fr/blog/${c.category}/${i - 1 === 0 ? '' : i}` },
              hasNext: i !== pages - 1,
              nextPage: { slug: `fr/blog/${c.category}/${i + 1 === pages ? '' : i + 2}` },
              template: 'recruitingBlog',
              category: c.category,
            });
          }
        }
      } else {
        slugList.push({
          slug: `fr/blog/${c.category}`,
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
  data: ({ data, request }) => {
    data.blogs = data.markdown.FRblog;
    data.category = request.category ? request.category : '';

    data.blogs = data.markdown.FRblog.map((c) => {
      return {
        slug: c.slug,
        frontmatter: {
          coverImage: c.frontmatter.coverImage,
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
      category: request.category,
    };
  },

  layout: 'FrLayout',
};
