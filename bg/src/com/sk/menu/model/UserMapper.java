package com.sk.menu.model;
/**
 * 用户表
 * @author zhang
 *
 */
public interface UserMapper {
   /**
    * 根据nickname  password查找user表
    * @param user
    * @return
    */
   public User selectUserByNickNameAndPassword(User user);
   /**
    * 搭建商注册填写的资料
    * 昵称：nickname, 账户类型:kind_id,手机:mobile,邮箱: email,
    * 职务post,邮寄地址:mailing_addr,密码：password
    * @param user
    * @return
    */
   public boolean insert(User user);
   /**
    * 注册之前检查用户名是否重复
    * @param user
    * @return
    */
   public int selectUserCountByNickName(String nickname);
}