const express = require('express');
const router = express.Router();

const con = require('./connect');

router.post('/modifyUser', (req, res, next)=> {
const modifyUser = req.body;
const modifyquery = `update users set user = '${modifyUser.user}',name = '${modifyUser.name}',age = '${modifyUser.age}',sex = '${modifyUser.sex}',tel = '${modifyUser.tel}',email='${modifyUser.email}',tip = '${modifyUser.tip}'`;
   con.query(modifyquery,(err,rows)=>{
      if(err){
          next(err);
      }
      res.end()
   });
});

module.exports = router;