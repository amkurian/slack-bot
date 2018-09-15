'use strict';

module.exports = function witClient(token){
  const ask = function ask(message){
    console.log('ask:' + message);
    console.log('token:' + token);
  }
  return {
    ask: ask
  }
}
