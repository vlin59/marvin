const request = require('request');
const APPID = process.env.WEATHER_APPID || require ('../config/weatherconfig.js').APPID;

//function to get the status of the light on/off
exports.getData = function (lat, lon, cb) {
  lat = lat || '0';
  lon = lon || '0';
  request.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&APPID=' + APPID, function(error, res, body) {
    if (error) throw error;
    cb(body);
  });
}
