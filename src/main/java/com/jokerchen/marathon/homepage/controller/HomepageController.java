package com.jokerchen.marathon.homepage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * 马拉松赛事首页
 * @author joker
 * @date 2017-11-7
 */
@Controller
@RequestMapping("marathon/homepage")
public class HomepageController {

	/**
	 * 跳往马拉松首页
	 * @return
	 */
	@RequestMapping("index")
	public ModelAndView index(){
		ModelAndView view = new ModelAndView("marathon/homepage/index");
		return view;
	}
}
