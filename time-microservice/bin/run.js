'use strict';

const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);
server.listen(3010);

server.on('listening', function() {
    console.log(`Time is listening on ${server.address().port} in ${service.get('env')} mode.`);
});
