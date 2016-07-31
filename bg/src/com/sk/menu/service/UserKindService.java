package com.sk.menu.service;
import java.util.List;
import org.springframework.transaction.annotation.Transactional;
import com.sk.menu.model.UserKind;
public interface UserKindService {
	@Transactional(readOnly=true)
	public List<UserKind> selectUserKind();
}
