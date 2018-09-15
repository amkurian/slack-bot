'use strict';
const service = require('../server/service');
const slackClient = require('../server/slackClient');
const http = require('http');
const server = http.createServer(service);

const token = 'xxxx'
const loglevel = 'debug'
const rtm = slackClient.init(token, loglevel);
rtm.start();

server.listen(3001, () => {
  console.log('server is running on port', server.address().port);
});

