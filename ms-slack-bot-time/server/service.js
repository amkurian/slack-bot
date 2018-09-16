'use strict';

const express = require('express');
const service = express();

service.get('/service/:location', (req, res, next) => {
    res.json({result: req.params.location});
});

module.exports = service;