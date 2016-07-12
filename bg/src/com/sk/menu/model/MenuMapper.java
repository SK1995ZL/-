package com.sk.menu.model;

import java.util.List;
import java.util.Map;
public interface MenuMapper {
	public List<Menu> listSelect(@SuppressWarnings("rawtypes") Map map);
}