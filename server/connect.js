const mysql = require("mysql");
var config = require('config');

var dbConfig = config.get('App.dbConfig');
module.exports = `mongodb://localhost:27017/${dbConfig.dbName}`;

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: dbConfig.dbName,
    port: 3306
});

con.connect((err)=>{
    if(err){
        console.log('database connect error')
    }
    console.log('databse connect sucessfully')
});

module.exports = con;