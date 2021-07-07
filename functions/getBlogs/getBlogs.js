require('dotenv').config();
const renderElderPage = require('../lib/render-elder-page');

exports.handler = async (event) => {
  console.log(event, 'EVENT');

  const html = await renderElderPage('/recruiting-blog/');

  return {
    statusCode: 200,
    body: html,
  };
};
