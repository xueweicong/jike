<?php
/**
 * Created by PhpStorm.
 * User: xwc
 * Date: 2016/12/28
 * Time: 16:18
 */
header("Content-type: application/json;charset=utf-8");
//header('Content-Type:text/html; charset=UTF-8');
    require_once ('db.php');

    if($conn){
        //插入新闻
        $newstitle = $_POST['newstitle'];
        $newstype = $_POST['newstype'];
        $newsimg = $_POST['newsimg'];
        $newstime = $_POST['newstime'];
        $newssrc = $_POST['newssrc'];
//       echo $newstitle;

        //$sql = 'SELECT * FROM news';
        $sql = "INSERT INTO news (newstitle,newstype,newsimg,newstime,newssrc) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
        //$result = $conn->query($sql);
//        $sql = "INSERT INTO news (newstitle,newstype,newsimg,newstime,newssrc) VALUES ('fds','fsdf','fsdfsdf','fsd','反倒是')";
//        if ($result == true){
//            echo 34325;
//        }else{
//            echo 74575654;
//        }
        mysqli_query($conn, 'set names utf8');
        if ($conn->query($sql) == TRUE) {
            echo "新记录插入成功";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            //echo $_POST['newstitle'];
        }


    }

    $conn->close();


?>