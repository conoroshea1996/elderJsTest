const renderElderPage = require('./render-elder-page');

exports.handler = async (event) => {
  console.log(event, 'EVENT');

  const path = event.path.split('/');
  let page;
  if (path[2]) {
    page = Number.parseInt(path[2]);
  } else {
    page = 0;
  }

  const html = await renderElderPage('/recruiting-blog/', {
    search: event.queryStringParameters['search'],
    page: page,
  });

  return {
    statusCode: 200,
    body: html,
  };
};
