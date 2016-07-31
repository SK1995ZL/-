package com.sk.menu.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sk.menu.model.User;
import com.sk.menu.model.UserMapper;
import com.sk.menu.service.UserService;
@Repository
public class UserServiceImpl implements UserService {

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

	@Transactional(readOnly=true)
	public User selectUserByNickNameAndPassword(User user){
		return userMapper.selectUserByNickNameAndPassword(user);
	}
	@Override
	public List<User> listSelect(@SuppressWarnings("rawtypes") Map map) {
		// TODO Auto-generated method stub
		return userMapper.listSelect(map);
	}
	
}
