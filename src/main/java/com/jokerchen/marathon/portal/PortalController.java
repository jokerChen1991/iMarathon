package com.jokerchen.marathon.portal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.jokerchen.base.context.SecurityContext;
import com.jokerchen.base.controller.BaseController;
import com.jokerchen.sys.user.model.User;

/**
 * 页面布局类
 * @author joker
 * @date 2017-11-25
 */
@Controller
@RequestMapping("marathon/portal")
public class PortalController extends BaseController{

	/**
	 * 布局页面
	 * @return
	 */
	@RequestMapping("index")
	public ModelAndView layout(){
		ModelAndView view = new ModelAndView("marathon/portal/layout");
		User user = SecurityContext.getCurrentUser();
		if(user != null){
			view.addObject("nickName", user.getNickname());
		}
		return view;
	}
	
	/**
	 * 首页
	 * @return
	 */
	@RequestMapping("homepage")
	public ModelAndView homepage(){
		ModelAndView view = new ModelAndView("marathon/portal/homepage");
		return view;
	}

	/**
	 * 赛事页面
	 * @return
	 */
	@RequestMapping("match")
	public ModelAndView match(){
		ModelAndView view = new ModelAndView("marathon/portal/match");
		return view;
	}

	/**
	 * 资讯页面
	 * @return
	 */
	@RequestMapping("information")
	public ModelAndView information(){
		ModelAndView view = new ModelAndView("marathon/portal/information");
		return view;
	}
	
	/**
	 * 旅行页面
	 * @return
	 */
	@RequestMapping("travel")
	public ModelAndView travel(){
		ModelAndView view = new ModelAndView("marathon/portal/travel");
		return view;
	}

	/**
	 * 工具页面
	 * @return
	 */
	@RequestMapping("tool")
	public ModelAndView tool(){
		ModelAndView view = new ModelAndView("marathon/portal/tool");
		return view;
	}
	
	/**
	 * 合作页面
	 * @return
	 */
	@RequestMapping("cooperation")
	public ModelAndView cooperation(){
		ModelAndView view = new ModelAndView("marathon/portal/cooperation");
		return view;
	}
	
	/**
	 * 关于我们
	 * @return
	 */
	@RequestMapping("about")
	public ModelAndView about(){
		ModelAndView view = new ModelAndView("marathon/portal/about");
		return view;
	}
	
	/**
	 * login dialog
	 * @return
	 */
	@RequestMapping("loginDialog")
	public ModelAndView loginDialog(){
		ModelAndView view = new ModelAndView("marathon/portal/login");
		return view;
	}
	
}
