require('dotenv').config();
const polka = require('polka');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const sirv = require('sirv');
const dev = process.env.NODE_ENV === 'development';

const { Elder } = require('@elderjs/elderjs');
const elder = new Elder({ context: 'server' });

const server = polka();
server.use(cors());
server.use(compression({ level: 6 }));
server.use(bodyParser.urlencoded({ extended: false }), bodyParser.json());
server.use(elder.server);
server.use(sirv(elder.settings.distDir, { dev }));

exports.handler = function (event, context, callback) {
  console.log(event, 'EVENT');
  console.log(context, 'EVENT');
};
