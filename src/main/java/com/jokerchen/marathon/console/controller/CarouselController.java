package com.jokerchen.marathon.console.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.jokerchen.base.controller.BaseController;
import com.jokerchen.marathon.console.model.Carousel;
import com.jokerchen.marathon.console.service.CarouselService;

/**
 * 首页轮播的图片信息管理接口
 * @author joker
 * @date 2017-12-05
 */
@Controller
@RequestMapping("marathon/console/carousel")
public class CarouselController extends BaseController{
	
	@Autowired
	private CarouselService carouselService;
	
	/**
	 * 获取轮播信息
	 * @return
	 */
	@ResponseBody
	@RequestMapping("findCarousel")
	public List<Carousel> findCarousel(){
		return carouselService.findCarousel();
	}
	
	/**
	 * 显示修改页面
	 * @param id 要修改的id
	 * @return
	 */
	@RequestMapping("toEditPage")
	public ModelAndView toEditPage(Integer id){
		ModelAndView view = new ModelAndView("marathon/console/carousel_edit");
		if(id != null && id != 0){
			view.addObject("carousel",carouselService.findCarouselById(id));
		}
		return view;
	}
	
	
	/**
	 * 保存轮播信息
	 * @param imgFile	上传的文件
	 * @param carousel	上传文件的信息
	 * @throws IOException IO文件异常
	 */
	@ResponseBody
	@RequestMapping("saveCarousel")
	public void saveCarousel(MultipartFile imgFile, Carousel carousel) throws IOException{
		carouselService.saveCarousel(imgFile, carousel);
	}
	
	/**
	 * 删除轮播信息
	 * @param id
	 */
	@ResponseBody
	@RequestMapping("deleteCarousel")
	public void deleteCarousel(Integer id){
		carouselService.deleteCarousel(id);
	}
	
}
