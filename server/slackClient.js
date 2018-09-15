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
    if (!res.intent){
      return rtm.sendMessage('Sorry I didnt get you', message.channel);
    }
    else if(res.intent[0].value == 'time' && res.location ){
      return rtm.sendMessage('Time in '+ res.location[0].value, message.channel);
    }
    else{
      console.log(res);
      return rtm.sendMessage('error', message.channel);
    }
  })
}
function handleOnAuthenticated(rtmStartData) {
  console.log(`Logged in as ${rtmStartData.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
}
// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C1232456';

