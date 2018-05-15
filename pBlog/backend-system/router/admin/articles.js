var express = require('express');
var mysql = require('mysql');
var pathLib = require('path');
var fs = require('fs');

var db = mysql.createPool({
  localhost: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
})

module.exports = () => {
  var router = express.Router();

  router.get('/', (req, res) => {
    //从数据库调取资料，在渲染到ejs
    switch (req.query.act) {
      //修改
      //确认按修改会选中该条的id，然后从数据库中调出，该条id的内容渲染出来
      case 'mod':
        db.query(`SELECT * FROM articles_table WHERE ID=${req.query.id}`, (err, data) => {
          if (err) {
            console.error(err)
            res.status(500).send('database error').end();
          } else if (data.length == 0) {
            console.error(err)
            res.status(404).send('data not found').end();
          } else {
            db.query(`SELECT * FROM articles_table`, (err, article) => {
              if (err) {
                console.log(err)
              } else {
                // console.log(data[0])
                res.render('admin/articles.ejs', {
                  //这里的article传过去是保证整个页面都有内容渲染
                  article,
                  mod_data: data[0]
                });
              }
            })
          }

        })
        break;
      case 'del': //删除
        db.query(`DELETE FROM articles_table WHERE ID=${req.query.id}`,(err,data)=>{
          if(err){
            console.error(err)
            res.status(500).send('database error').end();
          }else{
            res.redirect('/admin/articles'); //删除后返回本页面
          }
        })

        break;
      default: //正常渲染数据库
        db.query(`SELECT * FROM articles_table`, (err,article) => {
          if (err) {
            comsole.error(err)
            res.status(500).send('database error').end();
          } else {
            res.render('admin/articles.ejs', {
              article
            })
          }
        })
        break;


    }
  })

  //修改
  router.post('/', (req, res) => {
    var title = req.body.title;
    var content = req.body.content;
    var date = req.body.date;
    var type = req.body.type;
    var intro = req.body.intro;

    var ext = pathLib.parse(req.files[0].originalname).ext;
    var oldPath = req.files[0].path;
    var newPath = req.files[0].path + ext;
    var newFileName = req.files[0].filename + ext;

    fs.rename(oldPath, newPath, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('the path is updated');
      }
    })

    if (!title || !content || !date || !type || !newFileName || !intro) {

      res.status('400').send('arguments error').end();
    } else {

      // 用隐藏的input放入一个参数，如果提交的是有mod_id的就是修改，否则就是添加
      if (req.body.mod_id) {
        db.query(`UPDATE articles_table SET title='${title}',content='${content}',picture='${newFileName}',type='${type}',date='${date}',intro='${intro}' WHERE ID=${req.body.mod_id}`, (err, data) => {
          if (err) {
            console.error(err);
            res.status(500).send('database error').end();
          } else {
            res.redirect('/admin/articles')
          }

        })
      } else { //添加
        db.query(`INSERT INTO articles_table (title,intro,content,picture,type,date) VALUE ('${title}','${intro}','${content}','${newFileName}','${type}','${date}')`, (err, data) => {
          if (err) {
            console.error(err);
            res.status(500).send('database error').end();
          } else {
            res.redirect('/admin/articles');
          }
        })
      }
    }

  })

  return router;
}
