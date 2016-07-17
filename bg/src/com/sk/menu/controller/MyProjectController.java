package com.sk.menu.controller;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.sk.menu.model.MyProject;
import com.sk.menu.service.MyProjectService;
import com.sk.util.Domain;
@Controller
public class MyProjectController {

	@Autowired
	private MyProjectService myProjectService;
	
	@RequestMapping(value="menu!myProject",method=RequestMethod.GET)
	public String menuMyProject(HttpServletRequest req,HttpServletResponse resp){
		return "/menu/bg_myProject";
	}
	/**
	 * 我的项目列表
	 * @param req
	 * @param resp
	 * @param model
	 * @return
	 * @throws IOException 
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequestMapping(value="menu!myProjectlist",method=RequestMethod.POST)
	public void menuMyProjectList(HttpServletRequest req,HttpServletResponse resp,String searchName) throws IOException{
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/html;charset=utf-8");
		Map map=new HashMap();
		map.put("searchName", searchName);
		//System.out.println("searchName="+searchName);
		List<MyProject> myProjects=myProjectService.selectlist(map);
		for(MyProject myProject:myProjects){
			myProject.setStatusStr(Domain.getProjectMap().get(String.valueOf(myProject.getStatusId())));
		}
		JSONArray jsonArray=JSONArray.fromObject(myProjects);
		PrintWriter out=resp.getWriter();
		out.print(jsonArray);
		out.flush();
		out.close();
	}
	@RequestMapping(value="menu!myProjectToAdd",method=RequestMethod.POST)
	public String menuMyProjectToAdd(HttpServletRequest req,HttpServletResponse resp){
		return "/menu/bg_myProjectToAdd";
	}
}
