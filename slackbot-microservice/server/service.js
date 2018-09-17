'use strict';

const express = require('express');
const service = express();
const ServiceRegistry = require('./serviceRegistry');
const serviceRegistry = new ServiceRegistry();

service.set('serviceRegistry', serviceRegistry);

service.put('/service/:intent/:port', (req, res, next) => {
    const intent = req.params.intent;
    const port = req.params.port;

    const serviceIp = req.connection.remoteAddress.includes('::')
    ? `[${req.connection.remoteAddress}]` : req.connection.remoteAddress;

    serviceRegistry.add(intent, serviceIp, port)
    res.json({result: `${intent} at ${serviceIp}:${port}`});
});

module.exports = service;

