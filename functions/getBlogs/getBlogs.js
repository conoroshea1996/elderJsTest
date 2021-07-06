require('dotenv').config();
const renderElderPage = require('../lib/render-elder-page');

exports.handler = async (event) => {
  const data = {
    markdown: {
      blog: [],
    },
  };

  const html = await renderElderPage('/recruiting-blog/', data);

  return {
    statusCode: 200,
    body: html,
  };
};
