package com.sk.menu.service;

import java.util.List;
import java.util.Map;

import org.springframework.transaction.annotation.Transactional;

import com.sk.menu.model.Menu;

public interface MenuService {

	@Transactional(readOnly=true)
	public List<Menu> listSelect(@SuppressWarnings("rawtypes") Map map);
	
}
