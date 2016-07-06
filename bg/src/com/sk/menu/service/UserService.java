package com.sk.menu.service;
import org.springframework.transaction.annotation.Transactional;
import com.sk.menu.model.User;
public interface UserService {
    /**
     * 注册搭建商
     * @param user
     * @return
     */
	@Transactional(readOnly=true)
	public boolean insert(User user);
	/**
	 * 校验是否存在同样的昵称
	 * @param nickname
	 * @return
	 */
	@Transactional(readOnly=true)
	public int selectUserCountByNickName(String nickname);
	/**
	 * 根据昵称和密码查找user
	 * 登录
	 * @param user
	 * @return
	 */
	@Transactional(readOnly=true)
	public User selectUserByNickNameAndPassword(User user);

}