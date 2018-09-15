'use strict';

const { RTMClient } = require('@slack/client');
let rtm = null;


module.exports.init = function slackClient(token, loglevel){
  rtm = new RTMClient(token);
  rtm.on('message', handleOnMessage);
  return rtm;
}

function handleOnMessage(message){
  console.log(message.text);
  // This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
  return rtm.sendMessage('test', message.channel);
}
function handleOnAuthenticated(rtmStartData) {
  console.log(`Logged in as ${rtmStartData.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
}
// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C1232456';

