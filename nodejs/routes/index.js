var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlpool = require('./db');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
  var newstype = req.query.newstype;

  // var connection = mysql.createConnection({
  //     host:'localhost',
  //     port:3306,
  //     user:'root',
  //     password:'123456',
  //     database:'baidunews'
  // });

  // connection.connect();

  if (newstype == '推荐'){
      var sql2 = "SELECT * FROM news";
      mysqlpool.connection().query(sql2, function (err,rows,fields) {
          console.log(rows);
          res.json(rows);
      })
  }else {
      var sql = "SELECT * FROM news WHERE newstype = ?";
      mysqlpool.connection().query(sql,[newstype],function (err,rows,fields) {
          console.log(rows);
          res.json(rows);
      })
  }
  // connection.end();

});

module.exports = router;
