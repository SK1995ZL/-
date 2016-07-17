package com.sk.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

	public static String SHORT_PATT="yyyy-MM-dd HH";
	public static Date fomartStrToDate(String str,String patt) throws ParseException{
		Date date=null;
		if(CheckUtil.checkString(str)){
			SimpleDateFormat sdf=new SimpleDateFormat(patt);
			date=sdf.parse(str);
		}
		return date;
	}
	
	public static String fomartDateToStr(Date date,String patt){
		String str=null;
		if(CheckUtil.checkDate(date)){
			SimpleDateFormat sdf=new SimpleDateFormat(patt);
			str=sdf.format(date);
		}
		return str;
	}
}
