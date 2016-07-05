	//定义窗口大小
 	var dialogHeight=window.screen.availHeight*0.8;
 	var dialogWidth=window.screen.availWidth*0.8;
 	var maxDialogHeight=window.screen.availHeight;
 	var maxDialogWidth=window.screen.availWidth;
 	var fixDialogHeight=600;
 	var fixDialogWidth=800;
	var isDigital=function(val) 
	{
		return /^\d+$/.test(val);
	}
	var isDigital2=function(val) 
	{
		return /^-?\d+$/.test(val);
	}
	var isNumbric=function(val)
	{
		return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(val);
	}
	var isEmail=function(val)
	{
		return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
	}
	var isNumber = function (e) {   
	    if ($.browser.msie) {   
	        if ( ((event.keyCode > 47) && (event.keyCode < 58)) || (event.keyCode == 8) ) {   
	            return true;   
	        } else {
	            return false;   
	        }   
	    } else {   
	        if ( ((e.which > 47) && (e.which < 58)) || (e.which == 8) ) {   
	            return true;   
	        } else {   
	            return false;   
	        }   
	    }   
	}
	
	//翻页必须
	var turnPage = function (formId,pageIndex)
	{
		setTimeout("toTurnPage('"+formId+"','"+pageIndex+"')",0);
	}
	
	var toTurnPage = function(formId,pageIndex)
	{
		var action =$("#"+formId).attr("action");
		$("#"+formId).attr('method','post');
		if(isNaN(pageIndex))
		{
			pageIndex=1;
		}
		$("#pages").val(pageIndex);
		$("#"+formId).submit();
		return true;
	}
	//弹出窗口
	var openModalWindow = function (url, width, height, scrolled) {
		if (window.showModalDialog) {
			var varWindow = window.showModalDialog(url, this.window,
			"dialogWidth:"+width+"px;dialogHeight:"+height+"px;center:yes;resizable:true;status:yes;scroll:"+scrolled+";help:no;");
			return varWindow;
		} 
	}
	//粘贴前处理
	function  avoidClip()  
	{  
		clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))  
	}
	//显示等待进度
	jQuery.showWait = function (){
		document.write("<div id=\"loading\" style='width:300px;position:absolute;z-index:2000;border:1px solid #F90;padding:10px;background-color:#FFF7D7;font-weight:700'><span></span>数据加载中，请稍等...</div>")
		$("#loading").css("left",(document.documentElement.clientWidth-300)/2);
		$("#loading").css("top",(document.documentElement.clientHeight-50)/2);
	}
	$.showWait();
	//IP验证
	Ip2v=function(strIP) 
	{ 
		var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g 
		if(re.test(strIP)) 
		{ 
		  if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256)
			  return true; 
		} 
		return false; 
	}
	//隐藏等待进度
	jQuery.hideWait = function (){
		$("#loading").fadeOut();
	}
	/**
	* 表格控制
	*/
	$(document).ready(function()
	{
        $(".tbA,.tbB").find("tr:not('.trNo'):odd").addClass("even"); 
        $(".tbA tr,.tbD tr").hover(
			function (){
		        if ($(this).find(".hktk_pages").size()!= 0 || $(this).prevAll().length == 0  ) {
		            return;
		        }
				$(this).addClass("hoverbgcolor");
			},
			function (){
				if ($(this).find(".hktk_pages").size()!= 0 || $(this).prevAll().length == 0  ) {
		            return;
		        }
				$(this).removeClass("hoverbgcolor");
			}
		);
        $(".tbA tr").click(function() {
        	if ($(this).find(".hktk_pages").size()!= 0 ||$(this).prevAll().length == 0 ) {
	            return;
	        }
            $.each($(".tbA tr"), function(i, n) {
                $(n).removeClass("trclick");
            });
            //给当前行添加class:selected
            $(this).addClass("trclick");
        });
        //屏蔽backspace键

		$(document).keydown(function()
		{
			if(window.event.keyCode==8)
			{
				event.keyCode=0;
			}
		});
		$.hideWait();
	});
	/**
	* objid <select>控件Id
	*/
	loadSelectData = function(url, Objid){
		var URLData = url.split("?");
		var url = URLData[0];//设置接收表单URL地址
		var data = URLData[1];//需要POST的值，把每个变量都通过&来联接
		$.ajax({
			type : "GET",
			async : false,
			url	: url,
			data: data,
			timeout: 1000,
			success: function(msg){
				$("#" + Objid).html("");
				$("#" + Objid).html(msg);
		   },
			error: function(msg){
				alert(msg.responseText);
		    }
		});
	}
	/**
	 * this function returns the center co-ordinates of the viewport as an array
	 */
	function getViewPortCenter(){
		var height;
		var width;
		if(typeof window.pageXOffset != "undefined"){
			height = window.innerHeight/2;
			width = window.innerWidth/2;
			height +=window.pageYOffset;
			width +=window.pageXOffset;
		}else if(document.documentElement && typeof document.documentElement.scrollTop != "undefined"){
			height = document.documentElement.clientHeight/2;
			width = document.documentElement.clientWidth/2;
			height += document.documentElement.scrollTop;
			width += document.documentElement.scrollLeft;
		}else if(document.body && typeof document.body.clientWidth != "undefined"){
			height = window.screen.availHeight/2;
			width = window.screen.availWidth/2;
			height += document.body.clientHeight;
			width += document.body.clientWidth;
		}
		return {
			x: width,
			y: height
		};
	}
	/**
	 * this function accepts a node and puts it at the center of the screen
	 * @param object node - the dom object which you want to set in the center
	 */
	function placeAtCenter(node){
		var centerPixel = getViewPortCenter();
		node.css("position","absolute");
		var point = getDimension(node);
		var topvalue = (centerPixel.y - point.y/2) ;
		var rightvalue = (centerPixel.x - point.x/2);
		//to ensure that values will not be negative
		if(topvalue<0) topvalue = 0;
		if(rightvalue < 0) rightvalue = 0;
		node.css("top",topvalue + "px");;
		node.css("right",rightvalue + "px");
		node.css("left",'');
		node.css("bottom",'');
	}
	/**
	 * this function gets the dimension of a node
	 * @param node - the node whose dimension you want
	 * @return height and width in array format
	 */
	function getDimension(node){
		var ht = node[0].offsetHeight;
		var wdth = node[0].offsetWidth;
		var nodeChildren = node.find("*");
		var noOfChildren = nodeChildren.length;
		for(var index =0;index<noOfChildren;++index){
			ht = Math.max(nodeChildren[index][0].offsetHeight, ht);
			wdth = Math.max(nodeChildren[index][0].offsetWidth,wdth);
		}
		return {
			x: wdth,
			y: ht
		};
	}