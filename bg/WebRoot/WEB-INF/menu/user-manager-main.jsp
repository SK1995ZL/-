<%@ page language="java" import="java.util.*,com.sk.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
	  <title><%=Domain.BG_TITLE %></title>
	</head>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resource/jqueryEasyUi/ui-cupertino/easyui.css">
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resource/jqueryEasyUi/themes/icon.css">
	<script src="<%=request.getContextPath()%>/resource/jqueryEasyUi/jquery.min.js" type="text/javascript"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/resource/jqueryEasyUi/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/resource/jqueryEasyUi/validate.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/resource/jqueryEasyUi/easyloader.js"></script>
	<script src="<%=request.getContextPath()%>/resource/json2.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resource/style/page.css">
	<body>
	  <div align="center"  style="width:auto;height:auto">
	    	<!-- 列表 -->
			<table id="user_manager_index" title="欢迎进入‘账号管理’列表" style="width:auto;height:auto"></table>
			<div  id="user_mnager_index_toolbar" border="false"  
                style="border-bottom: 1px solid #ddd; height: 32px; padding: 2px 5px; background: #fafafa;">  
                <div style="float: left;">  
                    <a href="#" class="easyui-linkbutton" plain="true" onclick="user_manager_new()" icon="icon-add">新增</a>  
                </div>  
                <div class="datagrid-btn-separator"></div>  
                <div style="float: left;">  
                    <a href="#" class="easyui-linkbutton" plain="true" onclick="toedit()" icon="icon-save">编辑</a>  
                </div>  
                <div class="datagrid-btn-separator"></div>  
                <div style="float: left;">  
                    <a href="#" class="easyui-linkbutton" plain="true" icon="icon-remove">删除</a>  
                </div>
                <div class="datagrid-btn-separator"></div>  
                <div style="float: left;">  
                    <a href="#" class="easyui-linkbutton" plain="true" icon="icon-more">审批</a>  
                </div>  
                <div id="tb" style="float: right;">  
                    <input id="user_manager_combobox" class="easyui-combobox"  prompt="请输入账户类型" style="width:200px; vertical-align: middle;"></input>
                    <a href="#"  id="search" class="easyui-linkbutton" plain="true" icon="icon-search">搜索</a>
                </div>  
            </div>
            <!-- 新增 -->
            <div id="user_manager_new"></div>
            <div id="user_manager_new_buttons">
				<a href="javascript:void(0)" class="easyui-linkbutton" icon="icon-save"  onclick="javascript:user_manager_edit_new()">提交</a>
				<a href="javascript:void(0)" class="easyui-linkbutton" onclick="javascript:$('#user_manager_new').dialog('close')">Close</a>
			</div>
			<div  id="user_manager_new_toolbar" border="false"  
                style="border-bottom: 1px solid #ddd; height: 32px; padding: 2px 5px; background: #fafafa;">  
                <div style="float: left;">  
                    <a href="#" class="easyui-linkbutton" plain="true" icon="icon-save" onclick="addSub()">提交</a>  
                </div> 
            </div> 
       </div>
       <script type="text/javascript">
       		function load(kindId){
       			$('#user_manager_index').datagrid({
    				pageSize:10,
    				pageList:[10,20,30],
    				rownumbers:true,
					singleSelect:true,
					autoRowHeight:true,
					pagination:true,
					loading:true,
					selectOnCheck: true,
					checkOnSelect: true,
					toolbar:'#user_mnager_index_toolbar',
					queryParams:{kindId:kindId+''},
					fitColumns:false,
					columns:[[
						{field:'id',checkbox:true,width:250,height:40},
				        {field:'nickname',title:'昵称',width:280,align:'center',formatter:formatterTxt},
				        {field:'kindName',title:'用户组别',width:250,align:'center',formatter:formatterTxt},
				        {field:'mobile',title:'手机号',width:250,align:'center',formatter:formatterTxt},
				        {field:'token',title:'注册码',width:300,align:'center',formatter:formatterTxt}
   				 	]],
   				 	url:'./user-manager!index.ht'
				});
				$('#user_manager_index').datagrid('getPager').pagination({
	       			beforePageText: '第',//页数文本框前显示的汉字 
			        afterPageText: '页    共 {pages} 页',
			        displayMsg: '共{total}条数据',
	   		   	}); 
       		}
       		function formatterTxt(value,row,index){
				return "<span id=\"navTab\">"+value+"</span>";
			};
			$('#user_manager_combobox').combobox({
				url:'./user-manager!user-kind-combo.ht',
				valueField:'id',
				textField:'name',
				panelHeight:'auto'
			});
			function user_manager_new(){
				$('#user_manager_new').dialog('open');
			}
			function user_manager_edit_new(){
				$("#user_manager_new_form").form('submit',{
					url:'./user-manager!edit-new.ht',
			        onSubmit: function(){
			            return $("#user_manager_new_form").form('validate');
			        },
			        success:function(data){
			            data=data.split("ccess:")[1];
			            $.messager.alert('SUCCESSFUL',data,'icon-ok');
			            $('#user_manager_new').dialog('close');
			            load('');
			        }
			    });
			}
			$("#search").click(function(){
				load($('#user_manager_combobox').combobox('getValues'));
			});
       		$(function(){
       			//加载
       			load('');
       			//new
       			$('#user_manager_new').dialog({
    				title: '添加会员',
				    resizable:true,
				    closed: true,
				    cache: false,
				    iconCls: 'icon-save',
				    toolbar: '#user_manager_new_toolbar',
					buttons: '#user_manager_new_buttons',
					href:'./user-manager!new.ht',
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
       		});
       </script>
	</body>
</html>
