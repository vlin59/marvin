const google = require('googleapis');
const OAuth2Client = google.auth.OAuth2;
const request = require('request');

const CLIENT_ID = '4395616523-imnbjk054edvhhb4hjn57dp0n0927tfn.apps.googleusercontent.com';
const CLIENT_SECRET = 'xyg2EeaLdOpBHgj9IYLWhwy2';
const REDIRECT_URL = 'http://localhost:3000/process';

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

function getAccessToken(oauth2Client, cb) {
  // generate consent page url
  const url = oauth2Client.generateAuthUrl({
    // will return a refresh token
    access_type: 'offline',

    // can be a space-delimited string or an array of scopes
    scope: 'https://www.googleapis.com/auth/calendar'
  });

  cb(url);

}


exports.getGoogleToken = function(code, cb){
  oauth2Client.getToken(code, function(err, tokens) {
    // Now tokens contains an access_token and an optional refresh_token. Save them.
    if(!err) {
      oauth2Client.setCredentials(tokens);

      listEvents(oauth2Client, function(events){
        cb(events);
      });

    }

  });
}

exports.getGoogleAuth = function(cb){

  getAccessToken(oauth2Client, function(url){
    cb(url);
  });

}

function listEvents (auth, cb) {
  const calendar = google.calendar('v3');
  calendar.events.list({
    auth: auth,
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime'
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    const events = response.items;

    cb(events);

  });
}