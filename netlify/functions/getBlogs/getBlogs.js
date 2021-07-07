require('dotenv').config();
const renderElderPage = require('../lib/render-elder-page');

exports.handler = async (event) => {
  // we need to populate the data here manually the markdown hook doesn't seem to populate this data for us
  const data = {};

  const html = await renderElderPage('/recruiting-blog', data);

  return {
    statusCode: 200,
    body: html,
  };
};
