package com.jokerchen.marathon.console.model;

import java.util.Date;

import org.springframework.util.StringUtils;

import com.jokerchen.util.DateUtil;

import lombok.Data;

/**
 * 赛事信息主实体
 * 
 * @author joker 2017-10-28
 */
@Data
public class Match {

	/**
	 * 主键信息
	 */
	private Integer id;

	/**
	 * 比赛名称信息
	 */
	private String matchName;

	/**
	 * 赛事的logo在服务器上的地址
	 */
	private String matchLogo;

	/**
	 * 赛事地点，从区域表张中读取
	 */
	private String matchArea;

	/**
	 * 官网地址
	 */
	private String officialWeb;

	/**
	 * 数据状态
	 */
	private String status;

	/**
	 * 表赛开始日期
	 */
	private String matchDate;

	/**
	 * 报名开始时间
	 */
	private Date registStartTime;
	private String registStartTimeStr;

	/**
	 * 报名结束时间
	 */
	private Date registEndTime;
	private String registEndTimeStr;
	
	/**
	 * 比赛项目
	 */
	private String matchEvent;
	
	
	private String queryStartDate;
	private String queryEndDate;
	private String province;
	private String city;
	
	
	public void setRegistStartTime(Date registStartTime){
		this.registStartTime = registStartTime;
		if(registStartTime != null){
			this.registStartTimeStr = DateUtil.DateToString(registStartTime);
		}
	}
	
	public void setRegistStartTimeStr(String registStartTimeStr){
		this.registStartTimeStr = registStartTimeStr;
		if(!StringUtils.isEmpty(registStartTimeStr)){
			this.registStartTime = DateUtil.stringToDate(registStartTimeStr);
		}
	}
	
	public void setRegistEndTime(Date registEndTime){
		this.registEndTime = registEndTime;
		if(registEndTime != null){
			this.registEndTimeStr = DateUtil.DateToString(registEndTime);
		}
	}
	
	public void setRegistEndTimeStr(String registEndTimeStr){
		this.registEndTimeStr = registEndTimeStr;
		if(!StringUtils.isEmpty(registEndTimeStr)){
			this.registEndTime = DateUtil.stringToDate(registEndTimeStr);
		}
	}
}
