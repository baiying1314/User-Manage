const express = require('express');
const router = express.Router();

const con = require('./connect');

router.post('/addUser', (req, res, next)=> {
    const selectquery = `insert into users values(NULL,'${req.body.user}','${req.body.name}',${req.body.age},'${req.body.sex}','${req.body.tel}','${req.body.email}','${req.body.tip}')`;
    con.query(selectquery, (err, rows)=> {
        if (err) {
            next(err);
            return;
        }
        res.end();
    });
});

module.exports = router;