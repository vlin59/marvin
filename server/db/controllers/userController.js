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
  },
  updateUserTodos: function(email, todos, callback) {
    var conditions = { email: email };
    var update = { todos: todos };

    User.update(conditions, update, function(err, data) {
      callback(data);
    });
  },
  getUserTodos: function(email, callback) {
    var conditions = { email: email };
    User.findOne(conditions, function(err, data) {
      callback(data.todos);
    })
  }
}