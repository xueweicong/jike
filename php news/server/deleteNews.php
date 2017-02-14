<?php
/**
 * Created by PhpStorm.
 * User: xwc
 * Date: 2016/12/28
 * Time: 21:57
 */
    header("Content-type: application/json;charset=utf-8");

    require_once ('db.php');

    if ($conn){
        $newsid = $_POST['newsid'];
        $sql = "DELETE FROM news WHERE id='{$newsid}'";
        if ($conn->query($sql) == TRUE) {
            echo '删除成功';
        }else{
            echo '删除失败';
        }
    }

    $conn->close();

?>