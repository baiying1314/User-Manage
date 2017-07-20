/**
 * Created by baiying on 7/19/17.
 */
const bodyParser = require('body-parser');
const getUsers = require('./server/getUsers');
const addUser = require('./server/addUser');

const express = require('express');

const app = new express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', getUsers);
app.use('/', addUser);

app.listen('3000', ()=> {
    console.log('3000 port is sucessful');
});