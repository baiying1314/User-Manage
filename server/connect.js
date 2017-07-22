const mysql = require("mysql");
var config = require('config');

var dbConfig = config.get('App.dbConfig');
var dbName = dbConfig.dbName;

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    port: 3306
});

con.on('error', function (err) {
    throw err;
});

con.connect();
con.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`,(err,result)=>{
    if(err){
        console.log(err);
        return err;
    }
    else {
        console.log('create database sucess');
    }
});

con.query(`use ${dbName}`);

con.query(`create table if not exists users(
    id int(11) auto_increment primary key,
    user varchar(20) CHARACTER SET utf8,
    name varchar(20) CHARACTER SET utf8,
    age int(11),
    sex char(10) CHARACTER SET utf8,
    tel varchar(30),
    email varchar(30),
    tip varchar(30) CHARACTER SET utf8)`);

module.exports = con;

