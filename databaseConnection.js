const mysql = require('mysql2/promise');

const is_hosted = process.env.IS_HOSTED || false;

const dbConfigHosted = {
	host: "host",
	user: "user",
	password: "password",
	database: "database",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "database1",
	multipleStatements: false
};

if (is_hosted) {
	var database = mysql.createPool(dbConfigHosted);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		