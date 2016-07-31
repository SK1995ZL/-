package com.sk.menu.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sk.menu.model.SysGroup;
import com.sk.menu.model.SysGroupMapper;
import com.sk.menu.service.SysGroupService;
@Repository
public class SysGroupServiceImpl implements SysGroupService{

	@Autowired
	private SysGroupMapper sysGroupMapper;
	
	@Override
	@Transactional
	public List<SysGroup> listGroup(SysGroup sysGroup) {
		// TODO Auto-generated method stub
		return sysGroupMapper.listGroup(sysGroup);
	}

}
