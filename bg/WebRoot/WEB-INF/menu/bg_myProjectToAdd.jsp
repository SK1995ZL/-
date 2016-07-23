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
   	<div class="title_h1">报馆项目添加</div>
   	<form method="post" id="addObjectForm" action="./menu!myProjectAdd.ht">
		<table id="" cellpadding="0" cellspacing="0" class="tbB">
			<colgroup>
				<col width="30%"/>
				<col width="35%"/>
				<col width="30%"/>
				<col width="35%"/>
			</colgroup>
			<tr>
				<th>项目名称</th>
				<td colspan="3"><input type="text" name="name" id="name" class="easyui-validatebox easyui-textbox" style="width:100%;height:auto;" data-options="required:true,validType:['projectName','minLength[5]']"></td>
			</tr>
			<tr>
				<th>报馆开始开始时间</th>
				<td>
					<input type="text" name="officeStart" id="officeStart" class="easyui-datetimebox easyui-textbox" required style="width:100%;height:auto;" data-options="formatter:ww4,validType:'dateShort'">
				</td>
				<th>报馆结束结束时间</th>
				<td>
					<input type="text" name="officeEnd" id="officeEnd" class="easyui-datetimebox easyui-textbox"required  style="width:100%;height:auto;" data-options="formatter:ww4,validType:'dateShort'" >
					<input type="hidden" name="creator" value="${user.id}">
				</td>
			</tr>
		</table>    
	</form>
    <script type="text/javascript">  
       function ww4(date){  
       		//alert("date");
            var y = date.getFullYear();  
            var m = date.getMonth()+1;  
            var d = date.getDate();  
            var h = date.getHours();  
            return  y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d)+' '+(h<10?('0'+h):h);  
              
        }  
        function w4(s){  
        	//alert("S=");
            var reg=/[\u4e00-\u9fa5]/;  //利用正则表达式分隔  
            var ss = (s.split(reg));  
            var y = parseInt(ss[0],10);  
            var m = parseInt(ss[1],10);  
            var d = parseInt(ss[2],10);  
            var h = parseInt(ss[3],10);  
            if (!isNaN(y) && !isNaN(m) && !isNaN(d) && !isNaN(h)){  
                return new Date(y,m-1,d,h);  
            } else {  
                return new Date();  
            }  
        }  
    </script> 
  </body>
</html>
