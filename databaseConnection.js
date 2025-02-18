const mysql = require('mysql2/promise');

const is_hosted = process.env.IS_HOSTED || false;

const dbConfigHosted = {
    host: "mysql-3a12664d-adnan-cf4d.h",  
    port: 13261,                          
    user: "avnadmin",                      
    password: "Shootas456.",      
    database: "FREEDB",  
    multipleStatements: false
};

const dbConfigLocal = {
    host: "localhost",
    user: "root",
    password: "Password",
    database: "database1",
    multipleStatements: false
};

// Choose hosted database when deployed, otherwise use local database
const database = is_hosted ? mysql.createPool(dbConfigHosted) : mysql.createPool(dbConfigLocal);

module.exports = database;
