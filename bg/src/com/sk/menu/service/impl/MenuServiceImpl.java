package com.sk.menu.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sk.menu.model.Menu;
import com.sk.menu.model.MenuMapper;
import com.sk.menu.service.MenuService;
@Repository
public class MenuServiceImpl implements MenuService{

	@Autowired
	private MenuMapper menuMapper;
	
	@SuppressWarnings("rawtypes")
	@Override
	@Transactional
	public List<Menu> listSelect(Map map) {
		return menuMapper.listSelect(map);
	}

}
