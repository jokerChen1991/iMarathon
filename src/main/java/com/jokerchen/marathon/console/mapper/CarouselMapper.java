package com.jokerchen.marathon.console.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.jokerchen.marathon.console.model.Carousel;

/**
 * 首页轮播管理持久层接口
 * @author joker
 * 2017-12-05
 */
@Repository("carouselMapper")
public interface CarouselMapper {

	
	/**
	 * 获取轮播信息
	 * @return
	 */
	List<Carousel> findCarousel();
	
	/**
	 * 通过id查找轮播图片信息
	 * @param id
	 * @return
	 */
	Carousel findCarouselById(@Param("id")int id);
	
	/**
	 * 新增首页轮播图片信息
	 * @param carousel	轮播图片信息
	 */
	void addCarousel(Carousel carousel);

	/**
	 * 修改首页轮播图片信息
	 * @param carousel	轮播图片信息
	 */
	void updateCarousel(Carousel carousel);
	
	/**
	 * 删除轮播信息
	 * @param id
	 */
	void deleteCarousel(Integer id);
	
}
