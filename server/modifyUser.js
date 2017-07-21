const express = require('express');
const router = express.Router();

const con = require('./connect');

router.post('/modifyUser', (req, res)=> {
    const modifyUser = req.body;
    const modifyquery = `update users set user = '${modifyUser.user}',name = '${modifyUser.name}',age = '${modifyUser.age}',sex = '${modifyUser.sex}',tel = '${modifyUser.tel}',email='${modifyUser.email}',tip = '${modifyUser.tip}'where id = ${modifyUser.id}`;
    con.query(modifyquery, (err)=> {
        if (err) {
            res.send({mdResult: false});
        }
        res.send({mdResult: true})
    });
});

module.exports = router;