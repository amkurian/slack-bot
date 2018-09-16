'use strict';

const { RTMClient } = require('@slack/client');
let rtm = null;
let nlp = null;

module.exports.init = function slackClient(token, loglevel, nlpClient){
  rtm = new RTMClient(token);
  nlp = nlpClient;
  rtm.on('message', handleOnMessage);
  return rtm;
}

function handleOnMessage(message){
  nlp.ask(message.text, (err, res) => {
    if(err){
    console.log(err);
    return
    }
    console.log(res);
    try {
       if(!res.intent || !res.intent[0] || !res.intent[0].value){
          console.log(res);
          throw new Error('Could not extract intent')
       }

       const intent = require('./intents/' + res.intent[0].value + 'intent');
       intent.process(res, function(error, response){
          if(error){
            console.log(error.message);
            return;
          }

          return rtm.sendMessage(response, message.channel);
       })

    }
    catch(err){
      console.log(err);
      console.log(res);
      return rtm.sendMessage('error', message.channel);
    }
      // }
    })
 }



