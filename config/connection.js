var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'GatheringRoots',
    database: 'hotdogs_db'
    });
};

connection.connect(function(err) {
	if (err) {
        console.log('Connection Error: '+ err.stack);
        return;
    }
	console.log('Connected as ID '+ connection.threadId);
});

module.exports = connection;


//////////////
/*  Once finished with functionality,
	the following is for the jawsDB setup
*/
