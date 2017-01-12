<?php
/**
 * Created by PhpStorm.
 * User: xwc
 * Date: 2016/12/29
 * Time: 0:42
 */
header("Content-type: application/json;charset=utf-8");
//header('Content-Type:text/html; charset=UTF-8');
require_once ('db.php');

if($conn){
    $newsid = $_POST['id'];
    $newstitle = $_POST['newstitle'];
    $newstype = $_POST['newstype'];
    $newsimg = $_POST['newsimg'];
    $newstime = $_POST['newstime'];
    $newssrc = $_POST['newssrc'];

    $sql = "UPDATE news SET newstitle='{$newstitle}', newstype='{$newstype}', newsimg='{$newsimg}' ,newstime='{$newstime}' ,newssrc='{$newssrc}' WHERE id='{$newsid}'";

    mysqli_query($conn, 'set names utf8');
    if ($conn->query($sql) == TRUE) {
        echo "编辑成功";
    } else {
        echo "编辑失败";
    }


}

$conn->close();

?>