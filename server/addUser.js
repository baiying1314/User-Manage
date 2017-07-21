const express = require('express');
const router = express.Router();

const con = require('./connect');

router.post('/addUser', (req, res)=> {
    const selectquery = `insert into users values(NULL,'${req.body.user}','${req.body.name}',${req.body.age},'${req.body.sex}','${req.body.tel}','${req.body.email}','${req.body.tip}')`;
    con.query(selectquery, (err)=> {
        if (err) {
            res.send({addResult:false});
        }
        res.send({addResult:true});
    });
});

module.exports = router;