package com.sk.menu.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sk.menu.model.SysGroup;
import com.sk.menu.model.SysGroupChildren;
import com.sk.menu.model.User;
import com.sk.menu.service.SysGroupService;
@Controller
public class LoginMenuController {

	@Autowired
	private SysGroupService sysGroupService;
	/**
	 * 跳转至布局页面
	 * @param req
	 * @param resp
	 * @param model
	 * @return
	 */
	@RequestMapping(value="menu!layout",method=RequestMethod.GET)
	public String layout(HttpServletRequest req,HttpServletResponse resp,Model model){
		//获取登录的信息
		User user=(User) req.getSession().getAttribute("user");
		//Map map=new HashMap();
		//map.put("kind", user.getKindId());
		SysGroup sysGroup=new SysGroup();
		sysGroup.setKind(String.valueOf(user.getKindId()));
		List<SysGroup> groups=sysGroupService.listGroup(sysGroup);
		String json=leftMenu(groups);
		model.addAttribute("menus", json);
		return "/menu/sys_main";
	}
	/**
	 * 首页展示
	 * @param req
	 * @param resp
	 * @return
	 * @author SK
	 */
	@RequestMapping(value="menu!homePage",method=RequestMethod.GET)
	public String homePage(HttpServletRequest req,HttpServletResponse resp,Model model){
		return "/menu/bg_home_page";
	}
	public String leftMenu(List<SysGroup> sysGroups){
		StringBuffer sb=new StringBuffer();
		sb.append("[");
		for(int i = 0 ;i<sysGroups.size();i++ ){
			SysGroup group=sysGroups.get(i);
			sb.append("{\"id\":\""+group.getGroupId()+"\","
					+ "\"pid\":\"0\","
					+ "\"name\":\""+group.getGroupName()+"\"");
			List<SysGroupChildren> sysChildrens=group.getChildrens();
			if(sysChildrens.size()>0){
				sb.append(",\"open\":\"true\",\"children\":[");
				for(int u=0;u<sysChildrens.size();u++){
					SysGroupChildren children=sysChildrens.get(u);
					sb.append("{\"id\":\""+children.getChildrenId()+"\","
							+ "\"name\":\""+children.getChildrenName()+"\","
							+ "\"rel\":\""+children.getChildrenUrl()+"\"}");
					if(u==(sysChildrens.size()-1)){
						sb.append("]}");
					}else{
						sb.append(",");
					}
				}
			}else{
				sb.append(",\"open\":\"true\"}");
			}
			if(i!=(sysGroups.size()-1)){
				sb.append(",");
			}
		}
		sb.append("]");
		System.out.println(sb.toString());
		return sb.toString();
	}
}
