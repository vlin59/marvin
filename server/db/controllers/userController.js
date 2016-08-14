const User = require('../models/user');

module.exports = {
  createOrFindUser: function(req,res){
                       User.findOne({
                            email: req.body.email,
                          }, function(err, user){
                            if(!user){
                                User.create({
                                  email: req.body.email,
                                  firstName: req.body.firstName,
                                  lastName: req.body.lastName
                                }, function(err, created){
                                  if(created){
                                    res.send(201, JSON.stringify(created));
                                  }
                                });
                              }else{
                                res.send(201, JSON.stringify(user));
                              }
                          });
                     }
}