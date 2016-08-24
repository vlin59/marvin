const EventItem = require('../server/db/models/eventItems');
const User = require('../server/db/models/user');
const request = require('request');
const twilio = require('../server/helpers/twilio');
const mongoose = require('mongoose');

const mongouri = process.env.MONGODB_URI || 'mongodb://localhost/marvin';
mongoose.connect(mongouri);

var uri =  'http://127.0.0.1:3000/api/email'


if(process.env.MONGODB_URI) uri = 'https://marvin-app.herokuapp.com/api/email';

var message = "Beep, boop, it's Marvin, here! Don't forget: "

var now = new Date().getTime();

EventItem.find({}, function(err, events){

if(events.length){
  events.filter(function(event){
    var time = new Date(event.time).getTime();

    //within 30 minutes
    return (now - time <= 1800000);

 }).forEach(function(eventObj, index, arr){
  if(eventObj){

    twilio.sendText('+'+ eventObj.phone, message + eventObj.name);

    request.post(uri ,
      {form: {
        email : eventObj.email,
        msg: message + eventObj.name
        }
      }, function (error, response, body) {
          if (!error) {
              console.log(body)
          }else{
            console.log(error);
          }
      });

      EventItem.findByIdAndRemove(eventObj._id, function(err){
        if(err)console.log(err);
        if(index === arr.length-1){
          mongoose.connection.close();
        }
      });

    }
  });


}else{
  console.log(err);
  mongoose.connection.close();
}
});






