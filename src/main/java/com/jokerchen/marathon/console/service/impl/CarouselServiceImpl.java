package com.jokerchen.marathon.console.service.impl;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.jokerchen.marathon.console.mapper.CarouselMapper;
import com.jokerchen.marathon.console.model.Carousel;
import com.jokerchen.marathon.console.service.CarouselService;
import com.jokerchen.marathon.constant.MarathonConstant;
import com.jokerchen.marathon.util.UploadUrlUtil;

/**
 * 首页图片轮播管理逻辑层
 * @author joker
 * @date 2017-12-05
 */
@Service
public class CarouselServiceImpl implements CarouselService{

	@Autowired
	private CarouselMapper carouselMapper;
	
	@Autowired
	private UploadUrlUtil uplodUrlUtil;
	
	/**
	 * 获取轮播信息
	 * @return
	 */
	public List<Carousel> findCarousel(){
		return carouselMapper.findCarousel();
	}
	
	/**
	 * 通过id查找轮播图片信息
	 * @param id
	 * @return
	 */
	public Carousel findCarouselById(int id){
		return carouselMapper.findCarouselById(id);
	}
	
	/**
	 * 保存首页图片轮播信息
	 * @param imgFile	图片信息
	 * @param carousel	其他信息
	 * @throws IOException IO异常信息
	 */
	public void saveCarousel(MultipartFile imgFile,Carousel carousel) throws IOException{
		//获取文件名
		String fileName = imgFile.getOriginalFilename();
		if(imgFile != null && fileName != null && !"".equals(fileName)){
			//获取文件的保存路径
			String path = uplodUrlUtil.fileNameWithTime(
					fileName.substring(fileName.lastIndexOf(".")),MarathonConstant.UPLOAD_CAROUSEL_FOLDER);
			// 转存文件  
			imgFile.transferTo(new File(path));
			carousel.setImgUrl(uplodUrlUtil.fileRelativePath(path));
		}else{
			if(carousel.getId() != null && carousel.getId() != 0){
				carousel.setImgUrl(carouselMapper.findCarouselById(carousel.getId()).getImgUrl());
			}
		}
		if(carousel.getId() != null && carousel.getId() != 0){
			carouselMapper.updateCarousel(carousel);
		}else{
			carouselMapper.addCarousel(carousel);
		}
	}
	
	/**
	 * 删除轮播信息
	 * @param id
	 */
	public void deleteCarousel(Integer id){
		Carousel carousel = carouselMapper.findCarouselById(id);
		uplodUrlUtil.deleteFile(uplodUrlUtil.contextPath()+carousel.getImgUrl());
		carouselMapper.deleteCarousel(id);
	}
	
}
