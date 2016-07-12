<%@ page language="java" import="java.util.*,com.sk.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	 <head>
		<title><%=Domain.BG_TITLE%></title>
		<jsp:include page="../../resource/bootscript.jsp"></jsp:include>
		
	 </head>
	 <body class="main">
		<div style="width: 100%;height:8%" align="left">
			<img alt="bgLoginTitle" src="<%=request.getContextPath()%>/resource/images/bg/login_menu_title.png">"
		</div>
		<div style="width: 100%;height: 60%;" align="center">
			<img alt="bgLoginContent" class="loginContent" src="<%=request.getContextPath()%>/resource/images/bg/login_button_ew.png">
		</div>
		<form id="loginForm" action="" method="post">
			<div class="container" align="center">
			  	<strong>昵称：</strong>
			  	<input type="text" name="nickname" id="nickname"  data-toggle="tooltip" rel="昵称" title="请输入昵称" style="width: 20%" class="main_input"><span class="space">&nbsp;</span><span class="space">&nbsp;</span>
			  	<strong>密码：</strong><input type="password" name="password" id="password" rel="密码"  data-toggle="tooltip" style="width: 20%" class="main_input" title="请输入密码">
			  	<div id="dangers"></div>
			</div>
		</form>
		<div align="center" style="width:100%;height: 30%;padding-top:2% ">
		   <input type="button" id="login" value="用户登录" class="btn btn-success"/><span class="space">&nbsp;</span><span class="space">&nbsp;</span>
		   <input type="button" id="regist" value="搭建商注册" class="btn btn-success"/><span class="space">&nbsp;</span><span class="space">&nbsp;</span>
		   <input type="button" id="forgetPass" value="忘记密码" class="btn btn-success"/>
		</div>
		<div class="modal fade" id="myRegistModal" tabindex="-1" role="dialog" 
   			aria-labelledby="myModalLabel" aria-hidden="true">
   			<div class="modal-dialog">
      			<div class="modal-content">
         			<div class="modal-header">
            			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  			&times;
            			</button>
            			<h4 class="modal-title" id="myModalLabel">
              				 注册成功
            			</h4>
         			</div>
         			<div class="modal-body">
            			<span class="font_grey"><strong>注册成功，请登录</strong></span>
         			</div>
         			<div class="modal-footer">
            			<button type="button" class="btn btn-default"  data-dismiss="modal">关闭</button>
         			</div>
      			</div>
			</div>
		</div>
		<div class="modal fade" id="myLoginModal" tabindex="-1" role="dialog" 
   			aria-labelledby="myModalLabel" aria-hidden="true">
   			<div class="modal-dialog">
      			<div class="modal-content">
         			<div class="modal-header">
            			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  			&times;
            			</button>
            			<h4 class="modal-title" id="myModalLabel">
              				<span class="font_red"><span class="glyphicon glyphicon-remove"></span>登录失败或者登录失效</span>
            			</h4>
         			</div>
         			<div class="modal-body">
            			<span class="font_red"><strong>登录失败或者登录失效，请重新登录</strong></span>
         			</div>
         			<div class="modal-footer">
            			<button type="button" class="btn btn-default"  data-dismiss="modal">关闭</button>
         			</div>
      			</div>
			</div>
		</div>
		<script language="javascript">
			$(document).ready(function (){
				$("#login").click(function (){
				 	var b=account( $("#nickname"),8,20);
				 	//alert("username="+b);
                   	if(!b)return false;
                   	b=account( $("#password"),8,20);
                   	//alert("password="+b);
                   	if(!b)return false;
					$("#loginForm").attr("action","./login!login.ht");
					$("#loginForm").submit();
     			});
		       $("#regist").click(function(){
		           $("#loginForm").attr("method","get");
		       	   $("#loginForm").attr("action","./setup!toRegist.ht");
		           $("#loginForm").submit();
		       });
		       if(${isRegist==1}){
		       		$('#myRegistModal').modal();
		       };
		       if(${model==101}){
		       		$('#myLoginModal').modal();
		       }
		   });
		   $(function () { $('input[data-toggle=tooltip]').tooltip();});
		</script>
	 </body>
</html>
