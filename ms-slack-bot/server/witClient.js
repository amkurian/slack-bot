'use strict';
const request = require('superagent');

function handleWitRepsonse(res) {
  return res.entities;
}

module.exports = function witClient(token) {
  const ask = function ask(message, callback) {
    console.log(message);
    request.get('https://api.wit.ai/message')
      .set('Authorization', 'Bearer ' + token)
      .query({v : '20180531'})
      .query({q: message})
      .end((err, res) => {
        if(err) return callback(err);

        if(res.statusCode !== 200) return callback('Expected status code 200 but got ' + res.statusCode);

        const witResponse = handleWitRepsonse(res.body);
        return callback(null, witResponse);
      })
  }

  return {
    ask: ask
  }
}
