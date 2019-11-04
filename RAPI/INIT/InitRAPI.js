/* RAPI Initialisation Module */
/* read config */
/* init counters and settings */
/* log startup and any other necessaries */

/* cammi 2019 */

var configReads = require('../READCONFIG/readConfig');
var counters    = require('../RAPIPROC/ConfigCounters'); /* our close friend and partner */
var dbconn      = require('../DBCONN/ItDBConn');

function InitRAPICounters()
{
	/* set up the initial counters value*/
	/* somewhat sync because it's a first off memory req */
	countersObj=counters.gConfig(cfo);
	/* parse and validate as required */
	/* TODO */
	/* return it to mater */
	return countersObj;
}

function InitRAPIConfig()
{
	/* set up the initial counters value*/
	/* somewhat sync because it's a first off memory req */
	configObj=counters.gConfig(cfo);	
	/* parse the object and validate as sensible */
	/* TODO */
	/* return it to mummy */
	return configObj;
}

function InitRAPIDBConn()
{
	/* set up the initial counters value*/
	configObj=counters.gConfig(cfo);	
	/* parse and validate as sensible */
	/* TODO */
	/* return it to mummy */
	return configObj;
}

function InitRAPI(cfObj)
{	
	/* callout to read the config */
	configReads.rcReadConfigFile(cfObj);
	/* calllout to connect to the database */
	IntDbConn
}


function initCheckInit(cf, co)
{
		if((cf.initdone=="1")||(co.initdone=="1"))	
		return 1;
		else
		return 0;
}


/* exports*/
module.exports.InitRAPICounters = InitRAPICounters;
module.exports.InitRAPIConfig = InitRAPIConfig;
module.exports.initCheckInit = initCheckInit;
/* END */