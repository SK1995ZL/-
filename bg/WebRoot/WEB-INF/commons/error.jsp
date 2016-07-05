<%@ page  pageEncoding="UTF-8" isErrorPage="true" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
	<head>
		<title>Error Page</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<link href="<%=request.getContextPath()%>/resource/style/page.css" rel="stylesheet" type="text/css"/>		
		<script language="javascript">
			function showDetail()
			{
				document.getElementById('detail_error_msg').style.display = "";
			}
		</script>
	</head>
	<body style="padding:5px 5px 5px 5px">
			<div class="div_error">
				<h3><s:property value="exception"/></h3>
			</div>
			<p><a href="#" onclick="showDetail();">Administrator click here to get the detail.</a></p>
			<div class="div_error" id="detail_error_msg" style="display:none" >
				<s:property value="exceptionStack"/>
			</div>
	</body>
</html>