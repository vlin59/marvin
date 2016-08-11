const morgan = require('morgan');
const bodyParser = require('body-parser');
var stormpath = require('express-stormpath');
const path = require('path');

module.exports = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
  app.use(stormpath.init(app, {
    web: {
      spa: {
        enabled: true,
        view: path.join(__dirname, '/../../client', 'index.html')
      }
    }
  }));
};