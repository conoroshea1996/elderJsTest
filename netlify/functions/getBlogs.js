require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const sirv = require('sirv');
const serverless = require('serverless-http');

const { Elder } = require('@elderjs/elderjs');
const elder = new Elder({ context: 'server' });

const app = express();
app.use(cors());
app.use(compression({ level: 6 }));
app.use(bodyParser.urlencoded({ extended: false }), bodyParser.json());

app.use(elder.server);
app.use(sirv(elder.settings.distDir, { dev: false }));

app.get('/recruiting-blog', (req, res) => {
  // console.log('params', req.params);
  const html = '<h1> Generated On Server </h1>';

  res.send(html);
});

exports.handler = serverless(app);
