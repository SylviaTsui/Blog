const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const ws = require('nodejs-websocket');
const urlLib = require('url');
const JSDOM = require('jsdom').JSDOM;
const gbk = require('gbk');
const crawlerData = require('./static/libs/crawlerData');

let db = mysql.createPool({
  localhost: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
})

const server = express();

server.use(bodyParser.urlencoded({
  extended: false
}));

server.use('/all', (req, res) => {
  let pageID = req.query.ID;
  let num = req.query.num;
  let pageNum = 0;
  console.log(num)
  if (num != 0) {
    pageNum = (num-1)*10;
  }

  db.query(`SELECT * FROM articles_table LIMIT ${pageNum}, 10`, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('database error').end()
    } else {
      console.log('someone visited')
      res.send(data)
    }
  })
})

server.use('/totalpage',(req,res)=>{
  db.query(`SELECT COUNT(*) as cnt FROM articles_table`,(err,data)=>{
    if(err){
      console.error(err)
      res.status(500).send('database error').end()
    }else{
      res.send(data)
    }
  })
})


server.use('/js', (req, res) => {
  // console.log(req.query.ID)
  let pageID = req.query.ID;
  let num = req.query.num;
  let pageNum = 0;
  console.log(num)
  if (num != 0) {
    pageNum = (num-1)*10;
  }
  db.query(`SELECT * FROM articles_table WHERE type='js' LIMIT ${pageNum}, 10`, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('database error').end()
    } else {
      console.log('someone visited')
      res.send(data)
    }
  })
})


server.use('/node', (req, res) => {
  // console.log(req.query.ID)
  db.query(`SELECT * FROM articles_table WHERE type='node'`, (err, data) => {

    if (err) {
      console.error(err)
      res.status(500).send('database error').end()
    } else {
      console.log('someone visited')
      res.send(data)
    }
  })
})
server.use('/vue', (req, res) => {
  // console.log(req.query.ID)
  db.query(`SELECT * FROM articles_table WHERE type='vue'`, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('database error').end()
    } else {
      console.log('someone visited')
      res.send(data)
    }
  })
})

server.use('/react', (req, res) => {
  // console.log(req.query.ID)
  db.query(`SELECT * FROM articles_table WHERE type='react'`, (err, data) => {

    if (err) {
      console.error(err)
      res.status(500).send('database error').end()
    } else {
      console.log('someone visited')
      res.send(data)
    }
  })
})

server.use('/css', (req, res) => {
  // console.log(req.query.ID)
  db.query(`SELECT * FROM articles_table WHERE type='css'`, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('database error').end()
    } else {
      console.log('someone visited')
      res.send(data)
    }
  })
})

server.use('/mysql', (req, res) => {
  // console.log(req.query.ID)
  db.query(`SELECT * FROM articles_table WHERE type='mysql'`, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('database error').end()
    } else {
      console.log('someone visited')
      res.send(data)
    }
  })
})

server.use('/page', (req, res) => {

  let pageID = req.query.ID
  db.query(`SELECT * FROM articles_table WHERE ID= '${pageID}' `, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('database error').end()
    } else {
      res.send(data)
    }
  })
})

server.use('/comment', (req, res) => {

  let commentID = req.query.ID;
  if (req.query.get == 'true') { //刷新加载显示数据库意见
    db.query(`SELECT * FROM comment_table WHERE commentID='${commentID}'`, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else {
        res.send(data);
      }
    })
  } else { //添加新意见
    let name = req.query.username;
    let comment = req.query.comment;
    let post_time = req.query.post_time;
    let commentID = req.query.ID;
    // console.log(req.query)
    db.query(`INSERT INTO comment_table (name,comment,commentID,post_time) VALUE ('${name}','${comment}','${commentID}','${post_time}')`, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else { //如果成功添加就将数据库的意见输出
        console.log('updated')
        db.query(`SELECT * FROM comment_table WHERE commentID='${commentID}'`, (err, data) => {
          if (err) {
            console.error(err);
            res.status(500).send('database error').end();
          } else {
            res.send(data);
          }
        })
      }
    })
  }

})

server.use('/weather',(req,res)=>{
  crawlerData.getWeather('http://weather.sina.com.cn/',(buffer)=>{
    let html = buffer.toString();
    // let html = gbk.toString('utf-8',buffer);
    // console.log('done',buffer.toString())
    let DOM = new JSDOM(html);
    let document = DOM.window.document;
    
    let icon = document.querySelector('.slider_whicon_w img');
    let date = document.querySelector('.blk_fc_c0_i .wt_fc_c0_i_date');
    let tem = document.querySelector('.slider_degree');


    let weatherData = {
        "icon":icon.src.replace(/^\s+|\s+$/g,''),
        "date":date.innerHTML.replace(/^\s+|\s+$/g,''),
        "tem":tem.innerHTML.replace(/^\s+|\s+$/g,''),
      }

    res.send(weatherData)


  },()=>{
     console.log('error')
     res.status(500).send('database error').end()
  });
})



server.listen(3000)
