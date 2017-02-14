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

    <link href="css/dashboard.css" rel="stylesheet">

    <script src="js/ie-emulation-modes-warning.js"></script>

  </head>

  <body>

    <?php
	  if(empty($_SESSION['studentID'])){
		   echo "<script language='javascript' type='text/javascript'>window.location.href='signin.php'</script>"; 
	  }
	  $con=mysql_connect("localhost:3306","root","123456");
	  mysql_select_db("SZU",$con);
	  mysql_query("set names utf8");
	  $studentID=$_SESSION['studentID'];
	  if($_SERVER["REQUEST_METHOD"]=="POST"){
		  if(!empty($_POST["withdraw"])){
			  $withdraw=$_POST["withdraw"];
			  foreach($withdraw as $value){
				  $err=true;
				  $result=mysql_query("SELECT CNO FROM SC WHERE SNO='$studentID'");
				  while($row=mysql_fetch_array($result)){
					  if($row['CNO']==$value){
						  $err=false;
						  }
				  }
				  if(!$err){
				  $result=mysql_query("SELECT CREDIT FROM COURSE WHERE CNO='$value'");
				  while($row=mysql_fetch_array($result)){
					  $credit=$row['CREDIT'];
					  $mcno=$row['MCNO'];
					  $len=strlen($mcno);
				  }
				  $result=mysql_query("SELECT SELECTD,LIMITD,SCLASS FROM STUDENT WHERE SNO='$studentID'");
				  while($row=mysql_fetch_array($result)){
					  $sclass=$row['SCLASS'];
				  }
				  if($len==0){
					  $type=true;
				  }
				  else if($len==7){
					  if(substr($mcno,0,4)>=substr($sclass,0,4) and substr($mcno,4)==substr($sclass,4,3)){
						  $type=true;
					  }
					  else{
						  $type=false;
					  }
				  }
				  else{
					  if(substr($mcno,0,4)>=substr($sclass,0,4) and substr($mcno,4)==substr($sclass,4,4)){
						  $type=true;
					  }
					  else{
						  $type=false;
					  }
				  }
				  $result=mysql_query("DELETE FROM SC WHERE SNO='$studentID' AND CNO='$value'");
				  $result=mysql_query("UPDATE STUDENT SET SELECTD=SELECTD-$credit WHERE SNO='$studentID'");
				  if($type){
					  $result=mysql_query("UPDATE COURSE SET SELECTM=SELECTM-1 WHERE CNO='$value'");
				  }
				  else{
					  $result=mysql_query("UPDATE COURSE SET SELECTN=SELECTN-1 WHERE CNO='$value'");
				  }
				  }
			  }
		  }
	  }
	  $result=mysql_query("SELECT SNAME,SELECTD,LIMITD FROM STUDENT WHERE SNO='$studentID'");
	  while($row = mysql_fetch_array($result)){
		  $name=$row['SNAME'];
		  $selete=$row['SELECTD'];
		  $limit=$row['LIMITD'];
	  }
	?>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header" >
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.php">深圳大学选课系统</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="password.php">修改密码</a></li>
            <li><a href="exit.php">退出</a></li>
          </ul>
          <form class="navbar-form navbar-right" method="post" action="search.php">
            <select class="form-control" name="order">
              <option value="课程号">课程号</option>
              <option value="课程名">课程名</option>
              <option value="主选教师">主选教师</option>
              <option value="主选班级">主选班级</option>
            </select>
            <input type="text" class="form-control"  name="search" placeholder="查找">
          </form>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li><a href="csse.php">计算机与软件学院</a></li>
            <li><a href="ass.php">社会科学学院</a></li>
            <li><a href="dpe.php">体育部</a></li>
          </ul>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          
          <div class="table-responsive">
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                  <h1 class="sub-header"><?php echo $name;?>同学选课情况</h1>
                  <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>退课</th>
                          <th>课程号</th>
                          <th>课程名称</th>
                          <th>类别</th>
                          <th>学分</th>
                          <th>备注</th>
                        </tr>
                      </thead>
                      <tbody>
                        <?php
			        $result=mysql_query("SELECT SC.CNO,CNAME,SC.CATEGORY,CREDIT,SC.REMARK FROM SC,COURSE WHERE SNO='$studentID' AND SC.CNO=COURSE.CNO ORDER BY SC.CNO");
			        while($row=mysql_fetch_array($result)){
						echo "<tr><td><div class='checkbox'><label><input type='checkbox' name='withdraw[]' value='",$row['CNO'],"'></label></div></td><td>",$row['CNO'],"</td><td>",$row['CNAME'],"</td><td>",$row['CATEGORY'],"</td><td>",$row['CREDIT'],"</td><td>",$row['REMARK'],"</td></tr>";
			        }
			      ?>
                      </tbody>
                    </table>
                    <b><input type="checkbox" name="all" onclick="allCheck(this)"/> 全选
                    <p class="text-right">选课学分：<?php echo $selete;?>分<br>限选学分：<?php echo $limit;?>分<br><br><br> </b>
                    <button type="submit" class="btn btn-primary btn-lg">退课</button>
                    </p> </div>
                  </form>
                  <h1 class="sub-header">课程表</h1>
                  <div class="table-responsive">
                    <table class="table table-bordered text-center">
                      <thead>
                        <tr>
                          <td>课程表</td>
                          <td>星期一</td>
                          <td>星期二</td>
                          <td>星期三</td>
                          <td>星期四</td>
                          <td>星期五</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1<br>2</td>
						  <?php
				  $i=1;
			        $result=mysql_query("SELECT CNAME,CROOM,TNO,SC.CATEGORY FROM COURSE,C,SC WHERE SNO='$studentID' AND COURSE.CNO=C.CNO AND COURSE.CNO=SC.CNO ORDER BY TNO");
				    while($row=mysql_fetch_array($result)){
						for($i;$i<$row['TNO'];$i++){
							echo "<td></td>";
							if($i%5==0 and $i!=30){
								echo "</tr><tr><td>";
								if($i==5){
									$class=3;
								}
								else if($i==10){
									$class=5;
								}
								else if($i==15){
									$class=7;
								}
								else if($i==20){
									$class=9;
								}
								else if($i==25){
									$class=11;
								}
								echo $class,"<br>",++$class,"</td>";
					  	    }
					    }
						if($row['CATEGORY']=="必修"){
							echo"<td class='info'>";
						}
						else{
							echo"<td class='success'>";
						}
					    echo $row['CNAME'],"<br>",$row['CROOM'],"</td>";
						if($i%5==0 and $i!=30){
							echo "</tr><tr><td>";
							if($i==5){
								$class=3;
							}
							else if($i==10){
								$class=5;
							}
							else if($i==15){
								$class=7;
							}
							else if($i==20){
								$class=9;
							}
							else if($i==25){
								$class=11;
							}
							echo $class,"<br>",++$class,"</td>";
					  	}
						$i++;
				    }
				    for($i;$i<=30;$i++){
						echo "<td></td>";
					    if($i%5==0 and $i!=30){
							echo "</tr><tr><td>";
							if($i==5){
								$class=3;
							}
							else if($i==10){
								$class=5;
							}
							else if($i==15){
								$class=7;
							}
							else if($i==20){
								$class=9;
							}
							else if($i==25){
								$class=11;
							}
							echo $class,"<br>",++$class,"</td>";
					  	}
				    }
					mysql_close($con);
			      ?>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
          </div>
          
        </div>
      </div>
    </div>
    
    <script type="text/javascript">
　　 function allCheck(check){
	var checkbox=document.getElementsByName("withdraw[]");
	if(check.checked){
		for(var i=0;i<checkbox.length;i++){
			checkbox[i].checked="checked";
		}
	}
	else{
		for(var i=0;i<checkbox.length;i++){
			checkbox[i].checked="";
		}
	}
	}
	</script>

    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/holder.js"></script>
    <script src="js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
