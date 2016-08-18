'use strict';

var express   = require('express');
var gpio      = require('pi-gpio');

var app       = express();

// input port objects for our example
var outputs = [{ pin: '16', gpio: '23', value: null }];

// -----------------------------------------------------------------------
// open GPIO ports
for (var i in outputs) {
  console.log('opening GPIO port ' + outputs[i].gpio + ' on pin ' + outputs[i].pin + ' as input');
  gpio.open(outputs[i].pin, 'output' , function (err) {
    if (err) {
      throw err;
    }
  }); // gpio.open
} // if



// Express route for incoming requests for a single input
app.post('/inputs/:id', function (req, res) {
  console.log('received API post request for port number ' + req.params.id);
  //iterate through each pin to check if id matches gpio pin
  for (var i in outputs) {
    //if it matches, it will toggle the pin on or off
    if ((req.params.id === outputs[i].gpio)) {
      if (outputs[i].value === '0' || outputs[i].value === null) {
	    gpio.write(outputs[i].pin, 1, function(err) {
          if (err) {
            throw err;
          }
          gpio.read(outputs[i].pin, function (err, value) {
            if (err) {
              throw err;
            }
            console.log('read pin ' + outputs[i].pin + ' value = ' + value);
            // update the outputs object
            outputs[i].value = value.toString(); // store value as a string
            res.send(outputs[i]);
          });
        });
      } else {
	    gpio.write(outputs[i].pin, 0, function(err) {
          if (err) {
            throw err;
          }
          gpio.read(outputs[i].pin, function (err, value) {
            if (err) {
              throw err;
            }
            console.log('read pin ' + outputs[i].pin + ' value = ' + value);
            // update the outputs object
            outputs[i].value = value.toString(); // store value as a string
            res.send(outputs[i]);
          });
        });
      }
    }
    return;
  } // for

  console.log('invalid input port');
  res.status(403).send('dont recognise that input port number ' + req.params.id);
}); // apt.post()

app.get('/inputs/:id', function (req, res) {
  //iterate through each pin to check if id matches gpio pin
  for (var i in outputs) {
    //if it matches, it will toggle the pin on or off
    if (req.params.id === outputs[i].gpio) {
      console.log('received API get request for port number ' + req.params.id);
      //read the pin value and send it
      gpio.read(outputs[i].pin, function (err, value) {
        if (err) {
          throw err;
        }
        console.log('read pin ' + outputs[i].pin + ' value = ' + value);
		    // update the outputs object
        outputs[i].value = value.toString(); // store value as a string
        res.send(outputs[i]);
      });
    }
  }
});

// Express route for incoming requests for a list of all outputs
app.get('/inputs', function (req, res) {
  // send array of outputs objects as a JSON string
  console.log('all outputs');
  res.status(200).send(outputs);
}); // apt.get()

// Express route for any other unrecognised incoming requests
app.get('*', function (req, res) {
  res.status(404).send('Unrecognised API call');
});

// Express route to handle errors
app.use(function (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send('Oops, Something went wrong!');
  } else {
    next(err);
  }
}); // apt.use()

process.on('SIGINT', function() {
  console.log('\nGracefully shutting down from SIGINT (Ctrl+C)');
  console.log('closing GPIO...');
  for (var i in outputs) {
    gpio.close(outputs[i].pin);
  }
  process.exit();
});

// ------------------------------------------------------------------------
// Start Express App Server
//
app.listen(3000);
console.log('App Server is listening on port 3000');

