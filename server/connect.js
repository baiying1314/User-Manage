/**
 * Created by baiying on 7/20/17.
 */
const mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "user",
    port: 3306
});

con.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connecting success');
});

module.exports = con;