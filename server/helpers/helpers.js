const request = require('request');
/* All Helper Functions Belong Here
   Use callbacks to return values back to the routes */

// Helper functions for Yelp API
exports.getYelpToken = function(cb){
}

exports.queryYelp = function(query, cb){
}

exports.searchEventBrite = function(category, query, lat, long, cb) {
  var options = 'https://www.eventbriteapi.com/v3/events/search/' +
    '?location.latitude=' + lat +
    '&location.longitude=' + long +
    '&location.within=100mi' +
    '&categories=' + category +
    '&q=' + query +
    '&token=UQOCU57TT67WA4W7V6RE';

    request(options, function(error, res, req) {
      cb(JSON.parse(res.body));
  });
}


exports.searchSpotify = function(state, cb){
  var options = 'https://api.spotify.com/v1/search/?q=' + state +
  '&type=track';

  request(options, function(err, res, req) {
    cb(res.body);
  });
}

exports.searchMoviesDB = function(cb){
  request('http://api.themoviedb.org/3/movie/now_playing?api_key=9044e2a43187859b81537a54bf7d6874',
    function(error,res,res){
      cb(JSON.parse(res.body));
    });
}

