//the App Home for Fitchef - this for the realtime Dear Integrations App
//this is the node code
//this is the rest server that takes requests from the website code

//var path     = require('path');
//var util     = require('util');
//var fs       = require('fs');
//var https    = require('https');
var http     = require('http');
var url      = require('url');
var domain   = require('domain');
var messages = require('../MESSAGES/Messages.js');
var init     = require('../INIT/InitRAPI.js');



function clientHandle(req, res)
{
console.log('Request received');
var tUrl=req.url;
var meth=req.method;
console.log('Test URL: ' + tUrl);
console.log('Method:' + meth);

	switch(meth)
	{
	case 'GET':
		/* TODO put in some DOS defence delays */
		if(tUrl==='/ct'){return messages.cStat(req, res);}
		/* TODO obviously fix the permissions matrix !!!! */
		if(tUrl==='/sd'){return RAPIShutdown(0, 'ClientForcedShutdown')}
		/* TODO this is priveleged status */
		if(tUrl==='/adminstat'){return messages.streamAdminStat(req, res);}
		/* basic GET retrieval service  */
		
	break;	
	
	case 'POST':
		/* basic POST retrieval service  */
		res.writeHead(405);
		res.end();
	break;
	
	case 'DELETE':
		res.writeHead(405);
		res.end();
	
	break;

	default:
		res.writeHead(405);
		res.end();
	}

}

function createServer()
{
readyForLive = init.checkInit(configObj,countersObj);	

	if(readyFolrLive){
	var livehttp=http.createServer();
	livehttp.on('request', function(req,res) {clientHandle(req,res);});
	livehttp.listen(8080);	
	}
	else
	{
	RAPIShutdown(3,'Server Not Ready After Config Read');
	}

}

/* INIT */
var countersObj=init.InitRAPICounters;
var configObj  =init.InitRAPIConfig;
var dbConn     =init.InitDBConn;
init.InitRAPI(configObj,countersObj);
var readyForLive = 0;
/* we wait for all the I/O and stuff above because we */
/* need it all otherwise we can't sensibly function */


/* this is the server */
/* give us a decent time to setup before starting */
setTimeout( function (){createServer();},30);



/* this will jsut keep us running because there is always something to do */
//var longlife = setInterval(function a(){}, 100);
var longlife = setTimeout(function() {
	RAPIShutdown(0,'Timer');
},500000);




/* SHUTDOWN */
function RAPIShutdown(err, reason)
{
	console.log('Shutting Down Server:');
	console.log(' ' +reason);
	process.exit(0);
}

/*

exit(0);


require('http').createServer(function(requset, response) {
var file = path.normalize('.' + req.url);
  console.log('Trying to serve', file);
  
  function reportError(err) {
    console.log(err);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
  
  path.existsSync(file, function(exists) {
    if (exists) {
      fs.stat(file, function(err, stat) {
        var rs;
 
        if (err) {
          return reportError(err);
        }
 
        if (stat.isDirectory()) {
          res.writeHead(403); res.end('Forbidden');
        } else {
          rs = fs.createReadStream(file);
 
          rs.on('error', reportError);
 
          res.writeHead(200);
          rs.pipe(res);
        }
	  });
  } else{
      res.writeHead(404);
      res.end('Not found');
    }
  });
  
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end(util.inspect(req.headers));
}).listen(4000);


*/