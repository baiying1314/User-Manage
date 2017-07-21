/**
 * Created by baiying on 7/20/17.
 */

const express = require('express');
const router = express.Router();

const con = require('./connect');

router.get('/getUsers', (req, res, next)=> {
    const selectquery = 'select * from users';
    con.query(selectquery, (err, rows)=> {
        if (err) {
            next(err);
        }
        res.send(rows);
    });
});

module.exports = router;