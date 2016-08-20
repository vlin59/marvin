const morgan = require('morgan');
const bodyParser = require('body-parser');
var stormpath = require('express-stormpath');
const path = require('path');
const mailer = require('express-mailer');
const FROM_EMAIL = process.env.FROM_EMAIL || require('../config/mailerconfig.js').FROM;
const EMAILPASSWORD = process.env.EMAIL_PASSWORD || require('../config/mailerconfig.js').PASS;


module.exports = function (app, express) {
  app.set('views', __dirname + '/../views');
  app.set('view engine', 'jade');
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
  mailer.extend(app, {
    from:  FROM_EMAIL,
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
      user: FROM_EMAIL,
      pass: EMAILPASSWORD
    }
  });
};