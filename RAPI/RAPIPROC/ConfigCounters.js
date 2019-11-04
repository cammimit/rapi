/* RAPI Conters and Config Module */
/* our counters and config = our proc bas in effect */

/* cammi 2019 */

var configReads = require('../READCONFIG/readConfig');


function gCounters()
{
	var Counters ={
	currchildren: 0,
	currbuffers: 0,
	initdone: 0	
	}
	return Counters;
}

function gCounters()
{
	var Counters ={
	currchildren: 0,
	currbuffers: 0	
	}

	function irResetCounter(arg,val)
	{
		Counters.arg = 0;
		return Counters.arg;
	};

    function irSetCounter(arg,val)
	{
		Counters.arg = val;
		return Counters.arg;
	};

	function irGetCounterArg(arg)
	{
		return Counters.arg;
	};
	
	function irIncCounter(arg)
	{
	/* TODO should check this is actually a setting */
	/* than can be considered a number */
	/* the setting should be named n_ for numerics */
	/* if we get feedback form children the streams */
	/* stringify our counters so force numeric... */
	/* TODO see if brute force an dignorance is correct */
	    var Carg=Config.arg;
		Carg = parseInt(Carg);
		Carg = Carg + 1;
		return Carg;
	};
	
	function irDecCounter(arg)
	{	
	/* TODO should check this is actually a setting */
	/* than can be considered a number */
	    var Carg=Config.arg;
		Carg = parseInt(Carg);
		Carg = Carg - 1;
		return Carg;
	};	

	function dumpHTMLCounters(rObj)
	{
	/* return an object which is an html chunk of */
    /* all the current counter states */
	var keyno=0;
		for( key in Counters )
		{
			rObj[keyno]=key + '_#_' + value;
			keyno++;
		}
		return rObj;
	}
}

function gConfig()
{
	Config = {
	"n_maxchildren" : 10,
	"n_childtimeoutsecs" : 100,
	"n_maxbuffers" : 100,
	"n_maxbuffersize": 16000,
	"clientQueryLog" : "_Data_Logs/clientQueryLog",
	"queryErrorProfileLog" : "_Data_Logs/queryErrorProfileLog",
	"errorProfileLog" : "_Data_Logs/errorProfileLog",
	"initdone": "0"	
	};
	return Config;
}

function dumpHTMLConfig(rObj)
{
	/* return an object which is an html chunk of */
    /* all the config settings */	
	var keyno=0;var value='';
		for( key in Config )
		{	
			value=Config.key;
			rObj[keyno]=key + '_#_' + value;
			keyno++;
		}
		return rObj;		
}



/* exports*/
module.exports.gCounters = gCounters;
module.exports.gConfig = gConfig;
module.exports.dumpHTMLConfig = dumpHTMLConfig;
/* END */