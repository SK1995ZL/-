<%@ page language="java" import="java.util.*,com.sk.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
	  <title><%=Domain.BG_TITLE %></title>
	  <jsp:include page="../../resource/easyUi.jsp"></jsp:include>
	  <style>
		#title{font-size:30px;font-family:Tahoma, 楷体, Arial, Verdana;padding-top: 10px;padding-left: 5%}
		.headerNav ul{list-style:none;}
		.headerNav li{float:right;}
		#header { display:block; overflow:hidden; height:50px; z-index:30}
	</style>
	</head>
	<script type="text/javascript">
	   $(document).ready(function(){
	   });
	   var setting = {
			data: {
				simpleData: {
				   enable: true
				}
			},
			callback: {
				onClick:nodeClick
			},
			view: {
				showIcon: true
			}
		};
		function nodeClick() {
			var zTree = $.fn.zTree.getZTreeObj("modularTree");
			var nodes = zTree.getSelectedNodes();
			var href=JSON.stringify(nodes[0].rel);
			var name=JSON.stringify(nodes[0].name);
			name=name.substr(1,name.length-2);
			addTabs(href,name);
		}
		function addTabs(href,name){
		    if(!$('#tabs').tabs('exists',name)){
				$("#tabs").tabs("add",{
					title:name,
					content:createFrame(href),
					closable:true,
					icon: ''
				});
			}else{
				$("#tabs").tabs('select', name);
			}
		}
		function createFrame(href)
		{
			var s = '<iframe scrolling="auto" frameborder="0" border="0" src='+href+' style="width:100%;height:100%;"></iframe>';
			return s;
		}
		
		var zNodes =${menus};
		
		$(document).ready(function(){
			$.fn.zTree.init($("#modularTree"), setting, zNodes);
			$("#loginOut").click(function(){
				$.messager.confirm('退出登录', '您确定要退出登录吗', function(r){
					if (r){
						$("#loginOutForm").attr("action","./login!out.ht");
						$("#loginOutForm").submit();
					}
				});
			});
			$("#about").html('<iframe scrolling="auto" frameborder="0" border="0" src=./menu!homePage.ht style="width:100%;height:100%;"></iframe>');
			$('#lblClock').jclock({format: '%A %Y-%m-%d %H:%M:%S'});
		});
	</script>
	<body class="easyui-layout">
	    <div data-options="region:'north'" style="height:10%">
	        <%-- <div>
	            <form id="loginOutForm" action="" method="get">
		        	<p id="title" align="left"><%=Domain.BG_TITLE %><span class="space">&nbsp;</span><span class="space">&nbsp;</span><span class="space">&nbsp;</span>
	                    <a href="#" class="easyui-linkbutton" id="loginOut" data-options="iconCls:'icon-adim'">${user.nickname}退出登录</a>	        	
		        	</p>
	        	</form>
		    </div> --%>
		    <div id="header">
			    <div class="headerNav">
					<a class="logo" href="javascript:void(0);"></a>
					<ul class="nav">
						<li><a href="javascript:void(0);" id="loginOut">注销</a></li>
						<li><a href="javascript:void(0);">|</a></li>
						<li><a href="javascript:void(0);" id="changePwd">修改密码</a></li>
						<li><a href="javascript:void(0);">|</a></li>
						<li><a href="javascript:void(0);"><label id="lblClock"></label></a></li>
						<li><a href="javascript:void(0);">|</a></li>
						<li><a href="javascript:void(0);" id="loginOut">欢迎：${user.nickname}</a></li>
					</ul>
				</div>
			</div>
			 <form id="loginOutForm" action="" method="get"></form>
		</div>
	    <div data-options="region:'center'">
	        <div class="easyui-layout" data-options="fit:true">
	            <div data-options="region:'west'" style="width:15%">
	            	<ul id="modularTree" class="ztree"></ul>
	            </div>
	            <div data-options="region:'center'">
	            	<div id="tabs" class="easyui-tabs" data-options="fit:true,border:true,plain:true">
	        			<div title="首页" id="about">
	        			</div>
	        		</div>
	            </div>
	        </div>
	    </div>
	</body>
</html>
