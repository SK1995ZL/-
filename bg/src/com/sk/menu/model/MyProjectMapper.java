package com.sk.menu.model;

import java.util.List;
import java.util.Map;

public interface MyProjectMapper {
	/**
	 * 计算总数
	 * @return
	 */
	public int selectCount();
	/**
	 * 查询我的项目表
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public List<MyProject> selectlist(Map map);
	/**
	 * 搜索查询
	 * @return
	 */
	public List<MyProject> selectComb();
	/**
	 * 保存
	 * @param myProject
	 * @return
	 */
	public boolean save(MyProject myProject);
	/**
	 * 编辑我的项目
	 * @param myProject
	 * @return
	 */
	public boolean edit(MyProject myProject);
	/**
	 * 我的项目修改状态
	 * @param myProject
	 * @return
	 */
	public boolean updateStu(MyProject myProject);
}