<?php session_start();?>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>深圳大学选课系统</title>
    <link href="img/szu2014.ico" type="image/x-icon" rel="shortcut icon">

  </head>

  <body>
  
  <?php
    unset($_SESSION['studentID']);
	echo "<script language='javascript' type='text/javascript'>window.location.href='signin.php'</script>"; 
  ?>
  
  </body>
</html>
