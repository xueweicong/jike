<?php
/**
 * Created by PhpStorm.
 * User: xwc
 * Date: 2016/12/25
 * Time: 22:09
 */
    header("Content-type: application/json;charset=utf-8");
//header('Content-Type:text/html; charset=UTF-8');
    require_once ('db.php');


    if($conn){
//        try{
            if ($_GET['newstype'] !== '推荐'){
                $newstype = $_GET['newstype'];
                $sql = "SELECT * FROM news WHERE newstype = '{$newstype}'";
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
            }else{
                $sql = 'SELECT * FROM news';
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
//        }
//        catch (){
//            $sql = 'SELECT * FROM news';
//            $result = $conn->query($sql);
//            $sendData = array();
//            while($row = $result->fetch_assoc()) {
//                array_push($sendData, array(
//                    "id" => $row['id'],
//                    "newstype" => $row['newstype'],
//                    "newsimg" => $row['newsimg'],
////                                            "newsimg" => array("img/1.JPEG","img/1.JPEG","img/1.JPEG"),
//                    "newstitle" => $row['newstitle'],
//                    "newssrc" => $row['newssrc'],
//                    "newstime" => $row['newstime']
//                ));
//            }
//            echo json_encode($sendData);
//        }
//        if ($_GET['newstype'] !== '推荐'){
//            $newstype = $_GET['newstype'];
//            $sql = "SELECT * FROM news WHERE newstype = '{$newstype}'";
//            $result = $conn->query($sql);
//            $sendData = array();
//            while($row = $result->fetch_assoc()) {
//                array_push($sendData, array(
//                    "id" => $row['id'],
//                    "newstype" => $row['newstype'],
//                    "newsimg" => $row['newsimg'],
////                                            "newsimg" => array("img/1.JPEG","img/1.JPEG","img/1.JPEG"),
//                    "newstitle" => $row['newstitle'],
//                    "newssrc" => $row['newssrc'],
//                    "newstime" => $row['newstime']
//                ));
//            }
//            echo json_encode($sendData);
//        }else{
//            $sql = 'SELECT * FROM news';
//            $result = $conn->query($sql);
//            $sendData = array();
//            while($row = $result->fetch_assoc()) {
//                array_push($sendData, array(
//                    "id" => $row['id'],
//                    "newstype" => $row['newstype'],
//                    "newsimg" => $row['newsimg'],
////                                            "newsimg" => array("img/1.JPEG","img/1.JPEG","img/1.JPEG"),
//                    "newstitle" => $row['newstitle'],
//                    "newssrc" => $row['newssrc'],
//                    "newstime" => $row['newstime']
//                ));
//            }
//            echo json_encode($sendData);
//        }


        //echo json_encode(array($sendData));
    }
    else{
        echo json_encode(array("success" => "none"));
    }
    $conn->close();
//    [{new}]
//    $arr = array(
//        "newstype" => "百家",
//        "newsimg" => array("img/1.JPEG","img/1.JPEG","img/1.JPEG"),
//        "newstitle" => "动态获取新闻标题",
//        "newssrc" => "网址",
//        "newstime" => "新闻时间"
//        );
    //echo 123;
    //echo json_encode($arr);
    //echo 123345;
?>