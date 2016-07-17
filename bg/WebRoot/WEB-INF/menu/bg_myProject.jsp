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
		<script src="<%=request.getContextPath()%>/resource/json2.js" type="text/javascript"></script>
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resource/style/page.css">
	<style type="text/css">
		.datagrid-btable tr{height: 40px;}
	</style>
	</head>
	<body >
	    <div align="center"  style="width:auto;height:auto">
			<table id="myprojectIndex" title="欢迎进入‘我的项目’列表" style="width:auto;height:auto"></table>
			<div id="addProject"></div>
			<div  id="easyui_toolbar" border="false"  
                style="border-bottom: 1px solid #ddd; height: 32px; padding: 2px 5px; background: #fafafa;">  
                <div style="float: left;">  
                    <a href="#" class="easyui-linkbutton" plain="true" onclick="add()" icon="icon-add">新增</a>  
                </div>  
                <div class="datagrid-btn-separator"></div>  
                <div style="float: left;">  
                    <a href="#" class="easyui-linkbutton" plain="true" icon="icon-save">编辑</a>  
                </div>  
                <div class="datagrid-btn-separator"></div>  
                <div style="float: left;">  
                    <a href="#" class="easyui-linkbutton" plain="true" icon="icon-remove">删除</a>  
                </div>  
                <div id="tb" style="float: right;">  
                    <input id="ss" class="easyui-searchbox main_input"  prompt="请输入项目名称" style="width:500px; vertical-align: middle;"></input>   
                </div>  
                <div id="mm">
					<div data-options="name:'searchName',iconCls:'icon-ok'">项目名称</div>
				</div>
            </div>
            <div id="addMyProject"></div>
            <div id="addMyProject-buttons">
				<a href="javascript:void(0)" class="easyui-linkbutton" icon="icon-add"  onclick="">暂存</a>
				<a href="javascript:void(0)" class="easyui-linkbutton" icon="icon-save"  onclick="">提交</a>
				<a href="javascript:void(0)" class="easyui-linkbutton" onclick="javascript:$('#addMyProject').dialog('close')">Close</a>
			</div>
			<div  id="addMyProject_toolbar" border="false"  
                style="border-bottom: 1px solid #ddd; height: 32px; padding: 2px 5px; background: #fafafa;">  
                <div style="float: left;">  
                    <a href="#" class="easyui-linkbutton" plain="true" onclick="" icon="icon-add">暂存</a>  
                </div>  
                <div class="datagrid-btn-separator"></div>  
                <div style="float: left;">  
                    <a href="#" class="easyui-linkbutton" plain="true" icon="icon-save">提交</a>  
                </div> 
            </div>  
		</div>
		<script type="text/javascript">
			
			
			$(function(){
				//searcherShow();
				$('#addMyProject').dialog({
    				title: 'My Dialog',
				    resizable:true,
				    closed: true,
				    cache: false,
				    iconCls: 'icon-save',
				    toolbar: '#addMyProject_toolbar',
					buttons: '#addMyProject-buttons',
				    //href: 'get_content.php',
				    collapsible: true,
	                minimizable: true,
	                maximizable: true,
	                resizable: true,
	                width: 700,
	                height: 400,
	                left: 150,
					top:50,
				    modal: true
				});
				$('#ss').searchbox({  
                	menu : '#mm',
                	searcher: doSearchName
                });  
				function remove(){
					var checkedItems = $('#myprojectIndex').datagrid('getChecked');
					alert(JSON.stringify(checkedItems));
					alert(checkedItems.length);
					if(checkedItems.length<=0){
						$.messager.alert('警告','您没有选择删除任何数据');
					}
					$.each(checkedItems, function(index, item){
						
					}); 
				}
				
			});
			function add(){
				$('#addMyProject').dialog('open');
			}
			function formatterTxt(value,row,index){
					return "<span id=\"navTab\">"+value+"</span>";
			};
			function doSearchName(value,name){
				if(!(value.length >= 0 && value.length  <= 33)){
					$.messager.alert('警告','搜索框请输入大于0小于33的字符');
					return false;
				}
				if(!(value.length == 0)){
					if(!(/^[a-zA-Z0-9\u4E00-\u9FA5]+$/.test(value))){
						$.messager.alert('警告','搜索框请输入中文英文或者数字');
						return false;
					}
				}
				$('#myprojectIndex').datagrid({
    				pageSize:10,
    				rownumbers:true,
					singleSelect:true,
					autoRowHeight:true,
					pagination:true,
					loading:true,
					selectOnCheck: true,
					checkOnSelect: true,
					toolbar:'#easyui_toolbar',
					fitColumns:false,
					columns:[[
						{field:'id',checkbox:true,width:200,height:40},
				        {field:'name',title:'项目名称',width:200,align:'center',formatter:formatterTxt},
				        {field:'officeStart',title:'报馆开始日期',width:180,align:'center',formatter:formatterTxt},
				        {field:'officeEnd',title:'报馆结束日期',width:180,align:'center',formatter:formatterTxt},
				        {field:'creatorStr',title:'创建人',width:180,align:'center',formatter:formatterTxt},
				        {field:'createTime',title:'创建时间',width:180,align:'center',formatter:formatterTxt},
				        {field:'statusStr',title:'项目状态',width:160,align:'center',formatter:formatterTxt}
   				 	]],
   				 	url:'./menu!myProjectlist.ht?searchName='+value
				});
				$('#myprojectIndex').datagrid('getPager').pagination({
	       			beforePageText: '第',//页数文本框前显示的汉字 
			        afterPageText: '页    共 {pages} 页',
			        displayMsg: '共{total}条数据'
   		   		}); 
				return true;
    		}
    		$('#myprojectIndex').datagrid({
    				pageSize:10,
    				rownumbers:true,
					singleSelect:true,
					autoRowHeight:true,
					pagination:true,
					loading:true,
					selectOnCheck: true,
					checkOnSelect: true,
					toolbar:'#easyui_toolbar',
					fitColumns:false,
					columns:[[
						{field:'id',checkbox:true,width:200,height:40},
				        {field:'name',title:'项目名称',width:200,align:'center',formatter:formatterTxt},
				        {field:'officeStart',title:'报馆开始日期',width:180,align:'center',formatter:formatterTxt},
				        {field:'officeEnd',title:'报馆结束日期',width:180,align:'center',formatter:formatterTxt},
				        {field:'creatorStr',title:'创建人',width:180,align:'center',formatter:formatterTxt},
				        {field:'createTime',title:'创建时间',width:180,align:'center',formatter:formatterTxt},
				        {field:'statusStr',title:'项目状态',width:160,align:'center',formatter:formatterTxt}
   				 	]],
   				 	url:'./menu!myProjectlist.ht'
			});
			$('#myprojectIndex').datagrid('getPager').pagination({
       			beforePageText: '第',//页数文本框前显示的汉字 
		        afterPageText: '页    共 {pages} 页',
		        displayMsg: '共{total}条数据',
   		   	}); 
		</script>
	</body>
</html>
