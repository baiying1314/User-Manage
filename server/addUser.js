const express = require('express');
const router = express.Router();

const con = require('./connect');

router.post('/addUser', (req, res)=> {
        const selectquery = `insert into users values(id = NULL,user ='${req.body.user}',name='${req.body.name}',age =${req.body.age},sex = '${req.body.sex}',tel ='${req.body.tel}',email = '${req.body.email}',tip = '${req.body.tip}')`;
    con.query(selectquery, (err)=> {
        if (err) {
            console.log(err);
            res.send({addResult:false});
        }
        res.send({addResult:true});
    });
});

module.exports = router;