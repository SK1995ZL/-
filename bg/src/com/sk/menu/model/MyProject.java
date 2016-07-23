package com.sk.menu.model;

import java.text.ParseException;
import java.util.Date;

import com.sk.util.CheckUtil;
import com.sk.util.DateUtil;

public class MyProject {
    private Integer id;
    private String name;
    private Date officeStart;
    private Date officeEnd;
    private Integer creator;
    private Date createTime;
    private Integer statusId;
    //创建者昵称
    private String creatorStr;
    //项目状态str
    private String statusStr;
    
    public String getStatusStr() {
		return statusStr;
	}

	public void setStatusStr(String statusStr) {
		this.statusStr = statusStr;
	}

	public String getCreatorStr() {
		return creatorStr;
	}

	public void setCreatorStr(String creatorStr) {
		this.creatorStr = creatorStr;
	}

	public Integer getId() {
        return id;
    }
	public Integer getStatusId() {
        return statusId;
	}
	
	public void setStatusId(Integer statusId) {
	    this.statusId = statusId;
	}

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOfficeStart() {
        return DateUtil.fomartDateToStr(officeStart, DateUtil.SHORT_PATT);
    }

    public void setOfficeStart(Date officeStart) throws ParseException {
        this.officeStart = officeStart;
    }

    public String getOfficeEnd() {
        return DateUtil.fomartDateToStr(officeEnd, DateUtil.SHORT_PATT);
    }

    public void setOfficeEnd(Date officeEnd) throws ParseException {
        this.officeEnd = officeEnd;
    }

    public Integer getCreator() {
        return creator;
    }

    public void setCreator(Integer creator) {
        this.creator = creator;
    }

    public String getCreateTime() {
        return DateUtil.fomartDateToStr(createTime, DateUtil.SHORT_PATT);
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "name="+name+",officeStart="+officeStart+",officeEnd="+officeEnd+",creator="+creator+",statusId="+statusId;
	}
    
}