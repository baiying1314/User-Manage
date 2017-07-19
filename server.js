/**
 * Created by baiying on 7/19/17.
 */
const express = require('express');

const app = new express();

app.use(express.static(__dirname + '/public'));

var mysql = require("mysql");

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

con.query('select * from userlist', (err, rows)=> {
    if (err) {
        console.log(err);
        return;
    }
    console.log(rows[0]);
});

app.listen('3000', ()=> {
    console.log('3000 port is sucessful');
});