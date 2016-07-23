package com.sk.menu.service;

import java.util.List;
import java.util.Map;

import org.springframework.transaction.annotation.Transactional;

import com.sk.menu.model.MyProject;

public interface MyProjectService {

	/**
	 * 计算总数
	 * @return
	 */
	@Transactional(readOnly=true)
	public int selectCount();
	/**
	 * 查询我的项目表
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	@Transactional(readOnly=true)
	public List<MyProject> selectlist(Map map);
	@Transactional
	public boolean save(MyProject myProject);

}
