require('dotenv').config();
const renderElderPage = require('../lib/render-elder-page');

exports.handler = async (event) => {
  console.log(renderElderPage);
  // const html = await renderElderPage('/recruiting-blog/', { errorMessage: 'You need to login first' });

  const html = 'h1';
  return {
    statusCode: 200,
    body: html,
  };
};
