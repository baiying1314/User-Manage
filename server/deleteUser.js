const express = require('express');
const router = express.Router();

const con = require('./connect');

router.post('/deleteUser', (req, res, next)=> {
    console.log(req.body);
    const deletequery = `delete from users where id = ${req.body.userId}`;
    con.query(deletequery, (err)=> {
        if (err) {
            next(err);
        }
        res.end();
    })
});

module.exports = router;