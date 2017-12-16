package com.jokerchen.marathon.console.model;

import lombok.Data;

/**
 * 比赛的比赛项目
 * @author joker
 * 2017-12-16
 */
@Data
public class MatchEvent {
	
	/**
	 * 主键
	 */
	private Integer id; 
	
	/**
	 * 关联m_match主键
	 */
	private Integer matchId;
	
	/**
	 * 比赛类型关联字典表
	 */
	private String marathonType;
	private String text;
	
	/**
	 * 允许报名人数
	 */
	private Integer applicationNum;
	
	/**
	 * 报名费用
	 */
	private Float registrationFee;
	
	/**
	 * 比赛起跑时间
	 */
	private String startingTime;
	/**
	 * 比赛终止时间
	 */
	private String closingTime;
	
	/**
	 * 起点
	 */
	private String startingPoint;
	
	/**
	 * 终点
	 */
	private String terminalPoint;
	
	/**
	 * 总路程
	 */
	private Float course;

}
