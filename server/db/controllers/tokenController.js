const GoogleToken = require('../models/googleToken');
const request = require('request');

exports.storeToken = function(token){

  GoogleToken.findOneAndUpdate({}, {token: token}, {upsert:true}, function(err, doc){
    if(err){ console.log(err); }
  });

}

exports.checkToken = function(cb){

  GoogleToken.findOne({}, function (err, token){
    if(!token) {
      cb(null);
    } else {

      const url = "https://www.googleapis.com/oauth2/v1/tokeninfo"
      var opts = {
        uri:url,
        qs: {
          access_token: token.token.access_token
        }
      }

      request(opts, function(err, res, body){
        const isValidToken = JSON.parse(body);
        if(isValidToken.expires_in && isValidToken.expires_in > 50){
          cb(token.token);
        } else {
          cb(null);
        }
      });
    }

  });

}