const helpers = require('../helpers/helpers');
const google = require('../helpers/google');
const lights = require('../helpers/lights');

module.exports = function(app, express) {

  /* Database Routes */
  // This route will handle all database queries for reminders
  app.post('/api/user/events', function(req, res){
    res.send(200);
  });

  // This route will handle all database queries for reminders
  app.post('/api/user/reminders', function(req, res){
    res.send(200);
  });

  // This route will handle all database queries for interests
  app.post('/api/user/interests', function(req, res){
    res.send(200);
  });

  // This route will handle all API queries for events
  app.post('/api/events', function(req, res){
    res.send(200);
  });

  /* API Routes  */

  app.post('/api/eventbrite', function(req, res){
    var query = req.body.query;
    var category = req.body.category;
    var lat = req.body.lat;
    var long = req.body.long;

    helpers.searchEventBrite(category, query, lat, long, function(data) {
      res.send(200, data);
    });
  });

  // This route will handle all API queries for yelp
  // Pass a type as part of request
  // Example "restaurants", "bars", "clubs" etc
  app.post('/api/yelp', function(req, res){
    res.send(200);
  });

  // This route will handle all API queries for meetup
  app.post('/api/meetup', function(req, res){
    res.send(200);
  });

  // This route will handle all API queries for the weather component
  app.post('/api/weather', function(req, res){
    res.send(200);
  });

  //This route will handle all API queries for the spotify component
  app.post('/api/spotify', function(req, res){
    helpers.searchSpotify(req.body.track, function(data){
      res.send(200, data);
    })
  });

    // This route will handle all API queries for the fitbit/wellness component
  app.post('/api/fitbit', function(req, res){
    res.send(200);
  });

  /* Calendar Routes */
  app.post('/calendarauth', function(req, res){

    const code = req.query.code;

    google.getGoogleAuth(function(url){
      res.send(200, url);
    });
  });

  app.post('/google', function(req, res){
    const code = req.body.params.code;

    google.getGoogleToken(code, function(events){
      res.send(events);
    })

  });

  // This route will handle all API queries for the light status
  app.get('/api/lights', function(req, res){
    lights.getStatus(function (lightstatus) {
      res.send(lightstatus);
    });
  });

  // This route will handle all API queries to toggle lights
  app.post('/api/lights', function(req, res){
    lights.toggle(function (lightstatus) {
      res.send(lightstatus);
    });
  });


}