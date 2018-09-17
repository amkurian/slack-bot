'use strict';

const express = require('express');
const service = express();

service.put('/service/:intent/:port', (req, res, next) => {
    const intent = req.params.intent;
    const port = req.params.port;

    const serviceIp = req.connection.remoteAddress.includes('::')
    ? `[${req.connection.remoteAddress}]` : req.connection.remoteAddress;

    res.json({result: `${intent} at ${serviceIp}:${port}`});
});

module.exports = service;

