package com.sk.menu.service.impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sk.menu.model.UserKind;
import com.sk.menu.model.UserKindMapper;
import com.sk.menu.service.UserKindService;
@Repository
public class UserKindSeviceImpl implements UserKindService{

	@Autowired
	private UserKindMapper userKindMapper;
	@Transactional(readOnly=true)
	public List<UserKind>selectUserKind(){
		return userKindMapper.selectUserKind();
	}
}
