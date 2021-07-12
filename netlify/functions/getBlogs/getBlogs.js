require('dotenv').config();
const renderElderPage = require('./render-elder-page');

exports.handler = async (event) => {
  console.log(event, 'EVENT');
  // we need to populate the data here manually the markdown hook doesn't seem to populate this data for us

  const html = await renderElderPage('/recruiting-blog/', { search: event.queryStringParameters['search'] });

  return {
    statusCode: 200,
    body: html,
  };
};
