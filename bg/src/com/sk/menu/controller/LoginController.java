package com.sk.menu.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.sk.menu.model.User;
import com.sk.menu.service.UserService;
import com.sk.util.Base64;
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
	public String bgLogin(Model model,Integer isRegist,Integer isLogin,HttpServletRequest req,HttpServletResponse resp){
		if(isRegist!=null){
			if(isRegist==1){
				model.addAttribute("isRegist",Domain.ISREGIST);
			}else{
				model.addAttribute("isRegist",Domain.NOREGIST);
			}
		}
		String modelStr=(String) req.getParameter("model");
		model.addAttribute("model",modelStr );
		return "/login/bgLogin";
	}
	/**
	 * 登录操作
	 * @param nickname
	 * @param password
	 * @return
	 */
	@RequestMapping(value="login!login",method=RequestMethod.POST)
	public String login(String nickname,String password,HttpServletRequest req,HttpServletResponse resp){
		User checkUser=new User();
		checkUser.setNickname(nickname);
		checkUser.setPassword(Base64.encode(password));;
		User user=userService.selectUserByNickNameAndPassword(checkUser);
		if(user!=null){
			HttpSession session=req.getSession();
			session.setAttribute("user", user);
			return "redirect:./menu!layout.ht";
		}else{
			return "redirect:./login!index.ht?model="+Domain.NOLOGIN;
		}
	}
	/**
	 * 注销登录
	 * @param req
	 * @param resp
	 * @return
	 */
	@RequestMapping(value="login!out",method=RequestMethod.GET)
	public String loginOut(HttpServletRequest req,HttpServletResponse resp){
		HttpSession session=req.getSession(true);
		session.setAttribute("user", null);
		return "redirect:./login!index.ht";
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

	/**
	 * 搭建商注册
	 * @param user
	 * @return
	 */
	@RequestMapping(value="setUp!regist",method=RequestMethod.POST)
	@Transactional
	public String setUpRegist(User user){
		user.setPassword(Base64.encode(user.getPassword()));
		userService.insert(user);
		return "redirect:./login!index.ht?isRegist="+Domain.ISREGIST;
	}
	/**
	 * 校验昵称是否存在
	 * @param req
	 * @param resp
	 * @param nickname
	 */
	@RequestMapping(value="setUp!nickname",method=RequestMethod.POST)
	public void setUpRegistNickName(HttpServletRequest req,HttpServletResponse resp,String nickname){
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("html/text");
		PrintWriter out=null;
		try {
			out=resp.getWriter();
			int count=userService.selectUserCountByNickName(nickname);
			System.out.println("count="+count);
            out.print(count); 
            out.flush();
		} catch (IOException e) {
			e.printStackTrace();
		}finally{
			out.close();
		}
	}
}
