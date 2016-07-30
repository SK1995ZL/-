package com.sk.menu.model;

public class SysGroupChildren {
    private Integer childrenId;
    private String childrenName;
    private Integer groupId;
    private String childrenKind;
    private String childrenUrl;
    public Integer getChildrenId() {
        return childrenId;
    }
    public void setChildrenId(Integer childrenId) {
        this.childrenId = childrenId;
    }
    public String getChildrenName() {
        return childrenName;
    }
    public void setChildrenName(String childrenName) {
        this.childrenName = childrenName;
    }
    public Integer getGroupId() {
        return groupId;
    }
    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }
    public String getChildrenKind() {
        return childrenKind;
    }
    public void setChildrenKind(String childrenKind) {
        this.childrenKind = childrenKind;
    }
	public String getChildrenUrl() {
		return childrenUrl;
	}
	public void setChildrenUrl(String childrenUrl) {
		this.childrenUrl = childrenUrl;
	}
    
}