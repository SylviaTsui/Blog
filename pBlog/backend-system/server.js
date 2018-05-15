const express = require('express');
const expressStatic = require('express-static')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const multer = require('multer');
// const multerObj = multer({dest:'./static/upload'});
const multerObj = multer({dest:'../static/upload'});
const consolidate = require('consolidate');

const server = express();

//server.use意思就是服务器接收到所有形式的东西就。。。。
//解析post和上传的文件
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(multerObj.any());


//解析cookie并添加一个session
server.use(cookieParser());
(function(){
  const keys = [];
  //循环110万次
  for(var i=0;i<1100000;i++){
     keys[i] = 's_' + Math.random();
  }
  server.use(cookieSession({
    keys,
    name:'sess_id',
    maxAge:20*60*1000
  }));
})()

//渲染后台模版
server.engine('html',consolidate.ejs);
server.set('views','template');
server.set('view engine','html');

//进入首页
server.use('/',require('./router/web/index')());
//进入管理员页面
server.use('/admin',require('./router/admin/index')());

 //如果不是访问以上接口就到static目录下读取
server.use(expressStatic('./static/'))



server.listen(8090)
