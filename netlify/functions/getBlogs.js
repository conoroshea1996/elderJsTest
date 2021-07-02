require('dotenv').config();
const axios = require('axios');

exports.handler = function (event, context, callback) {
  const s = event.queryStringParameters.s;

  console.log(context, 'CONTEXT');
  console.log(event, 'EVENT');
  console.log(callback, 'Callback');

  axios
    .get(`https://youthful-mccarthy-ab0370.netlify.app/recruiting-blog?s=${s}`)
    .then((body) => {
      return {
        statusCode: 200,
        body: body.data,
      };
    })
    .catch((ex) => callback(ex));
};
