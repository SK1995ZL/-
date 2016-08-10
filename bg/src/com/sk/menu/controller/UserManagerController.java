package com.sk.menu.controller;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sk.menu.model.User;
import com.sk.menu.model.UserKind;
import com.sk.menu.service.UserKindService;
import com.sk.menu.service.UserService;
import com.sk.util.Base64;
import com.sk.util.CheckUtil;
import com.sk.util.Domain;
/**
 * 账号管理
 * @author SK
 *
 */
@Controller
public class UserManagerController {

	@Autowired
	private UserService userService;
	@Autowired
	private UserKindService userKindService;
	
	/**
	 * 主界面
	 * @param req
	 * @param resp
	 * @return
	 */
	@RequestMapping(value="user-manager!main",method=RequestMethod.GET)
	public String userManagerMain(HttpServletRequest req,HttpServletResponse resp){
		return "/menu/user-manager-main";
	}
	/**
	 * 账号管理列表查询
	 * @param req
	 * @param resp
	 * @throws IOException
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="user-manager!index",method=RequestMethod.POST)
	public void userManagerIndex(HttpServletRequest req,HttpServletResponse resp,String kindId) throws IOException{
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/html;charset=utf-8");
		PrintWriter out=resp.getWriter();
		System.out.println("**************kindId="+kindId);
		@SuppressWarnings("rawtypes")
		Map map=new HashMap();
		map.put("kindId", kindId);
		List<User> users=userService.listSelect(map);
		//String json=userManagerIndexJSON(users);
		//System.out.println(json);
		out.print(userManagerIndexJSON(users));
		out.flush();
		out.close();
	}
	/**
	 * 账号管理列表查询json
	 * @param users
	 * @return
	 */
	public String userManagerIndexJSON(List<User>users){
		StringBuffer sb=new StringBuffer();
		sb.append("[");
		for(int i = 0;i<users.size();i++){
			User user=users.get(i);
			sb.append("{\"id\":\""+user.getId()+"\","
					+ "\"nickname\":\""+user.getNickname()+"\","
					+ "\"kindId\":\""+user.getKindId()+"\","
					+ "\"kindName\":\""+user.getKindName()+"\","
					+ "\"mobile\":\""+user.getMobile()+"\",");
					
			if(CheckUtil.checkString(user.getToken())){
				sb.append("\"token\":\""+user.getToken()+"\"}");
			}else{
				sb.append("\"token\":\"尚未通过审核\"}");
			}
			if(i!=(users.size()-1)){
				sb.append(",");
			}
		}
		sb.append("]");
		return sb.toString();
	}
	/**
	 * 账号管理查询combo
	 * @param req
	 * @param resp
	 * @throws IOException
	 */
	@RequestMapping(value="user-manager!user-kind-combo",method=RequestMethod.POST)
	public void userManagerUserKindCombo(HttpServletRequest req,HttpServletResponse resp) throws IOException{
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/html;charset=utf-8");
		PrintWriter out=resp.getWriter();
		List<UserKind> userKinds=userKindService.selectUserKind();
		System.out.println(userManagerUserKindComboJSON(userKinds));
		out.print(userManagerUserKindComboJSON(userKinds));
		out.flush();
		out.close();
	}
	/**
	 * 账号管理查询combo json
	 * @param kinds
	 * @return
	 */
	public String userManagerUserKindComboJSON(List<UserKind> kinds){
		StringBuffer sb=new StringBuffer();
		sb.append("[");
		for(int i=0 ;i<kinds.size();i++){
			UserKind kind=kinds.get(i);
			sb.append("{\"id\":\""+kind.getId()+"\",\"name\":\""+kind.getName()+"\"}");
			if(i!=(kinds.size()-1)){
				sb.append(",");
			}
		}
		sb.append("]");
		return sb.toString();
	}
	
	@RequestMapping(value="user-manager!new",method=RequestMethod.GET)
	public String userManagerNew(){
		return "/menu/user-manager-new";
	}
	/**
	 * 职务combo
	 * @param req
	 * @param resp
	 * @throws IOException
	 */
	@RequestMapping(value="user-manager!user-post-combo",method=RequestMethod.POST)
	public void userManagerUserPostCombo(HttpServletRequest req,HttpServletResponse resp) throws IOException{
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/html;charset=utf-8");
		PrintWriter out=resp.getWriter();
		out.print(Domain.getPostJson());
		out.flush();
		out.close();
	}
	@RequestMapping(value="user-manager!edit-new",method=RequestMethod.POST)
	public void userManagerEditNew(User user,HttpServletRequest req,HttpServletResponse resp) throws IOException{
		user.setPassword(Base64.encode(user.getPassword()));
		boolean flag=userService.insert(user);
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/html;charset=utf-8");
		PrintWriter out=resp.getWriter();
		if(flag){
			out.print("success:保存成功");
		}else{
			out.print("failed:保存失败");
		}
		out.flush();
		out.close();
	}
	/*System.out.println("nickname="+user.getNickname()+","
	+ "password="+user.getPassword()+""
	+ ",mobile="+user.getMobile()+""
	+ ",kindId="+user.getKindId()+""
	+ ",email="+user.getEmail()+""
	+ ",post="+user.getPost()+""
	+ ",mailingAddr="+user.getMailingAddr());*/
}
