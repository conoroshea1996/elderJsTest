require('dotenv').config();

exports.handler = function (event, context, callback) {
  console.log(event, 'Event');
  console.log(context, 'Context');
};
