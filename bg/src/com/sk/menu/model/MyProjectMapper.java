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
}