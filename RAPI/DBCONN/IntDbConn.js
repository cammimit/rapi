/* This is the DB connection for RAPI only the connect. Nothing else */

/* cammi 2019 */

var mysql  = require('mysql');




function MDBConn(){

var client = mysql.createClient({
  host: 'localhost',
  user: 'root',
  password: 'P8ll8nd0#_#_'
});




}

function MDBCOnnPool = mysql.createPool({
	connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'P8ll8nd0#_#_' 
});

/* exports*/
exports.MDBConn = MDBConn;
exports.MDBConnPool = MDBConnPool
/* END */