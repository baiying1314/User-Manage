/**
 * Created by baiying on 7/19/17.
 */
const getUsers = require('./server/getUsers');

const express = require('express');

const app = new express();

app.use(express.static(__dirname + '/public'));

app.use('/', getUsers);

app.listen('3000', ()=> {
    console.log('3000 port is sucessful');
});