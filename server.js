const bodyParser = require('body-parser');
const getUsers = require('./server/getUsers');
const addUser = require('./server/addUser');
const deleteUser = require('./server/deleteUser');
const findUser = require('./server/findUser');
const modifyUser = require('./server/modifyUser');

const express = require('express');

const app = new express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', getUsers);
app.use('/', addUser);
app.use('/', deleteUser);
app.use('/', findUser);
app.use('/', modifyUser);

app.listen('3000', ()=> {
    console.log('3000 port is sucessful');
});

module.exports = app;