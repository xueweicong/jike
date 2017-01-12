/**
 * Created by xwc on 2016/12/31.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.redirect('/phone.html');
});
module.exports = router;