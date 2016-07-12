package com.sk.util;
import java.util.HashMap;
public class Domain {

	public static  final String BG_TITLE="北京兴业德诚报馆系统";
	public static  final String BG_SET_UP_TITLE="搭建商注册";
	public static final String BG_BUTTOM_TITLE="版权所有 Copyright © 2016 北京兴业德诚展览展示有限公司";
	//已注册
	public static final Integer ISREGIST=1;
	//未注册
	public static final Integer NOREGIST=0;
	//登录成功
	public static final Integer ISLOGIN=100;
	//登录失败
	public static final Integer NOLOGIN=101;
	//超级管理员
	public static final Integer KIND_ADMIN=1;
	//普通员工
	public static final Integer KIND_EMP=2;
	//搭建商
	public static final Integer KIND_SETUP=3;
	/**
	 * 尚未补全资料
	 */
	public static final Integer IS_NO_TOKEN=520;
	/**
	 * 已补全资料
	 */
	public static final Integer IS_YES_TOKEN=620;
	//获取职务post
	public static HashMap<String, String> getPostMap(){
		HashMap<String, String> hashMap=new HashMap<String, String>();
		hashMap.put(String.valueOf(1), String.valueOf("总经理"));//经理  业务员 工人
		hashMap.put(String.valueOf(2), String.valueOf("经理"));
		hashMap.put(String.valueOf(3), String.valueOf("业务员"));
		return hashMap;
	}
	
}
