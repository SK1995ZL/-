function MovableList(listId, width, height){
	this._id		= listId;
	this._params = {
							'topHeight'			:	30,
							'selBarLabel'		:	td_lang.platform.msg_7,
							'btnBarLabel'		:	td_lang.platform.msg_8,
							'btnBarPos'			:   'l',
							'btnBarWidth'		:	60,
							'topBtn'			:	true,
							'bottomBtn'			:	true,
							'upBtn'				:	true,
							'downBtn'			:	true,
							'selAllBtn'			:	true,
							'selAllHeight'		:	30
						};
	this._params['btnLabel'] = {
								'top'			:	td_lang.platform.msg_9,
								'bottom'		:	td_lang.platform.msg_10,
								'up'			:	td_lang.platform.msg_11,
								'down'			:	td_lang.platform.msg_12,
								'all'			:	td_lang.platform.msg_13
							}
	this._params['height']	= (typeof width != "undefined" && width != "") ? width : 400;
	this._params['width']	= (typeof height != "undefined" && height != "") ? width : 400;
}

MovableList.prototype.setup = function(params) {//生成table容器
	this._params["topHeight"]	= (	( typeof params["topHeight"] != "undefined" && params["topHeight"] != "")		? params["topHeight"]		: this._params["topHeight"]		) ;
	this._params["selBarLabel"]	= (	( typeof params["selBarLabel"] != "undefined" && params["selBarLabel"] != null)	? params["selBarLabel"]		: this._params["selBarLabel"]	) ;
	this._params["btnBarLabel"]	= (	( typeof params["btnBarLabel"] != "undefined" && params["btnBarLabel"] != null)	? params["btnBarLabel"]		: this._params["btnBarLabel"]	) ;
	this._params["btnBarPos"]	= (	( typeof params["btnBarPos"] != "undefined" && params["btnBarPos"] != "")		? params["btnBarPos"]		: this._params["btnBarPos"]		) ;
	this._params["btnBarWidth"]	= (	( typeof params["btnBarWidth"] != "undefined" && params["btnBarWidth"] != "")	? params["btnBarWidth"]		: this._params["btnBarWidth"]	) ;
	this._params["topBtn"]		= (	( typeof params["topBtn"] == "undefined" || params["topBtn"] == null)		? this._params["topBtn"]		: 	params["topBtn"]	) ;
	this._params["bottomBtn"]	= (	( typeof params["bottomBtn"] == "undefined" || params["bottomBtn"] == null)		? this._params["bottomBtn"] 		: 		params["bottomBtn"]) ;
	this._params["upBtn"]		= (	( typeof params["upBtn"] == "undefined" || params["upBtn"] == null)			? this._params["upBtn"]			: params["upBtn"]			) ;
	this._params["downBtn"]		= (	( typeof params["downBtn"] == "undefined" || params["downBtn"] == null)		? this._params["downBtn"]		: params["downBtn"]			) ;
	this._params["selAllBtn"]	= (	( typeof params["selAllBtn"] == "undefined" || params["selAllBtn"] == null)		? this._params["selAllBtn"]		:  params["selAllBtn"]		) ;
	this._params["selAllHeight"]	= (	( typeof params["selAllHeight"] != "undefined" && params["selAllHeight"] != "")	? params["selAllHeight"]	: this._params["selAllHeight"]	) ;

	if(typeof params["btnLabel"] == "undefined" || params["btnLabel"] == ""){
		this._params["btnLabel"] = this._params["btnLabel"];
	}else{
		this._params['btnLabel']  = new Array();
		this._params["btnLabel"]["top"] = (	(typeof params["btnLabel"]["top"] != "undefined" && params["btnLabel"]["top"] != "")	? params["btnLabel"]["top"]	: this._params["btnLabel"]["top"]	) ;
		this._params["btnLabel"]["bottom"] = (	(typeof params["btnLabel"]["bottom"] != "undefined" && params["btnLabel"]["bottom"] != "")	? params["btnLabel"]["bottom"]	: this._params["btnLabel"]["bottom"]	) ;
		this._params["btnLabel"]["up"] = (	(typeof params["btnLabel"]["up"] != "undefined" && params["btnLabel"]["up"] != "")	? params["btnLabel"]["up"]	: this._params["btnLabel"]["up"]	) ;
		this._params["btnLabel"]["down"] = (	(typeof params["btnLabel"]["down"] != "undefined" && params["btnLabel"]["down"] != "")	? params["btnLabel"]["down"]	: this._params["btnLabel"]["down"]	) ;
		this._params["btnLabel"]["all"] = (	(typeof params["btnLabel"]["all"] != "undefined" && params["btnLabel"]["all"] != "")	? params["btnLabel"]["all"]	: this._params["btnLabel"]["all"]	) ;
	}

	this._params["height"]	= (	( typeof params["height"] == "undefined" || params["height"] == null)	? this._params["height"] 	: 	params["height"]) ;
	this._params["width"]	= (	( typeof params["width"] != "undefined" && params["width"] != "")	? params["width"]	: this._params["width"]	) ;
	this.load();
	
}

MovableList.prototype.toString = function(){
	var marginWidth			= 2;
	var marginHeight			= 5;
	var marginWidthSel		= 10;
	var marginHeightSel		= 10;
	var noBtn = true;
	
	var btnBarWidth	=	this._params['btnBarWidth'] + 'px';
	var selBarWidth	=  (this._params['width']	-	this._params['btnBarWidth'] - marginWidth) + 'px';
	var selWidth			=  (this._params['width']	-	this._params['btnBarWidth'] - marginWidthSel ) + 'px';


	var topHeight			=	this._params['topHeight']		+ 'px';
	var bottomHeight		=  this._params['selAllHeight']	+ 'px';
	var centerBtnHeight	=  (this._params['height'] - this._params['topHeight'] - marginHeight)	+ 'px';
	var centerSelHeight	= centerBtnHeight;
	var selHeight		= (parseInt(centerSelHeight) - 2) + 'px';

	//定义操作区域的浮动位置
	if(typeof this._params['btnBarPos'] != 'undefined' && this._params['btnBarPos'] != null
			&& this._params['btnBarPos'] .toUpperCase() != 'RIGHT' && this._params['btnBarPos'] .toUpperCase() != 'R'){
		var btnBarFloatDir = 'left';
		var selBarFloatDir	 =	 'right';
	}else{
		var btnBarFloatDir = 'right';
		var selBarFloatDir	 = 'left';
	}

	//定义操作区域
	var btnBarTitleReg	= this._params['btnBarLabel']==''?'':'<div style="height:' + topHeight + ';width:' +  btnBarWidth + ';line-height:' + topHeight + '" class = "title"><b>'	+ this._params['btnBarLabel'] + '</b></div>';		
	var btnBarOpReg		= '<div style="height:' + centerBtnHeight + '; width:' + btnBarWidth  + ';" >' 
									+ '<table style = "border-collapse:collapse" height="100%" width="100%" class="tbNo"><tr><td align="center">';
	if(this._params["topBtn"] == true ){
		btnBarOpReg += '<span style="display:block;"><input type="button" value="' + this._params['btnLabel']['top'] + '" onclick="MovableList.moveTop(\'' + this._id + '\')" id="' + this._id + '_topBtn"  name="' + this._id + '_topBtn" class="smallButton" /></span><br />';
		noBtn = false;
	}
	if(this._params["upBtn"] == true ){
		btnBarOpReg += '<span style="display:block;"><input type="button" value="' + this._params['btnLabel']['up'] + '"  onclick="MovableList.moveUp(\'' + this._id + '\')" id="' + this._id + '_upBtn"  name="' + this._id + '_upBtn" class="smallButton" /></span><br />';
		noBtn = false;
	}
	if(this._params["downBtn"] == true ){
		btnBarOpReg += '<span style="display:block;"><input type="button" value="' + this._params['btnLabel']['down'] + '" onclick="MovableList.moveDown(\'' + this._id + '\')" id="' + this._id + '_downBtn"  name="' + this._id + '_downBtn" class="smallButton" /></span><br />';
		noBtn = false;
	}

	if(this._params["bottomBtn"] == true ){
		btnBarOpReg += '<span style="display:block;"><input type="button" value="' + this._params['btnLabel']['bottom'] + '"  onclick="MovableList.moveBottom(\'' + this._id + '\')" id="' + this._id + '_bottomBtn"  name="' + this._id + '_bottomBtn" class="smallButton" /></span><br />';
		noBtn = false;
	}
	if(this._params['selAllBtn'] == true){
		btnBarOpReg += '<span class="allBar"><input type="button" value="' + this._params['btnLabel']['all']	+ '"  onclick="MovableList.selAll(\'' + this._id + '\')" id="' + this._id + '_selAllBtn"  name="' + this._id + '_selAllBtn" class="smallButton" /></span><br />';
		noBtn = false;
	}
	btnBarOpReg +=	'</td></tr></table>'
							+ '</div>';
//var btnBarReg		=  '<div style="float:' + btnBarFloatDir + ';height:' + this._params["height"] + ';" class="movableBtnContainer">'
	var btnBarReg		=  '<div style="height:' + this._params["height"] + ';" class="movableBtnContainer">'
							    +	 btnBarTitleReg	+	btnBarOpReg
							    +  '</div>';

	//定义列表移动区域
	//var selBarTitleReg	=  '<div style="float:' + selBarFloatDir + ';height:' + topHeight + ';width:' +  selBarWidth + ';line-height:' + topHeight + '" class = "title">'
	var selBarTitleReg	=  this._params['selBarLabel']==''?'':'<div style="height:' + topHeight + ';width:' +  selBarWidth + ';line-height:' + topHeight + '" class = "title"><b>'	+ this._params['selBarLabel'] + '</b></div>';		
	var selBarOpReg		=	'<div style="height:'+ centerSelHeight + ';width:' + selBarWidth +'" >'
									+ '<table style = "border-collapse:collapse" width="100%" height="100%" class="tbNo"><tr><td width="100%">'
								    + 	'<select id="' + this._id + '_sel" name="'+ this._id + '_sel"  multiple style="width:' + selWidth + '; height:' + selHeight + '">'
								    + '</select>'
									+ '</td></tr></table></div>';
	var selBarReg			=  '<div style="float:' + selBarFloatDir + ';height:' + this._params["height"] + ';" class="movableSelContainer">'
								    + selBarTitleReg + selBarOpReg 
								    + '</div>';
	var html = [];
	html.push('<table style = "border-collapse:collapse" cellspacing="0" class="tbNo" cellpadding="0"  height="'+this._params["height"]+'" width="'+this._params['width']+'"><tr>');
	if(typeof this._params['btnBarPos'] != 'undefined' && this._params['btnBarPos'] != null
			&& this._params['btnBarPos'] .toUpperCase() != 'RIGHT' && this._params['btnBarPos'] .toUpperCase() != 'R'){
		noBtn ? html.push('<td>'+ selBarReg+'</td>') : html.push('<td>'+btnBarReg +'</td><td>'+ selBarReg+'</td>');
	}else{
		noBtn ?  html.push('<td>'+ selBarReg+'</td>') : html.push('<td>'+selBarReg +'</td><td>'+ btnBarReg+'</td>') ;
	}
	html.push('</tr></table>');
	return html.join('');
}

MovableList.prototype.load= function(){
	document.getElementById(this._id).style.height = this._params['height'];
	document.getElementById(this._id).style.width = this._params['width'];
	document.getElementById(this._id).innerHTML =  this.toString();
}

MovableList.moveTop = function(id){
	var selId = id + "_sel";
	var selObj = document.getElementById(selId);
	if(selObj.options.length == 0 || selObj.options[0].selected) {
		return false;
	}
	var count = selObj.options.length - 1;
	for (var i = selObj.options.length - 1; i >= 0; i--){
		var op = selObj.options[count];
		if(op.selected){
			selObj.remove(count);
			selObj.options.add(op, 0); 
		}else {
			count--;
			continue;
		}
	}
}

MovableList.moveBottom = function(id){
	var selId = id + "_sel";
	var selObj = document.getElementById(selId);
	if(selObj.options.length == 0 || selObj.options[selObj.options.length-1].selected) {
		return false;
	}
	var count = 0;
	for (var i = 0; i < selObj.options.length; i++){
		var op = selObj.options[count];
		if(op.selected){
			selObj.remove(count);
			selObj.options.add(op); 
		}else {
			count++;
			continue;
		}
	}
}

MovableList.moveUp = function(id){
	var selId = id + "_sel";
	var selObj = document.getElementById(selId);
	if(selObj.options.length == 0 || selObj.options[0].selected) {
		return false;
	}
	for (var i = 0; i < selObj.options.length; i++){
		var op = selObj.options[i];
		if(op.selected){
			selObj.remove(i);
			selObj.options.add(op, i-1); 
		}else {
			continue;
		}
	}
}

MovableList.moveDown = function(id){
	var selId = id + "_sel";
	var selObj = document.getElementById(selId);
	if(selObj.options.length == 0 || selObj.options[selObj.options.length-1].selected) {
		return false;
	}
	for (var i = selObj.options.length - 1; i >= 0; i--){
		var op = selObj.options[i];
		if(op.selected){
			selObj.remove(i);
			selObj.options.add(op, i+1); 
		}else {
			continue;
		}
	}
}

MovableList.selAll = function(id){
	var selId = id + "_sel";
	var selObj = document.getElementById(selId);
	if(typeof selObj == "undefined" || selObj == null || selObj == false){
		return false;
	}
	for(var i=0;i<selObj.options.length;i++){
		selObj.options[i].selected = true;
	}
}

MovableList.prototype.loadData = function(url, Objid){
	var URLData = url.split("?");
	var url = URLData[0];//设置接收表单URL地址
	var data = URLData[1];//需要POST的值，把每个变量都通过&来联接
	var _id = (typeof Objid == "undefined" || Objid == null) ? this._id : Objid ;
	//alert(url);
	$.ajax({
		type	: "GET",
		async : false,
		url	: url,
		data: data,
		timeout: 1000,
		success: function(msg){
			//alert(msg);
			$("#" + _id + "_sel").html(msg);
	   },
		error: function(msg){
			alert(msg.responseText);
	    }
	});
}
MovableList.prototype.getBtn = function(btnType){
	return document.getElementById(this._id + "_" + btnType);
}

MovableList.prototype.addOptions = function(opName, opValue, flag){
	var tmp_flag = (typeof flag == "undefined" || flag == "") ? false : flag;
	if(this.checkDiffOptions(opName, opValue, tmp_flag) == false){
		return false;
	}
	var tmpObj = document.getElementById(this._id+"_sel");
	var len = tmpObj.length;
	tmpObj.options[len] = new Option(opName, opValue);
}

MovableList.prototype.delOptions = function(){
	var tmpObj = document.getElementById(this._id+"_sel");
	tmpObj.remove(tmpObj.selectedIndex);
}

MovableList.prototype.checkDiffOptions = function(opName, opValue, flag){
	var selObj = document.getElementById(this._id+"_sel");
	var len = selObj.length;
	for(var i = 0; i < len; i++){
		var tmp_text = selObj.options[i].text;
		var tmp_value = selObj.options[i].value;
		if(flag == true){
			if(tmp_text == opName && tmp_value == opValue){
				alert(sprintf(td_lang.platform.msg_14, tmp_text, tmp_value));
				return false;
			}
		}else{
			if(tmp_text == opName){
				alert(sprintf(td_lang.platform.msg_15, tmp_text));
				return false;
			}
		}
	}
}