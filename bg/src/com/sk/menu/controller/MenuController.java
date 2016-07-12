package com.sk.menu.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sk.menu.model.Menu;
import com.sk.menu.model.MenuMapper;
import com.sk.menu.model.User;
import com.sk.util.CheckUtil;
import com.sk.util.Domain;
@Controller
public class MenuController {

	@Autowired
	private MenuMapper menuMapper;
	/**
	 * 进入布局页面
	 * @param req
	 * @param resp
	 * @param model
	 * @return
	 * @author SK
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequestMapping(value="menu!layout",method=RequestMethod.GET)
	public String layout(HttpServletRequest req,HttpServletResponse resp,Model model){
		//获取登录的信息
		User user=(User) req.getSession().getAttribute("user");
		Map map=new HashMap();
		map.put("kind", user.getKindId());
		//根据kind查找相应的菜单
		List<Menu> menus=menuMapper.listSelect(map);
		JSONArray json=JSONArray.fromObject(menus);
		model.addAttribute("menus", json.toString());
		return "/menu/bg_main";
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
}
