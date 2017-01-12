<?php
/**
 * Created by PhpStorm.
 * User: xwc
 * Date: 2016/12/29
 * Time: 0:24
 */
    header("Content-type: application/json;charset=utf-8");

    require_once ('db.php');

    if ($conn){
        $newsid = $_POST['newsid'];
        $sql = "SELECT * FROM news WHERE id='{$newsid}'";
        $result = $conn->query($sql);
        $sendData = array();
        while($row = $result->fetch_assoc()) {
            array_push($sendData, array(
                "id" => $row['id'],
                "newstype" => $row['newstype'],
                "newsimg" => $row['newsimg'],
//                                            "newsimg" => array("img/1.JPEG","img/1.JPEG","img/1.JPEG"),
                "newstitle" => $row['newstitle'],
                "newssrc" => $row['newssrc'],
                "newstime" => $row['newstime']
            ));
        }
        echo json_encode($sendData);
    }

$conn->close();
?>