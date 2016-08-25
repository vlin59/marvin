const request = require('request');
const moviedbAPI = '9044e2a43187859b81537a54bf7d6874';
var yelp_client_id = 'm21e9M4PbxLrLlE_5EQkMg'
var yelp_client_secret = 'dmvYTj4wuht6TZbhMnfa0KxyRCtCwdbzTpRvjQfuSA50jrmq6yp5hMBopKDxVrKt'

/* All Helper Functions Belong Here
   Use callbacks to return values back to the routes */

// Helper functions for Yelp API
exports.getYelpToken = function(cb){
  var url = 'https://api.yelp.com/oauth2/token';

  const credentials = {
      client_id: yelp_client_id,
      client_secret: yelp_client_secret
  }

  request.post(url, {form: credentials}, function(err, res, body){
    cb(body);
  });

};

exports.queryYelp = function(query, cb){

  var url = "https://api.yelp.com/v3/businesses/search"

  var opts = {
    uri:url,
    qs: {
      term: query.term,
      cll: query.lat + ',' + query.long,
      location: "New York, NY"
    },
    headers: {
    'Authorization': 'Bearer ' + query.token.access_token
    }
  }

  request(opts, function(err, res, body){
    const parsed = JSON.parse(body);
    cb(parsed);
  });
};


exports.searchEventBrite = function(query, lat, long, cb) {
  var options = 'https://www.eventbriteapi.com/v3/events/search/' +
    '?location.latitude=' + lat +
    '&location.longitude=' + long +
    '&location.within=100mi' +
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

exports.searchMovies = function(){
  request('http://api.themoviedb.org/3/movie/now_playing?api_key=+'+moviedbAPI, function(error,res,req){
    cb(JSON.parse(res.body));
  });
}


const genres = {
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 10769,
      "name": "Foreign"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}

