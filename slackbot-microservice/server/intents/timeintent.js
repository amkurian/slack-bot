'use strict';

const request = require('superagent');

module.exports.process = function process(intentData, cb){
  if(intentData.intent[0].value != 'time')
    return cb(new Error('Expected time intent but got '+intentData.intent[0].value))
  if(!intentData.location)
    return cb(new Error('Location Not present '+intentData.intent[0].value))

  const location = intentData.location[0].value
  request.get(`http://localhost:3010/service/${location}`, (err, response) => {
    if(err || response.statusCode != 200 || !response.body){
      console.log(err);
    }
    return cb(false, `In ${location} it is ${response.body.result}`);
  });
}
