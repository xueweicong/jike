<?php
/**
 * Created by PhpStorm.
 * User: xwc
 * Date: 2016/12/28
 * Time: 16:19
 */
header("Content-type: application/json;charset=utf-8");
//header('Content-Type:text/html; charset=UTF-8');

$conn = mysqli_connect('localhost','root','123456','baidunews');
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
mysqli_query($conn, 'set names utf8');

?>