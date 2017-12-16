package com.jokerchen.marathon.console.model;

import java.util.Date;

import com.jokerchen.util.DateUtil;

import lombok.Data;

/**
 * 文章想信息
 * @author joker
 * @date 2017-12-09
 */
@Data
public class Article {

	/**
	 * 主键
	 */
	private Integer id;
	
	/**
	 * 标题
	 */
	private String title;
	
	/**
	 * 创建者
	 */
	private String creator;
	
	/**
	 * 文章分类关联字典
	 * ARTICLE_TYPE
	 */
	private String type;
	
	/**
	 * 浏览数
	 */
	private Integer visit;
	
	/**
	 * 创建时间
	 */
	private Date createTime;
	private String createTimeStr;
	
	/**
	 * 文章具体信息
	 */
	private String content;
	
	public void setCreateTime(Date createTime){
		if(createTime != null){
			this.createTimeStr = DateUtil.DateToString(createTime);
		}
		this.createTime = createTime;
	}

	public void setCreateTimeStr(String createTimeStr){
		if(createTimeStr != null && !"".equals(createTimeStr)){
			this.createTime = DateUtil.stringToDate(createTimeStr);
		}
		this.createTimeStr = createTimeStr;
	}
}
