require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const sirv = require('sirv');
const serverless = require('serverless-http');

const dev = process.env.NODE_ENV === 'development';

const app = express();
app.use(cors());
app.use(compression({ level: 6 }));
app.use(bodyParser.urlencoded({ extended: false }), bodyParser.json());

app.get('/recruiting-blog', (req, res) => {
  // console.log('params', req.params);
  const html = '<h1> Generated On Server </h1>';

  console.log(html);
  res.html(html);
});

exports.handler = serverless(app);
