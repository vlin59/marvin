var twilioConfig = require ('../config/config.js');
var client = require('twilio')(twilioConfig.SID , twilioConfig.TOKEN);

exports.sendText =  function(number,message){

  client.sendMessage({
    //deliver to
    to: number,
    //our number
    from: '+14086484246',
    //msg
    body: message
  }, function(err, responseData){
    if(!err){
      console.log(responseData.from);
      console.log(responseData.body);
    }
  });
}