package com.sk.menu.model;

import java.util.List;

public class SysGroup {
    private Integer groupId;
    private String groupName;
    private String groupKind;
    private String kind;
    private List<SysGroupChildren> childrens;
    
    public List<SysGroupChildren> getChildrens() {
		return childrens;
	}
	public void setChildrens(List<SysGroupChildren> childrens) {
		this.childrens = childrens;
	}
	public Integer getGroupId() {
        return groupId;
    }
    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }
    public String getGroupName() {
        return groupName;
    }
    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }
    public String getGroupKind() {
        return groupKind;
    }
    public void setGroupKind(String groupKind) {
        this.groupKind = groupKind;
    }
	public String getKind() {
		return kind;
	}
	public void setKind(String kind) {
		this.kind = kind;
	}
	
    
}