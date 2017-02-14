var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlpool = require('./db.js');
var xss = require('xss');
var options = {
    whiteList: {}
};

// var html = xss('<script>alert("xss");</script>');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// var connection = mysql.createPool({
//     host:'localhost',
//     port:3306,
//     user:'root',
//     password:'123456',
//     database:'baidunews'
// });


/*后台*/
router.get('/getnews', function (req, res, next) {
    //connection.connect();
    var sql = "SELECT * FROM news";
    //var sql2 = "SELECT * FROM news";
    mysqlpool.connection().query(sql, function (err, rows) {
        console.log(rows);
        res.json(rows);
    });
});

/*添加新闻*/
router.post('/insertnews', function (req, res, next) {
    var newstype = xss(req.body.newstype,options),
        newstitle = xss(req.body.newstitle,options),
        newstime = xss(req.body.newstime,options),
        newssrc = xss(req.body.newssrc,options),
        newsimg = xss(req.body.newsimg,options);
    var sql = "INSERT INTO news (newstitle,newstype,newsimg,newstime,newssrc) VALUES (" + mysql.escape(newstitle) + "," + mysql.escape(newstype) + "," + mysql.escape(newsimg) + "," + mysql.escape(newstime) + "," + mysql.escape(newssrc) + ")";
    // var sql = "INSERT INTO news (newstitle,newstype,newsimg,newstime,newssrc) VALUES (?,?,?,?,?)";
    // connection.query(sql, [newstitle,newstype,newsimg,newstime,newssrc], function (err, rows) {
    //     res.send('记录插入成功');
    //     console.log(rows.changedRows);
    // })
    mysqlpool.connection().query(sql, function (err, rows) {
        res.send('记录插入成功');
        console.log(rows.changedRows);
    })
});

/*删除新闻*/
router.get('/deletenews', function (req, res, next) {
    var newsid = req.query.newsid;
    var sql = "DELETE FROM news WHERE id=?";
    mysqlpool.connection().query(sql, [newsid], function (err, rows) {
        console.log(rows.changedRows);
        res.send('记录删除成功');
    })
});

/*新闻编辑框*/
router.get('/compilenews', function (req, res, next) {
    var newsid = req.query.newsid;
    var sql = "SELECT * FROM news WHERE id = ?";
    mysqlpool.connection().query(sql, [newsid], function (err, rows) {
        res.json(rows);
    })
});

/*修改新闻*/
router.post('/updatenews', function (req, res, next) {
    var newstitle = xss(req.body.newstitle,options),
        newstype =  xss(req.body.newstype,options),
        newsimg = xss(req.body.newsimg,options),
        newstime = xss(req.body.newstime,options),
        newssrc= xss(req.body.newssrc,options),
        newsid = req.body.id;
    var sql = "UPDATE news SET newstitle= " + mysql.escape(newstitle) + ", newstype=" + mysql.escape(newstype) + ", newsimg=" + mysql.escape(newsimg) + ",newstime=" + mysql.escape(newstime) + ",newssrc=" + mysql.escape(newssrc) + "WHERE id=" + mysql.escape(newsid);
    // var sql = "UPDATE news SET newstitle=?, newstype=?, newsimg=? ,newstime=? ,newssrc=? WHERE id=?" ;
    // connection.query(sql, [newstitle,newstype,newsimg,newstime,newssrc,newsid], function (err, rows) {
    //     res.send('记录修改成功');
    // })
    mysqlpool.connection().query(sql, function (err, rows) {
        res.send('记录修改成功');
    })
});



module.exports = router;
