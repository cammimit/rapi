/* some client tests for RAPI */

/* cammi 2019 */

/* no particular order - but not loading test generally */
/* those need to be elsewhere */

var https   = require('https');
var http    = require('http');
var request = require('D:/DEV/NODE/NODE_MODULES/request');

/* basic server hit, connect test */

request('http://127.0.0.1:8080/ct', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});

/* UNKNOWN SPECIAL REQUEST */

request('http://127.0.0.1:8080/tfl', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
/* don't legitimately expect any content except not allowed */  
/* in other words just create a 405 FAIL!!! */
 console.log(err);
});


/*          */




/*          */



/*          */

request('http://127.0.0.1:8080/sd', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
/* don't legitimately expect any content except a conn reset at shutdown */  
  console.log(body);
});

/*          */
