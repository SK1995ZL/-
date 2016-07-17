package com.sk.util;

import java.util.Date;
import java.util.List;

public class CheckUtil {
	public static boolean checkString(String str){
		return (null!=str&&!"".equalsIgnoreCase(str))?true:false;
	}
	@SuppressWarnings("rawtypes")
	public static boolean checkList(List array){
		return (null!=array&&array.size()>0)?true:false;
	}
	public static boolean checkObject(Object obj){
		return (null!=obj)?true:false;
	}
	public static boolean checkDate(Date date){
		return (null!=date)?true:false;
	}
}
