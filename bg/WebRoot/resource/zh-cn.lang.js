if(typeof(sprintf) != "function")
{
   function sprintf(str)
   {
      var array = str.split("%s");
      if(array.length == 1 || array.length != arguments.length)
         return str;
      
      str = array[0];
      for(var i=1; i<array.length; i++)
      {
         str += arguments[i] + array[i];
      }
      
      return str;
   }
}

var td_lang = {
	email:"必须输入正确格式的电子邮件",
	url:"必须输入正确格式的网址",
	number:"必须输入合法的数字",
	digits:"必须输入整数",
	creditcard:"必须输入合法的信用卡号"
};
var alert_arr= {
	'SURE_TO_DELETE':'Are you sure you want to delete ?',
	'MSG_TRY_AGAIN': 'Please try again',
	'ERR_HIDING': 'Error while hiding',
	'LBL_WIDGET_HIDDEN': 'Widget Hidden',
	'LBL_RESTORE_FROM_PREFERENCES': 'You can restore it from Create Button of Home Page or your preferences',
	'LBL_ADD': 'Add ',
	'LBL_ADD_PICKLIST_VALUE':'Please provide at least one new value to be added',
	'LBL_ADD_HOME_WIDGET': 'Unable to add homestuff! Please try again',
	/* added to fix i18n issues with home page*/
	'LBL_ADD': 'Add ',
	'Module': 'Module',
	'DashBoard': 'DashBoard',
	'RSS': 'RSS',
	'Default': 'Default',
	'Notebook': 'Notebook',
	'SPECIAL_CHARS':'\\ / < > + \' " ',

	'BETWEEN': 'between',
	'BEFORE': 'before',
	'AFTER': 'after',
	'ERROR_DELETING_TRY_AGAIN': 'Error while deleting.Please try again.',
	'LBL_ENTER_WINDOW_TITLE': 'Please enter Window Title.',
	'LBL_SELECT_ONLY_FIELDS': 'Please select only two fields.',
	'LBL_ENTER_RSS_URL':'Please enter RSS URL',
	'LBL_ADD_HOME_WIDGET': 'Unable to add homestuff! Please try again',

	'LBL_DEFAULT_VALUE_FOR_THIS_FIELD' : 'Default Value for this Field',

	'RECIPIENTS_CANNOT_BE_EMPTY' : 'Selected Recipients cannot be empty',
	'VALID_SCANNER_NAME' : 'Please enter a valid Scanner name (It should be only Characters and Numbers)',
	'ERR_SAME_SOURCE_AND_TARGET' : 'Source field and Target field should not be same',
	'ERR_ATLEAST_ONE_VALUE_FOR' : 'You need to select at least one value for',
	'ERR_SELECT_MODULE_FOR_DEPENDENCY' : 'Please select a module to add Dependency'
};
td_lang.global = {
	page_up:"上一页",
	page_down:"下一页",
	songti:"宋体",
	delete_1:"删除",
	select:"选择",
	total:"合计",
	yes:"是",
	no:"否",
	reply:"回复",
	error:"错误：",
	close:"关闭",
	regist:"注册",
	first_page:"首页",
	before_page:"上页",
	next_page:"下页",
	last_page:"尾页",
	refresh_1:"刷新",
	right:"正确",
	print:"打印",
	print_preview:"打印预览",
	clear:"清空",
	details:"详情"
};


td_lang.system = {

};
td_lang.workflow = {};


td_lang.apps = {
		
};
td_lang.platform = {
msg_1:"数据升级中，请耐心等候...",
msg_2:"未找到目标步骤！",
msg_3:"上一步",
msg_4:"下一步",
msg_5:"保存",
msg_6:"取消",
msg_7:"显示以下桌面模块",
msg_8:"排序",
msg_9:"置顶",
msg_10:"置底",
msg_11:"上移",
msg_12:"下移",
msg_13:"全选",
msg_14:"存在相同的%s--%s选项",
msg_15:"存在相同的选项值%s",
msg_16:"未能引入事件JS",
msg_17:"左移",
msg_18:"右移",
msg_19:"存在不可移动的字段！"
};

