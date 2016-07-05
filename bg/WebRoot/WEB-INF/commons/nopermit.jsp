<%@ page  pageEncoding="UTF-8" isErrorPage="true" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
	<title>没有权限</title>
	<style type="text/css">
		body { height: 100%; background:url(<%=request.getContextPath()%>/images/bodybg.gif) repeat-x top; margin: 0px; padding:0px; font-family: Tahoma, Arial, Helvetica, sans-serif;  overflow-x: auto; overflow-y: auto; font-size: 11px; font-weight: normal; color: #000000;}
		a:link { color:#00238a;text-decoration: none; }
		a:visited { color:#00238a;text-decoration: none; }
		a:hover { text-decoration: underline; }
		a:active { text-decoration: underline; }
		h2 { color: #FF0E0E; margin: 0 0 5px 0; font-size: 14px; font-weight: bold;border-bottom:1px solid #cccccc;padding-bottom:5px;font-family: Tahoma, Arial, Helvetica, sans-serif;}
		div#centered { border: 0; width: 500px; margin:80px auto; color: black; padding:10px;border:2px solid #b1c5de; text-align:right;background: #ffffff;overflow:hidden;}
		.aligncenter {text-align:center;}
		#content {width:480px;text-align:left;float:right;}
	</style>
</head>
	<body>
		<div class="aligncenter">
			<div id="centered">
				<div id="content">
					<h2>没有权限</h2>
					<p>请求页面没有权限,可能因为以下原因所致:</p>
					<ul>
						<li>页面或文件过期, 重命名, 移除, 或不存在.</li>
						<li>非法操作,请求地址有误.</li>
					</ul>
					<p>如果您不确定问题在哪儿,请联系管理员.</p>
					<br/><br/>
				</div>
			</div>
		</div>
	</body>
</html>