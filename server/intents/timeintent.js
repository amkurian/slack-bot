'use strict';

module.exports.process = function process(intentData, cb){
  if(intentData.intent[0].value != 'time')
    return cb(new Error('Expected time intent but got '+intentData.intent[0].value))
  if(!intentData.location)
    return cb(new Error('Location Not present '+intentData.intent[0].value))
  return cb(false, 'I dont know the time at ' +intentData.location[0].value)
}
