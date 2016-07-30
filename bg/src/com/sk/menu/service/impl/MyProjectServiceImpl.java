package com.sk.menu.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sk.menu.model.MyProject;
import com.sk.menu.model.MyProjectMapper;
import com.sk.menu.service.MyProjectService;
@Repository
public class MyProjectServiceImpl implements MyProjectService{

	@Autowired
	private MyProjectMapper myProjectMapper;
	@Override
	@Transactional(readOnly=true)
	public int selectCount() {
		return myProjectMapper.selectCount();
	}

	@SuppressWarnings("rawtypes")
	@Override
	@Transactional(readOnly=true)
	public List<MyProject> selectlist(Map map) {
		return myProjectMapper.selectlist(map);
	}

	@Override
	@Transactional
	public boolean save(MyProject myProject) {
		// TODO Auto-generated method stub
		myProject.setCreateTime(new Date());
		return myProjectMapper.save(myProject);
	}

	@Override
	@Transactional
	public boolean edit(MyProject myProject) {
		// TODO Auto-generated method stub
		return myProjectMapper.edit(myProject);
	}

	@Override
	@Transactional
	public boolean updateStu(MyProject myProject) {
		// TODO Auto-generated method stub
		return myProjectMapper.updateStu(myProject);
	}


}
