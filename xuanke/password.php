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

    <link href="css/password.css" rel="stylesheet">

    <script src="js/ie-emulation-modes-warning.js"></script>

  </head>

  <body>

    <?php
	  if(empty($_SESSION['studentID'])){
		   echo "<script language='javascript' type='text/javascript'>window.location.href='signin.php'</script>"; 
	  }
	  $studentID=$_SESSION['studentID'];
	  $con=mysql_connect("localhost:3306","root","123456");
	  mysql_select_db("SZU",$con);
	  mysql_query("set names utf8");
	  $result=mysql_query("SELECT SNAME FROM STUDENT WHERE SNO='$studentID'");
	  while($row=mysql_fetch_array($result)){
		  $name=$row['SNAME'];
	  }
      if($_SERVER["REQUEST_METHOD"]=="POST"){
		  $key=$_POST["password"];
		  $nkey=$_POST["newPassword"];
		  $rkey=$_POST["rePassword"];
		  $password=md5($key);
		  $err=0;
		  $result=mysql_query("SELECT PASSWORD FROM STUDENT WHERE SNO='$studentID'");
		  while($row=mysql_fetch_array($result)){
			  $pw=$row['PASSWORD'];
			  if($password==$pw){
				  if($nkey!=$rkey){
					  $err=2;
				  }
			  }
			  else{
				  $err=1;
			  }
		  }
		  if($err==0){
			  $newpassword=md5($nkey);
			  $result=mysql_query("UPDATE STUDENT SET PASSWORD='$newpassword' WHERE SNO='$studentID'");
		  }
		  mysql_close($con);
	  }
	?>

    <div class="container">

      <img class="center-block" src="img/password.png" />
      <p class="lead text-center"><br>姓名：<?php echo $name;?><br>学号：<?php echo $studentID;?></p>
      <form class="form-signin" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" name="password" id="inputPassword" class="form-control" placeholder="原密码"   value="<?php echo $key;?>"required>
        <label for="inputPassword" class="sr-only">NewPassword</label>
        <input type="password" name="newPassword" id="inputNewPassword" class="form-control" placeholder="新密码"   value="<?php echo $nkey;?>"required>
        <label for="inputPassword" class="sr-only">RePassword</label>
        <input type="password" name="rePassword" id="inputRePassword" class="form-control" placeholder="重复新密码"   value="<?php echo $rkey;?>"required>
        <?php
		  if($_SERVER["REQUEST_METHOD"]=="POST"){
			  if($err==0){
				  echo "<div class='alert alert-success text-center' role='alert'><span class='glyphicon glyphicon-ok-sign' aria-hidden='true'></span><span class='sr-only'>Success:</span> 修改密码成功</div>";
			  }
		  	  else if($err==1){
				  echo "<div class='alert alert-danger text-center' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> 原密码不正确</div>";
			  }
		  	  else if($err==2){
			  	  echo "<div class='alert alert-danger text-center' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> 新密码与确认新密码不一致</div>";
			  }
		  }
		  else{
			  echo "<br><br><br>";
		  }
		?>
        <button class="btn btn-lg btn-danger btn-block" type="submit">修改密码</button>
        <button class="btn btn-lg btn-danger btn-block" type="button" onClick="back()">返回</button>
      </form>

    </div>
    
    <script type="text/javascript">
	function back(){
		window.location.href="index.php";
	}
	</script>

    <script src="js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
