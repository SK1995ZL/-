//姓名,密码验证验证字符串在min-max之间  并且只由数字字母下划线构成
function account(inputObj,minLength,maxLength){
	var value=inputObj.val();
	//alert("len="+value.length);
	if(!(value.length >= minLength && value.length  <= maxLength)){
		inputObj.attr("title","请输入"+inputObj.attr("rel")+minLength+"至"+maxLength+"位");
		inputObj.tooltip('destroy');
		inputObj.tooltip('show');
		inputObj.focus();
		return false;
	}
	if(!(/^[\w]+$/.test(value))){
		//alert("test"+inputObj.attr("rel"));
		inputObj.attr("title",inputObj.attr("rel")+"只能数字、字母、下划线构成");
		inputObj.tooltip('destroy');
		inputObj.tooltip('show');
		inputObj.focus();
		return false;
	}
	return true;
}
//手机验证
function mobile(inputObj){
	var value=inputObj.val();
	if(!(/(^0?[1][358][0-9]{9}$)/.test(value))){
		inputObj.attr("title","请输入正确的"+inputObj.attr("rel"));
		inputObj.tooltip('destroy');
		inputObj.tooltip('show');
		inputObj.focus();
		return false;
	}
	return true;
}
//邮箱验证
function email(inputObj){
	var value=inputObj.val();
	if(!(/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/.test(value))){
		inputObj.attr("title","请输入正确的"+inputObj.attr("rel"));
		inputObj.tooltip('destroy');
		inputObj.tooltip('show');
		inputObj.focus();
		return false;
	}
	return true;
}
function select(inputObj){
	var value=inputObj.val();
	//alert("value="+value+",title="+inputObj.attr("title"));
	if(!(value.length > 0)){
		inputObj.attr("title",inputObj.attr("title"));
		inputObj.tooltip('destroy');
		inputObj.tooltip('show');
		inputObj.focus();
		return false;
	}
	return true;
}
