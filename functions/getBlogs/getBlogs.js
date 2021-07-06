require('dotenv').config();
const renderElderPage = require('../lib/render-elder-page');

exports.handler = async (event) => {
  const html = await renderElderPage('/recruiting-blog/', { errorMessage: 'You need to login first' });
  return {
    statusCode: 200,
    body: html,
  };
};
