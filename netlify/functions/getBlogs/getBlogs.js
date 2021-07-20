const renderElderPage = require('./render-elder-page');

exports.handler = async (event) => {
  console.log(event, 'EVENT');

  const isFrenchBlog = event.path.includes('/fr');
  let page = 0;
  const path = event.path.split('/');

  if (isFrenchBlog) {
    if (path[3]) {
      page = Number.parseInt(path[3]);
    }
  } else {
    if (path[2]) {
      page = Number.parseInt(path[2]);
    }
  }

  const pageToRender = isFrenchBlog ? '/fr/blog' : '/recruiting-blog/';

  const html = await renderElderPage(
    pageToRender,
    {
      search: event.queryStringParameters['search'],
      page: page,
    },
    isFrenchBlog,
  );

  return {
    statusCode: 200,
    body: html,
  };
};
