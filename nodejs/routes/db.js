/**
 * Created by xwc on 2016/12/31.
 */
var mysql = require('mysql');
exports.connection = function () {
    var connection = mysql.createPool({
        host:'localhost',
        port:3306,
        user:'root',
        password:'123456',
        database:'baidunews'
    });
    return connection;
};

// module.exports= {
//     conn:function () {
//         var connection = mysql.createPool({
//             host:'localhost',
//             port:3306,
//             user:'root',
//             password:'123456',
//             database:'baidunews'
//         });
//     }
// };