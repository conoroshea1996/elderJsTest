require('dotenv').config();
const polka = require('polka');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const sirv = require('sirv');
const serverless = require('serverless-http');

const dev = process.env.NODE_ENV === 'development';

const server = polka();
server.use(cors());
server.use(compression({ level: 6 }));
server.use(bodyParser.urlencoded({ extended: false }), bodyParser.json());

app.get('/recruiting-blog', (req, res) => {
  // console.log('params', req.params);
  const html = '<h1> Generated On Serve </h1> ';
  res.html(html);
});

exports.handler = serverless(server);
