'use strict';
const request = require('superagent');
const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);
server.listen();

server.on('listening', function() {
    console.log(`Time is listening on ${server.address().port} in ${service.get('env')} mode.`);

    const announce = () => {
        request.put(`http://127.0.0.1:3001/service/time/${server.address().port}`, (err, res) => {
            console.log(err);
            if(err) console.log("Error connecting to Time");
            console.log(res.body);
        });
    };

    announce();
    setInterval(announce, 15*1000);

});
