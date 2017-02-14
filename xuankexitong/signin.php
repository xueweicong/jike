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

    <link href="css/bootstrap.min.css" rel="stylesheet">

    <link href="css/signin.css" rel="stylesheet">

    <script src="js/ie-emulation-modes-warning.js"></script>

  </head>

  <body>

    <?php
	  if(!empty($_SESSION['studentID'])){
		   echo "<script language='javascript' type='text/javascript'>window.location.href='index.php'</script>"; 
	  }
      if($_SERVER["REQUEST_METHOD"]=="POST"){
		  $studentID=$_POST["studentID"];
		  $key=$_POST["password"];
		  $password=md5($key);
		  $flag=false;
		  $err=false;
		  $con=mysql_connect("localhost:3306","root","123456");
		  mysql_select_db("SZU",$con);
		  $result=mysql_query("SELECT SNO,PASSWORD FROM STUDENT");
		  while($row=mysql_fetch_array($result)){
			  $sno=$row['SNO'];
			  $pw=$row['PASSWORD'];
			  if($studentID==$sno){
				  if($password!=$pw){
					  $err=true;
				  }
				  else{
					  $flag=true;
				  }
			  }
			  if($flag or $err){
				  break;
			  }
		  }
		  mysql_close($con);
		  if($flag){
			  $_SESSION['studentID']=$studentID;
			  echo "<script language='javascript' type='text/javascript'>window.location.href='index.php'</script>"; 
		  }
	  }
	?>

    <div class="container">

      <img class="center-block" src="img/logo.png" />
      <form class="form-signin" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <label for="inputStudentID" class="sr-only">Student ID</label>
        <input type="text" name="studentID" id="inputStudentID" class="form-control" placeholder="学号"  value="<?php echo $studentID;?>" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" name="password" id="inputPassword" class="form-control" placeholder="密码"   value="<?php echo $key;?>"required>
        <?php
		  if($_SERVER["REQUEST_METHOD"]=="POST"){
			  echo "<div class='alert alert-danger text-center' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> 学号或密码不正确</div>";
		  }
		  else{
			  echo "<br><br><br>";
		  }
		?>
        <button class="btn btn-lg btn-danger btn-block" type="submit">登录</button>
      </form>

    </div>


    <script src="js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
