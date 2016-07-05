package com.sk.menu.model;

import com.sk.menu.model.UserKind;
import java.util.List;
import org.apache.ibatis.annotations.Param;
/**
 * 用户类型表
 * @author zhang
 *
 */
public interface UserKindMapper {
   /**
    * 用户类型列表
    * @return
    */
	public List<UserKind> selectUserKind();
	/**
	 * 根据id查找用户类型表
	 * @return
	 */
	public UserKind  selectUserKindById();
}