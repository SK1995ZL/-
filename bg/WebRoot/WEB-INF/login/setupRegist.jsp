<%@ page language="java" import="java.util.*,com.sk.util.*" pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title><%=Domain.BG_SET_UP_TITLE %></title>
		<jsp:include page="../../resource/bootscript.jsp"></jsp:include>
	</head>
	
	<body class="main">
	    <form action="" id="setUpRegistForm" method="post">
		<div style="padding-top: 10%;padding-left: 20%;padding-right: 20%;padding-bottom: 10%;">
			<div class="panel panel-success">
			   <div class="panel-heading">
			      <h3 class="panel-title"><span class="glyphicon glyphicon-user"></span><%=Domain.BG_SET_UP_TITLE %></h3>
			   </div>
			   <div class="panel-body">
			        <div>
			           <table class="table table-hover">
		                 <tr>
		                 	<td align="right">昵称：</td>
		                 	<td align="left">
		                 		<input type="text" name="nickname" id="nickname" title="请输入昵称8至20位，只能包括数字字母下划线" rel="昵称" class="main_input" data-toggle="tooltip"><div id="nicknameText"></div> 
		                 	    <input type="hidden" name="kindId" id="kindId" value="<%=Domain.KIND_SETUP%>"/>
		                 	</td>
		                 </tr>
		                 <tr>
		                 	<td align="right">密码：</td>
		                 	<td align="left"><input type="text" name="password" id="password" title="请输入密码8至20位，只能包括数字字母下划线" rel="密码" class="main_input password" data-toggle="tooltip" title="请输入密码"></td>
		                 </tr>
		                 <tr>
		                 	<td align="right">手机：</td>
		                 	<td align="left"><input type="text" name="mobile" id="mobile" title="请输入手机号" rel="手机号"  class="main_input" data-toggle="tooltip" title="请输入手机号"></td>
		                 </tr>
		                 <tr>
		                 	<td align="right">邮箱：</td>
		                 	<td align="left"><input type="text" name="email" id="email" title="请输入邮箱" rel="邮箱"  class="main_input" data-toggle="tooltip" title="请输入邮箱"></td>
		                 </tr>
		                 <tr>
		                 	<td align="right">职务：</td>
		                 	<td>
		                 		<select class="main_select" data-toggle="tooltip" id="post" name="post" rel="职务" title="请选择职务职务">
		                 		   <c:forEach items="${postMap}" var="post">
		                 		     <option value="${post.key}">${post.value}</option>
		                 		   </c:forEach>
		                 		</select>
		                  </tr>
		                  <tr>
		                 	<td align="right">邮寄地址：</td>
		                 	<td><input type="text" name="mailingAddr" id="mailingAddr" data-toggle="tooltip" title="请输入邮寄地址" rel="邮寄地址" class="main_input"></td>
		                 </tr>
		                 <tr>
		                    <td colspan="2" align="center">
							  <button type="button" class="btn btn-success" id="setUpRegist">注册</button><span class="space">&nbsp;</span>
							  <button type="button" class="btn btn-success" id="setUpClose">取消</button>
		                    </td>
		                 </tr> 
			           </table>
			        </div>
			      	<p><strong>点击“立即注册”，即表示您同意并愿意遵守本系统
			      	<a href="javascript:void(0)"  data-toggle="modal" data-target="#myModal" >用户注册协议</a></strong></p>
			   </div>
			   <div class="panel-footer" align="center"><%=Domain.BG_BUTTOM_TITLE %></div>
			</div>
		</div>
		</form>
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close"  data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="myModalLabel">用户协议</h4>
					</div>
					<div class="modal-body" id="userAgree"></div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
					</div>
				</div>
			</div>
		</div>
	    <script language="javascript">
             $(document).ready(function(){
                //用户协议
                $("#userAgree").load("./setup!userAgree.ht");
                //取消
                $("#setUpClose").click(function (){
                	self.location.href="./login!index.ht";
                });
                var boo=true;
               	$("#nickname").blur(function (){
                    $.post("./setUp!nickname.ht", { nickname: $("#nickname").val() },
         				function(data){
         				    alert("data="+data);
         				    if(data==0){
         						$("#nicknameText").html("<span class=\"glyphicon glyphicon-ok\"><span class=\"font_green\">此昵称可以使用</span>");
         						boo=true;
         						return boo;
         				    }else{
         				        $("#nicknameText").html("<span class=\"glyphicon glyphicon-remove\"><span class=\"font_red\">此昵称不可以使用</span>");
         				    	boo=false;
         				    	return boo;
         				    }
          				});
                });
                
               $("#setUpRegist").click(function(){
                   if(!boo)return false;
                   var bool=account( $("#nickname"),8,20);
                   if(!bool)return false;
                   bool=account( $("#password"),8,20);
                   if(!bool)return false;
                   bool=mobile($("#mobile"));
                   if(!bool)return false;
                   bool=email($("#email"));
                   if(!bool)return false;
                   bool=select($("#post"));
                   if(!bool)return false;
                   bool=select($("#mailingAddr"));
                   if(!bool)return false;
                   
                   $("#setUpRegistForm").attr("action","./setUp!regist.ht");
                   $("#setUpRegistForm").submit();
                }); 
                //$(function () { $('input[data-toggle=tooltip]').tooltip('toggle');});
             });
	    </script>
	</body>
</html>
