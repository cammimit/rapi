/* this is the abstract raLogError */

/* cammi 2019 */


/* it tries to db log if: */
/* 1. it knows how to and */ 
/* 2. is able to otherwise it: */
/* falls back to our named log*/
/* files otherwise it: */
/* falls back to a generic system */
/* log otherwise it: falls back to */
/* screen echo and requests main */
/* server to sht down because of */
/* instability */

const fs = require('fs');

function raLogError(err, domain, level, cb)
{
	
	
	
	
	
	
	
	
}






/* exports*/
module.exports = raLogError;

/* END */