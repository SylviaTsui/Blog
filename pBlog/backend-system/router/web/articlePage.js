var express = require('express');
var mysql = require('mysql');
var urlLib = require('url');
var querystring = require('querystring');


var db = mysql.createPool({
  localhost: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
})

module.exports = () => {
  var router = express.Router();
  router.get('/', (req, res) => {

     var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl)
    console.log(req.path)
    console.log(req.params)
    console.log(req.query.articlePageId)
    console.log(req.originalUrl)
    db.query(`SELECT * FROM articles_table WHERE ID='56'`, (err, page) => {
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else {
        res.send(page);
      }
    })
  })
  return router
}
