package com.jokerchen.marathon.console.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.jokerchen.marathon.console.model.Carousel;

/**
 * 首页图片轮播管理逻辑层
 * @author joker
 * @date 2017-12-05
 */
public interface CarouselService {

	
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
	Carousel findCarouselById(int id);
	
	/**
	 * 保存首页图片轮播信息
	 * @param imgFile	图片信息
	 * @param carousel	其他信息
	 */
	void saveCarousel(MultipartFile imgFile,Carousel carousel) throws IOException;
	
	
	/**
	 * 删除轮播信息
	 * @param id
	 */
	void deleteCarousel(Integer id);
	
}
