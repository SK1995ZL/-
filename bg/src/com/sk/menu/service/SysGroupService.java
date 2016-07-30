package com.sk.menu.service;

import java.util.List;
import java.util.Map;

import org.springframework.transaction.annotation.Transactional;

import com.sk.menu.model.SysGroup;

public interface SysGroupService {
	@Transactional(readOnly=true)
	public List<SysGroup> listGroup(@SuppressWarnings("rawtypes") Map map);
}
