/* tests client for RAPI */


var https   = require('https');
var http    = require('http');


/* request a shutdown */
const request = require('request');

request('http://127.0.0.1:8080/', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});


/*          */



/*          */




/*          */



/*          */



/*          */
