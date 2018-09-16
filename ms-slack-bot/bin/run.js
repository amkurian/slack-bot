'use strict';
const service = require('../server/service');
const slackClient = require('../server/slackClient');

const http = require('http');
const server = http.createServer(service);

const wit_token = 'VKZ6NZ6XB6V7XAOCSGEQUUXPXUZRZAGZ';
const witClient = require('../server/witClient')(wit_token);

const slack_token = 'xoxb-435552956288-437649977734-jmJiq15JZqe1O8ulKLz9DX3W'
const loglevel = 'debug'
const rtm = slackClient.init(slack_token, loglevel, witClient);
rtm.start();

server.listen(3001, () => {
  console.log('server is running on port', server.address().port);
});
