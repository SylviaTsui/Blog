var express = require('express');
var mysql = require('mysql');
var commom = require('../../libs/commom')

// 链接到数据库
var db = mysql.createPool({
  localhost:'localhost',
  user:'root',
  password:'123456',
  database:'blog'
})


module.exports = ()=>{
 var router = express.Router();
 //跳到登陆页面
 router.get('/',(req,res)=>{
   res.render('admin/login.ejs',{})
   // res.send('arrive login.js')

 })

//获取登陆页面发过来的用户名和密码
 router.post('/',(req,res)=>{

   var username = req.body.username;
   var password = commom.md5(req.body.password+commom.MD5_SUFFIX);
   //如果用户名和数据库一致。。。
   db.query(`SELECT * FROM admin_table WHERE username='${username}'`,(err,data)=>{
     if(err){
       res.status(500).send('database error').end();
     }else{
       if(data.length == 0){
         res.status(400).send('no admin').end();
       }else{
         if(data[0].password = password){
           //如果密码一致，将管理员ID加到session的admin_id,没有添加之前session是空值
           // console.log(req.session)
           req.session['admin_id'] = data[0].ID;
           // console.log(req.session)
           res.redirect('/admin');
         }else{
           res.status(400).send('invalid password').end()
         }
       }
     }
   })

 })


 return router;
}
