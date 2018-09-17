'use strict';
const service = require('../server/service');
const slackClient = require('../server/slackClient');

const http = require('http');
const server = http.createServer(service);

const wit_token = 'XXXX';
const witClient = require('../server/witClient')(wit_token);

const slack_token = 'XXX'
const loglevel = 'debug'

const serviceRegistry = service.get('serviceRegistry');
const rtm = slackClient.init(slack_token, loglevel, witClient, serviceRegistry);
rtm.start();

server.listen(3001, () => {
  console.log('server is running on port', server.address().port);
});
