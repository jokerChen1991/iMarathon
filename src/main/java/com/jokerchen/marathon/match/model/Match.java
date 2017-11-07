package com.jokerchen.marathon.match.model;

import java.util.Date;

/**
 * 赛事信息主实体
 * 
 * @author joker 2017-10-28
 */
public class Match {

	/**
	 * 主键信息
	 */
	private int id;

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
	 * 关联子字典表：marathon_type
	 */
	private String matchType;

	/**
	 * 官网地址
	 */
	private String officalWeb;

	/**
	 * 数据状态
	 */
	private String status;

	/**
	 * 表赛开始日期
	 */
	private String matchDate;

	/**
	 * 未开始赛事：1，一结束赛事：0
	 */
	private boolean started;

	/**
	 * 报名开始时间
	 */
	private Date registStartTime;

	/**
	 * 报名结束时间
	 */
	private Date registEndTime;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMatchName() {
		return matchName;
	}

	public void setMatchName(String matchName) {
		this.matchName = matchName;
	}

	public String getMatchLogo() {
		return matchLogo;
	}

	public void setMatchLogo(String matchLogo) {
		this.matchLogo = matchLogo;
	}

	public String getMatchArea() {
		return matchArea;
	}

	public void setMatchArea(String matchArea) {
		this.matchArea = matchArea;
	}

	public String getMatchType() {
		return matchType;
	}

	public void setMatchType(String matchType) {
		this.matchType = matchType;
	}

	public String getOfficalWeb() {
		return officalWeb;
	}

	public void setOfficalWeb(String officalWeb) {
		this.officalWeb = officalWeb;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMatchDate() {
		return matchDate;
	}

	public void setMatchDate(String matchDate) {
		this.matchDate = matchDate;
	}

	public boolean isStarted() {
		return started;
	}

	public void setStarted(boolean started) {
		this.started = started;
	}

	public Date getRegistStartTime() {
		return registStartTime;
	}

	public void setRegistStartTime(Date registStartTime) {
		this.registStartTime = registStartTime;
	}

	public Date getRegistEndTime() {
		return registEndTime;
	}

	public void setRegistEndTime(Date registEndTime) {
		this.registEndTime = registEndTime;
	}

}
