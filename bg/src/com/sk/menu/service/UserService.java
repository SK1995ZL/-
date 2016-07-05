package com.sk.menu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sk.menu.model.User;
import com.sk.menu.model.UserMapper;

@Repository
public class UserService {

	@Autowired
	private UserMapper userMapper;
	@Transactional(readOnly=false)
	public boolean insert(User user){
		return userMapper.insert(user);
	}
	@Transactional(readOnly=true)
	public int selectUserCountByNickName(String nickname){
		return userMapper.selectUserCountByNickName(nickname);
	}

}