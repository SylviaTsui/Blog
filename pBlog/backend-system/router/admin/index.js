var express = require('express');

module.exports = ()=>{
 //新建一个服务器的路由
 var router = express.Router();
 //判断是都已经登陆管理员账户或者是否申请进入登陆页面，！的话就跳到登陆页面
 //登陆的判断标准是session是否是携带admin_id,这个数据在成功登陆后会给到管理员

 router.use((req,res,next)=>{

    if(!req.session['admin_id'] && req.url != '/login' ){
      //上面条件是true就跳到login页面，重定向是在本路由从定向，所以必须写下面的/login转到./login.js
      res.redirect('/admin/login');

    }else{
      next();
    }
 })

//符合上面条件就跳到后台管理首页
 router.get('/',(req,res)=>{
   res.render('admin/index.ejs',{})
   // res.send('登陆成功').end();
 })



 //请求到接口/login就跳转到login.js
 router.use('/login',require('./login')());
 //点击后台文章管理页面进入这里
 router.use('/articles',require('./articles')());

 return router;

}
