require('dotenv').config();
const renderElderPage = require('../lib/render-elder-page');

const { Elder, Page } = require('@elderjs/elderjs');
const elder = new Elder({ context: 'server', configOptions: config });

exports.handler = async (event) => {
  const html = await renderElderPage('/recruiting-blog/', { errorMessage: 'You need to login first' });
  await elder.bootstrap();
  return {
    statusCode: 200,
    body: html,
  };
};
