const fetch = require('node-fetch');
const convert_kit_api_key = 'xGUlpDvdVvVXb1UwYnkuug';
const blogPostNewsLetter = {
  //newsletter
  formName: 'blogNewsletter',
  // convert kit form id
  formId: 2123005,
};
const postData = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  return response.json();
};
// https://api.convertkit.com/v3/forms/<form_id>/subscribe
exports.handler = async function (event, context) {
  let body = JSON.parse(event.body);
  let data = body.payload.data;
  let email = data.email;

  email = email.toLowerCase();
  const bodyToSend = {
    api_key: convert_kit_api_key,
    email,
  };

  const requestBody = JSON.stringify(bodyToSend);
  console.log(bodyToSend, 'Request Body');
  try {
    let res = await postData(`https://api.convertkit.com/v3/forms/${blogPostNewsLetter.formId}/subscribe`, requestBody);
    console.log(res, 'SUCCESS');
    return {
      statusCode: 200,
      body: '<h1> *** Thanks Page ***</h1>',
    };
  } catch (error) {
    console.log(error, 'ERROR');
    return {
      statusCode: 404,
    };
  }
};
