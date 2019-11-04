/* RAPI Initialisation Module */
/* log startup and any other necessaries */

var path     = require('path');
var util     = require('util');
var fs       = require('fs');
var https    = require('https');
var http     = require('http');
var domain   = require('domain');
var init     = require('./init');
var shutdown = require('./shutdown');

var options = { key: fs.readFileSync('key.pem'), cert: fs.readFileSync('certificate.pem') };


/* INIT */

/* this is the server */

var http=http.createServer();