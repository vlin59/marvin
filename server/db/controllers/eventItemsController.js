const EventItem = require('../models/eventItems');
const User = require('../models/user');

module.exports = {

  addEventItem: function(req, res){

    User.findOne({
      email: req.body.email
    }, function(err, user){

      if(user){
          var savedEmail = req.body.newEmail;
          if(!savedEmail){
            savedEmail = req.body.email;
          }

          EventItem.create({
               name: req.body.reminder,
               time: req.body.time,
               phone: Number(req.body.num),
               email: savedEmail

          }, function(err, eventItem){

            if(eventItem){
              user.eventItems.push(eventItem);
              user.save();
              console.log(eventItem);
              res.send(201, JSON.stringify(eventItem));
            }else{
              console.log(err);
            }

          });

      }

    });

  }

}