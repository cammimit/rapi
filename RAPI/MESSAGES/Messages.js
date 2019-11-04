/* RAPI Messages Module */
/* main module for our messages */

/* cammi 2019 */

reConfigFile = require('../READCONFIG/ReadConfig');	
counters      = require ('../RAPIPROC/ConfigCounters');
	
  function cStat(req, res)
  {
	/*super simple connection check function*/
	var currdatetime = new Date();
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body>Connection Check<br>' + currdatetime + '</body></html>');		
  }

  function streamAdminStat(req, res)
  {
	/* admin level statistics dumper */
	/* TODO validate the user here */
	
	/* fail validate - just a blunt go away */
	res.writeHead(405);
    res.end();
	/* OR done validate */
	var currdatetime = new Date();
	/* dump out the config and current counters */
	/* this we can risk a sync because it's in-memory, instance local */
	/* TODO monitor CAREFULLY. If source changes then upgrade to async!!!!! */
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<html><body>Admin Statistics Check for RAPI<br>' + currdatetime + '<br>');
	var printableConfig={ 'holderkey' : 'holderval' };
		counters.dumpHTMLConfig(printableConfig);


	res.write('</body>');




	res.end('</html>');
	
  }


  function fileAdminStat(req, destStream, destType)
  {
	/* admin level statistics dumper piped to file or db*/
	/* TODO validate the user here */
	
	/* fail validate - just a blunt go away */
	res.writeHead(405);
    res.end();
	/* OR done validate */
	var currdatetime = new Date();
	/* dump out the config and current counters */
	/* this cannot be sync because it's in-memory, instance local */
	switch(destType)
	{
		case FILE:
		
		
		break;
		
		case DB:
		
		
		break;
		
		default:
/* assume file output */
		
	}



	
  }


/* exports*/

module.exports.cStat = cStat;
module.exports.streamAdminStat = streamAdminStat;
module.exports.fileAdminStat = fileAdminStat;

/* END */