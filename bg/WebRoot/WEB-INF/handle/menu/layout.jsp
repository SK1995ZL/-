<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<title>Full Layout - jQuery EasyUI Demo</title>
	<%@include file="../../../resource/include.jsp" %>
	
</head>
<body class="easyui-layout" >
	<div data-options="region:'north',border:false" id="menuTop" style="height:13%;background:#B3DFDA;padding:10px">
		
	</div>
	<div data-options="region:'west',split:true,title:'菜单列表'" style="width:17%;padding:10px;" id="menuLeft">
	    <ul id="modularTree" class="ztree"></ul>
	</div>
	<div data-options="region:'south'" id="menuButtom" align="center" style="height:10%;background:#A9FACD;padding:10px;">
		    @SK特约编辑
	</div>
	<div data-options="region:'center',fit:true,border:false">
	     <div id="tabs" class="easyui-tabs" data-options="fit:true,border:false,plain:true">
	        <div title="About" id="about">
	        </div>
        </div>
	</div>
	<script language="javascript">
	  $(document).ready(function(){
	       //$("#menuLeft").load("./left.springmvc");
	       $("#menuTop").load("./top.ht");
		   $("#about").load("./about.ht");
	   });
	   var setting = {
		data: {
			simpleData: {
			   enable: true,
			   idKey:"id",
			   pIdKey:"pid"
			}
		},
		callback: {
			onClick:nodeClick
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
			}
		}
		function createFrame(href)
		{
			var s = '<iframe scrolling="auto" frameborder="0" border="0" src='+href+' style="width:100%;height:100%;"></iframe>';
			return s;
		}
		
		var zNodes =${jsons};
		
		$(document).ready(function(){
			$.fn.zTree.init($("#modularTree"), setting, zNodes);
		});
	  
	</script>
</body>
</html>