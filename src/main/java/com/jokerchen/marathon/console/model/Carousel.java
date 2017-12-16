package com.jokerchen.marathon.console.model;

import lombok.Data;

/**
 * 首页轮播信息
 * @author joker
 * @date 2017-12-05
 */
@Data
public class Carousel {

	/**
	 * 主键
	 */
	private Integer id;
	
	/**
	 * 标题
	 */
	private String title;
	
	/**
	 * 描述
	 */
	private String detail;
	
	/**
	 * 图片路径
	 */
	private String imgUrl;
	
	/**
	 * 顺序
	 */
	private Integer sequence;
}
