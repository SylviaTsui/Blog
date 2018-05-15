const express = require('express');
const mysql = require('mysql');
var urlLib = require('url');
var querystring = require('querystring')

const db = mysql.createPool({
  localhost: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
})

module.exports = () => {
  var router = express.Router();

  router.use('/home', (req, res) => {

    db.query(`SELECT * FROM articles_table`, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else {
        console.log(req.query)
        res.send(data)
      }
    })
  })



  router.use('/js', (req, res) => {
    db.query(`SELECT * FROM articles_table WHERE type='js'`, (err, jsData) => {
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else {
        res.send(jsData)
      }
    })
  })

  router.use('/node', (req, res) => {
    db.query(`SELECT * FROM articles_table WHERE type='node'`, (err, nodeData) => {
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else {
        res.send(nodeData)
      }
    })
  })

  router.use('/vue', (req, res) => {
    db.query(`SELECT * FROM articles_table WHERE type='vue'`, (err, vueData) => {
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else {
        res.send(vueData)
      }
    })
  })

  router.use('/react', (req, res) => {
    db.query(`SELECT * FROM articles_table WHERE type='react'`, (err, reactData) => {
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else {
        res.send(reactData)
      }
    })
  })

  router.use('/css', (req, res) => {
    db.query(`SELECT * FROM articles_table WHERE type='css'`, (err, cssData) => {
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else {
        res.send(cssData)
      }
    })
  })

  router.use('/webpack', (req, res) => {
    db.query(`SELECT * FROM articles_table WHERE type='webpack'`, (err, webpackData) => {
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else {
        res.send(webpackData)
      }
    })
  })

  router.use('/mysql', (req, res) => {
    db.query(`SELECT * FROM articles_table WHERE type='mysql'`, (err, mysqlData) => {
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else {
        res.send(mysqlData)
      }
    })
  })

  router.use('/', require('./articlePage')())

  return router;
}
