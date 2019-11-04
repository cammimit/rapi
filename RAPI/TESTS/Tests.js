/* initial basic tests for RAPI */

/* cammi 2019 */

/* no particular order - but not loading test generally */
/* those need to be elsewhere */

var https   = require('https');
var http    = require('http');
var request = require('D:/DEV/NODE/NODE_MODULES/request');

/* basic server hit, connect test */

request('http://127.0.0.1:8080/ct', { json: true }, (err, res, body) => {
 console.log ('TEST: Hit server for CONNECT TEST'); 
  if (err) { return console.log(err); }
  console.log(body);
});

/* UNKNOWN SPECIAL REQUEST */

request('http://127.0.0.1:8080/tfl', { json: true }, (err, res, body) => {
console.log ('TEST: Hit server for UNSUPPORTED PAGE');	
  if (err) { return console.log(err); }
/* don't legitimately expect any content except not allowed */  
 console.log(err);
});


/*          */
/* ADMIN STATS REQUEST */

request('http://127.0.0.1:8080/adminstat', { json: true }, (err, res, body) => {
console.log ('TEST: Hit server for ADMIN STATS PAGE');	
  if (err) { return console.log(err); }
/* don't legitimately expect any content except not allowed */  
 console.log(err);
});




/*          */



/*          */

request('http://127.0.0.1:8080/sd', { json: true }, (err, res, body) => {
console.log ('TEST: Hit server for FORCE SHUTDOWN');	
  if (err) { return console.log(err); }
/* don't legitimately expect any content except a conn reset at shutdown */  
  console.log(body);
});

/*          */
