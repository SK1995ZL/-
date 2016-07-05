package com.sk.menu.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.sk.menu.model.User;
import com.sk.menu.service.UserService;
import com.sk.util.Domain;


@Controller
public class LoginController {
	@Autowired 
	private UserService userService;
	/**
	 * 登录页面
	 * @return
	 */
	@RequestMapping("login!index")
	public String bgLogin(Model model,Integer isRegist){
		System.out.println("isRegist="+isRegist);
		if(isRegist!=null){
			if(isRegist==1){
				model.addAttribute("isRegist",Domain.ISREGIST);
			}else{
				model.addAttribute("isRegist",Domain.NOREGIST);
			}
		}
		return "/login/bgLogin";
	}
	/**
	 * 登录操作
	 * @param nickname
	 * @param password
	 * @return
	 */
	@RequestMapping(value="login!login",method=RequestMethod.POST)
	public String login(String nickname,String password){
		System.out.println("user="+nickname+","+password);
		
		
		
		return null;
	}
	/**
	 * 到搭建商注册页面
	 * @param model
	 * @return
	 */
	@RequestMapping(value="setup!toRegist",method=RequestMethod.GET)
	public String bgRegist(Model model){
		model.addAttribute("postMap", Domain.getPostMap());
		return "/login/setupRegist";
	}
	/**
	 * 用户需知
	 * @return
	 */
	@RequestMapping(value="setup!userAgree",method=RequestMethod.GET)
	public String setupUserAgreeMent(){
		return "/login/setupUserAgreeMent";
	}

	@RequestMapping(value="setUp!regist",method=RequestMethod.POST)
	@Transactional
	public String setUpRegist(User user){
		userService.insert(user);
		//System.out.println(user.getId());
		return "redirect:./login!index.ht?isRegist="+Domain.ISREGIST;
	}
	@RequestMapping(value="setUp!nickname",method=RequestMethod.GET)
	public void setUpRegistNickName(HttpServletRequest req,HttpServletResponse resp,String nickname){
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("html/text");
		PrintWriter out=null;
		try {
			out=resp.getWriter();
			int count=userService.selectUserCountByNickName(nickname);
            out.print(count); 
            //<span class=\"glyphicon glyphicon-ok\"></span><span class=\"glyphicon glyphicon-remove\"></span>
            out.flush();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			out.close();
		}
		
		
	}
}
