require('dotenv').config();
const renderElderPage = require('./render-elder-page');

exports.handler = async (event) => {
  console.log(event, 'EVENT');
  const html = await renderElderPage('/recruiting-blog/', { search: event.queryStringParameters['search'] });

  return {
    statusCode: 200,
    body: html,
  };
};
