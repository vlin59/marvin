const GoogleToken = require('../models/googleToken');

exports.storeToken = function(token){

  var token = new GoogleToken({
    token: token
  });

  token.save(function(err){
    if (err) { return next(err); }
  });

  console.log(token);
}

exports.checkToken = function(){


}