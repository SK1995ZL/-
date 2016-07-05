function MultipleMovableList(id){
	this._id						=	 id;
	this._fromListObj		=	 null;
	this._toListObj			=   null;
	this._params = {
							"width"		:	500,
							"height"	:	300,
							"cWidth"	:	60,
							"leftBtn"	:	true,
							"rightBtn"	: true

							}
	this._params['btnLabel'] = {
									'left'			:	td_lang.platform.msg_17,
									'right'			:	td_lang.platform.msg_18
								}

	this._fromParams = {
							'topHeight'			:	30,
							'selBarLabel'			:	td_lang.platform.msg_7,
							'btnBarLabel'		:	'',
							'btnBarPos'			:   'l',
							'btnBarWidth'		:	5,
							'topBtn'					:	false,
							'bottomBtn'			:	false,
							'upBtn'					:	false,
							'downBtn'				:	false,
							'selAllBtn'				:	true,
							'selAllHeight'			:	30
						};
	this._fromParams['btnLabel'] = {
										'top'			:	td_lang.platform.msg_9,
										'bottom'		:	td_lang.platform.msg_10,
										'up'			:	td_lang.platform.msg_11,
										'down'			:	td_lang.platform.msg_12,
										'all'			:	td_lang.platform.msg_13
											}
	this._fromParams['height']	= this._params['height'];
	this._fromParams['width']	= ( parseInt(this._params['width']) - parseInt(this._params['cWidth']) ) / 2;

	
	this._toParams = {
							'topHeight'			:	30,
							'selBarLabel'			:	td_lang.platform.msg_7,
							'btnBarLabel'		:	td_lang.platform.msg_8,
							'btnBarPos'			:   'r',
							'btnBarWidth'		:	60,
							'topBtn'					:	true,
							'bottomBtn'			:	true,
							'upBtn'					:	true,
							'downBtn'				:	true,
							'selAllBtn'				:	true,
							'selAllHeight'			:	30
						};
	this._toParams['btnLabel'] = {
												'top'			:	td_lang.platform.msg_9,
												'bottom'		:	td_lang.platform.msg_10,
												'up'			:	td_lang.platform.msg_11,
												'down'			:	td_lang.platform.msg_12,
												'all'			:	td_lang.platform.msg_13
											}
	this._toParams['height']	= this._params['height'];
	this._toParams['width']		= ( parseInt(this._params['width']) - parseInt(this._params['cWidth']) ) / 2;
}


MultipleMovableList.prototype.setup = function(fromParams, toParams) {
	this._fromParams["topHeight"]	= (	( typeof fromParams["topHeight"] != "undefined" && fromParams["topHeight"] != "")		? fromParams["topHeight"]		: this._fromParams["topHeight"]		) ;
	this._fromParams["selBarLabel"]	= (	( typeof fromParams["selBarLabel"] != "undefined" && fromParams["selBarLabel"] != "")	? fromParams["selBarLabel"]		: this._fromParams["selBarLabel"]	) ;
	this._fromParams["btnBarLabel"]	= (	( typeof fromParams["btnBarLabel"] != "undefined" && fromParams["btnBarLabel"] != null)	? fromParams["btnBarLabel"]		: this._fromParams["btnBarLabel"]	) ;
	this._fromParams["btnBarPos"]	= (	( typeof fromParams["btnBarPos"] != "undefined" && fromParams["btnBarPos"] != "")		? fromParams["btnBarPos"]		: this._fromParams["btnBarPos"]		) ;
	this._fromParams["btnBarWidth"]	= (	( typeof fromParams["btnBarWidth"] != "undefined" && fromParams["btnBarWidth"] != "")	? fromParams["btnBarWidth"]		: this._fromParams["btnBarWidth"]	) ;
	this._fromParams["topBtn"]		= (	( typeof fromParams["topBtn"] == "undefined" || fromParams["topBtn"] == null)		? this._fromParams["topBtn"]		: 	fromParams["topBtn"]	) ;
	this._fromParams["bottomBtn"]	= (	( typeof fromParams["bottomBtn"] == "undefined" || fromParams["bottomBtn"] == null)		? this._fromParams["bottomBtn"] 		: 		fromParams["bottomBtn"]) ;
	this._fromParams["upBtn"]		= (	( typeof fromParams["upBtn"] == "undefined" || fromParams["upBtn"] == null)			? this._fromParams["upBtn"]			: fromParams["upBtn"]			) ;
	this._fromParams["downBtn"]		= (	( typeof fromParams["downBtn"] == "undefined" || fromParams["downBtn"] == null)		? this._fromParams["downBtn"]		: fromParams["downBtn"]			) ;
	this._fromParams["selAllBtn"]	= (	( typeof fromParams["selAllBtn"] == "undefined" || fromParams["selAllBtn"] == null)		? this._fromParams["selAllBtn"]		:  fromParams["selAllBtn"]		) ;
	this._fromParams["selAllHeight"]	= (	( typeof fromParams["selAllHeight"] != "undefined" && fromParams["selAllHeight"] != "")	? fromParams["selAllHeight"]	: this._fromParams["selAllHeight"]	) ;
	if(typeof fromParams["btnLabel"] == "undefined" || fromParams["btnLabel"] == ""){
		this._fromParams["btnLabel"] = this._fromParams["btnLabel"];
	}else{
		this._fromParams['btnLabel']  = new Array();
		this._fromParams["btnLabel"]["top"] = (	(typeof fromParams["btnLabel"]["top"] != "undefined" && fromParams["btnLabel"]["top"] != "")	? fromParams["btnLabel"]["top"]	: this._fromParams["btnLabel"]["top"]	) ;
		this._fromParams["btnLabel"]["bottom"] = (	(typeof fromParams["btnLabel"]["bottom"] != "undefined" && fromParams["btnLabel"]["bottom"] != "")	? fromParams["btnLabel"]["bottom"]	: this._fromParams["btnLabel"]["bottom"]	) ;
		this._fromParams["btnLabel"]["up"] = (	(typeof fromParams["btnLabel"]["up"] != "undefined" && fromParams["btnLabel"]["up"] != "")	? fromParams["btnLabel"]["up"]	: this._fromParams["btnLabel"]["up"]	) ;
		this._fromParams["btnLabel"]["down"] = (	(typeof fromParams["btnLabel"]["down"] != "undefined" && fromParams["btnLabel"]["down"] != "")	? fromParams["btnLabel"]["down"]	: this._fromParams["btnLabel"]["down"]	) ;
		this._fromParams["btnLabel"]["all"] = (	(typeof fromParams["btnLabel"]["all"] != "undefined" && fromParams["btnLabel"]["all"] != "")	? fromParams["btnLabel"]["all"]	: this._fromParams["btnLabel"]["all"]	) ;
	}
	this._fromParams["height"]	= (	( typeof fromParams["height"] == "undefined" || fromParams["height"] == null)	? this._fromParams["height"] 	: 	fromParams["height"]) ;
	this._fromParams["width"]	= (	( typeof fromParams["width"] != "undefined" && fromParams["width"] != "")	? fromParams["width"]	: this._fromParams["width"]	) ;

	/******************/

	this._toParams["topHeight"]	= (	( typeof toParams["topHeight"] != "undefined" && toParams["topHeight"] != "")		? toParams["topHeight"]		: this._toParams["topHeight"]		) ;
	this._toParams["selBarLabel"]	= (	( typeof toParams["selBarLabel"] != "undefined" && toParams["selBarLabel"] != "")	? toParams["selBarLabel"]		: this._toParams["selBarLabel"]	) ;
	this._toParams["btnBarLabel"]	= (	( typeof toParams["btnBarLabel"] != "undefined" && toParams["btnBarLabel"] != null)	? toParams["btnBarLabel"]		: this._toParams["btnBarLabel"]	) ;
	this._toParams["btnBarPos"]	= (	( typeof toParams["btnBarPos"] != "undefined" && toParams["btnBarPos"] != "")		? toParams["btnBarPos"]		: this._toParams["btnBarPos"]		) ;
	this._toParams["btnBarWidth"]	= (	( typeof toParams["btnBarWidth"] != "undefined" && toParams["btnBarWidth"] != "")	? toParams["btnBarWidth"]		: this._toParams["btnBarWidth"]	) ;
	this._toParams["topBtn"]		= (	( typeof toParams["topBtn"] == "undefined" || toParams["topBtn"] == null)		? this._toParams["topBtn"]		: 	toParams["topBtn"]	) ;
	this._toParams["bottomBtn"]	= (	( typeof toParams["bottomBtn"] == "undefined" || toParams["bottomBtn"] == null)		? this._toParams["bottomBtn"] 		: 		toParams["bottomBtn"]) ;
	this._toParams["upBtn"]		= (	( typeof toParams["upBtn"] == "undefined" || toParams["upBtn"] == null)			? this._toParams["upBtn"]			: toParams["upBtn"]			) ;
	this._toParams["downBtn"]		= (	( typeof toParams["downBtn"] == "undefined" || toParams["downBtn"] == null)		? this._toParams["downBtn"]		: toParams["downBtn"]			) ;
	this._toParams["selAllBtn"]	= (	( typeof toParams["selAllBtn"] == "undefined" || toParams["selAllBtn"] == null)		? this._toParams["selAllBtn"]		:  toParams["selAllBtn"]		) ;
	this._toParams["selAllHeight"]	= (	( typeof toParams["selAllHeight"] != "undefined" && toParams["selAllHeight"] != "")	? toParams["selAllHeight"]	: this._toParams["selAllHeight"]	) ;
	if(typeof toParams["btnLabel"] == "undefined" || toParams["btnLabel"] == ""){
		this._toParams["btnLabel"] = this._toParams["btnLabel"];
	}else{
		this._toParams['btnLabel']  = new Array();
		this._toParams["btnLabel"]["top"] = (	(typeof toParams["btnLabel"]["top"] != "undefined" && toParams["btnLabel"]["top"] != "")	? toParams["btnLabel"]["top"]	: this._toParams["btnLabel"]["top"]	) ;
		this._toParams["btnLabel"]["bottom"] = (	(typeof toParams["btnLabel"]["bottom"] != "undefined" && toParams["btnLabel"]["bottom"] != "")	? toParams["btnLabel"]["bottom"]	: this._toParams["btnLabel"]["bottom"]	) ;
		this._toParams["btnLabel"]["up"] = (	(typeof toParams["btnLabel"]["up"] != "undefined" && toParams["btnLabel"]["up"] != "")	? toParams["btnLabel"]["up"]	: this._toParams["btnLabel"]["up"]	) ;
		this._toParams["btnLabel"]["down"] = (	(typeof toParams["btnLabel"]["down"] != "undefined" && toParams["btnLabel"]["down"] != "")	? toParams["btnLabel"]["down"]	: this._toParams["btnLabel"]["down"]	) ;
		this._toParams["btnLabel"]["all"] = (	(typeof toParams["btnLabel"]["all"] != "undefined" && toParams["btnLabel"]["all"] != "")	? toParams["btnLabel"]["all"]	: this._toParams["btnLabel"]["all"]	) ;
	}
	this._toParams["height"]	= (	( typeof toParams["height"] == "undefined" || toParams["height"] == null)	? this._toParams["height"] 	: 	toParams["height"]) ;
	this._toParams["width"]	= (	( typeof toParams["width"] != "undefined" && toParams["width"] != "")	? toParams["width"]	: this._toParams["width"]	) ;

	this.load();
}

MultipleMovableList.prototype.load = function(){
	var centerBtnBarWidth = this._params["cWidth"]	+ 'px';

	this._params["height"] =  this._toParams["height"] > this._fromParams["height"] ? this._toParams["height"] : this._fromParams["height"];

	var fromListReg	 = '<div id="' + this._id + '_from"></div>';
	var centerListReg	 = '<div id="' + this._id + '_center" >';
	if(this._params['leftBtn']){
		centerListReg += '<span style="display:block;"><input type="button" id="' + this._id + '_to_leftBtn" value="' + this._params['btnLabel']['left'] + '"  onclick="MultipleMovableList.moveSelOp(\'' + this._id + '_to_sel\', \'' + this._id + '_from_sel\')" class="smallButton" /></span><br>';
	}

	if(this._params['rightBtn']){
		centerListReg += '<span style="display:block;"><input type="button" id="' + this._id + '_to_rightBtn" value="' + this._params['btnLabel']['right'] + '"  onclick="MultipleMovableList.moveSelOp(\'' + this._id + '_from_sel\', \''+ this._id + '_to_sel\')" class="smallButton" /></span><br>';
	}
	centerListReg += "</div>"
	var toReg				 = '<div id="' + this._id + '_to"></div>';

	document.getElementById(this._id).style.height = this._params['height'] + 'px';
	document.getElementById(this._id).style.width = this._params['width'] + 'px';

	document.getElementById(this._id).innerHTML = '<table style = "border-collapse:collapse" cellspacing="0" cellpadding="0"  height="'+this._params["height"]+'" width="'+this._params['width']+'" align="center"><tr><td>'+ fromListReg +'</td><td  class="movableCenter"  align="center" width="' + centerBtnBarWidth + '" >'+ centerListReg +'</td><td>'+ toReg +'</td></tr></table>'; 

	this._fromListObj	 = new MovableList(this._id + "_from");
	this._toListObj		 = new MovableList(this._id + "_to");

	this._fromListObj.setup(this._fromParams);
	this._toListObj.setup(this._toParams);

}

MultipleMovableList.moveSelOp = function(selFromId, selToId){
	var selFromObj = document.getElementById(selFromId);
	var selToObj = document.getElementById(selToId);
	for(var i=0;i<selFromObj.options.length;i++){
		var selFromField = selFromObj.options[i];
		if(!selFromField.selected) {
			continue;
		}else if(selFromField.getAttribute("mainType") == "main"){
			alert(td_lang.platform.msg_19);
			return false;
		}else {
			var selToField = document.createElement("OPTION");
			selToField.text			= selFromField.text;
			selToField.value		= selFromField.value;
			selToField.style.color	= selFromField.style.color;
			selToObj.options.add(selToField);		
			selFromObj.removeChild(selFromField);
			i--;
		}
	}	
}

MultipleMovableList.prototype.loadData = function(lUrl, rUrl){
	this._fromListObj.loadData(lUrl, this._id + "_from");
	this._toListObj.loadData(rUrl, this._id + "_to");	
}

MultipleMovableList.prototype.getSelObj = function(){
	return {
		"L" :	this._fromListObj.getSelObj(),
		"R" :	this._toListObj.getSelObj()
	}
}