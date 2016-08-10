<%@ page language="java" import="java.util.*,com.sk.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title><%=Domain.BG_TITLE %></title>
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resource/jqueryEasyUi/ui-cupertino/easyui.css">
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resource/jqueryEasyUi/themes/icon.css">
	<script src="<%=request.getContextPath()%>/resource/jqueryEasyUi/jquery.min.js" type="text/javascript"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/resource/jqueryEasyUi/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/resource/jqueryEasyUi/easyloader.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/resource/jqueryEasyUi/validate.js"></script>
	<script src="<%=request.getContextPath()%>/resource/json2.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resource/style/page.css">
  </head>
  
  <body>
	<div class="title_h1">会员添加</div>
	<form method="post" id="user_manager_new_form" action="./user-manager!edit-new.ht">
		<table id="" cellpadding="0" cellspacing="0" class="tbB">
			<colgroup>
				<col width="30%"/>
				<col width="35%"/>
				<col width="30%"/>
				<col width="35%"/>
			</colgroup>
			<tr>
				<th>昵称：</th>
				<td colspan="3">
					<input type="text" name="nickname" id="nickname" class="easyui-textbox" style="width:100%;height:auto;" data-options="required:true,validType:['ajaxUser','minLength_new[8]','maxLength_new[20]']">
				</td>
			</tr>
			<tr>
				<th>密码：</th>
				<td>
					<input type="password" name="password" id="password" class="easyui-textbox" style="width:100%;height:auto;" data-options="required:true,validType:['minLength_new[8]','maxLength_new[20]']">
				</td>
				<th>邮箱：</th>
		        <td><input type="text" name="email" id="email" class="easyui-textbox" style="width:100%;height:auto;" data-options="required:true,validType:['email']"></td>
		                 
			</tr>
			<tr>
				<th>手机号：</th>
				<td>
					<input type="text" name="mobile" id="mobile" class="easyui-textbox" style="width:100%;height:auto;" data-options="required:true,validType:['mobile']">
				</td>
				<th>用户类型：</th>
				<td>
					<input id="kindId" name="kindId" class="easyui-combobox"  prompt="请输入账户类型" data-options="required:true" style="width:200px; vertical-align: middle;"></input>
				</td>
			</tr>
			<tr>
               	<th>职务：</th>
               	<td>
               		<input type="text" class="easyui-combobox"  id="post" name="post"  prompt="请选择职务职务" data-options="required:true" style="width:200px; vertical-align: middle;"/>
               	</td>
               	<th>邮寄地址：</th>
               	<td><input type="text" class="easyui-textbox" name="mailingAddr" id="mailingAddr"  prompt="请输入邮寄地址"  data-options="required:true,validType:['minLength_new[8]']" ></td>
            </tr>
		</table>    
	</form>
	<script type="text/javascript">  
	      $('#kindId').combobox({
				url:'./user-manager!user-kind-combo.ht',
				valueField:'id',
				textField:'name',
				panelHeight:'auto'
		  });
		  $('#post').combobox({
				url:'./user-manager!user-post-combo.ht',
				valueField:'id',
				textField:'postName',
				panelHeight:'auto'
		  });
	</script>
</body>
</html>
