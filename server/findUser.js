const express = require('express');
const router = express.Router();

const con = require('./connect');

router.post('/findUser', (req, res, next)=> {
    const name = req.body.findName;
    let findquery = `select * from users where name = '${name}'`;

    if (!name) {
        findquery = `select * from users`;
    }
    con.query(findquery, (err, rows)=> {
        if (err) {
            next(err);
        }
        res.send(rows);
    });
});

module.exports = router;