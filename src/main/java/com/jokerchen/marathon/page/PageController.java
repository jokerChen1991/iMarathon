package com.jokerchen.marathon.page;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.jokerchen.base.controller.BaseController;

/**
 * 页面布局类
 * @author joker
 * @date 2017-11-25
 */
@Controller
@RequestMapping("marathon/page")
public class PageController extends BaseController{

	/**
	 * 布局页面
	 * @return
	 */
	@RequestMapping("layout")
	public ModelAndView layout(){
		ModelAndView view = new ModelAndView("marathon/layout/index");
		return view;
	}
}
