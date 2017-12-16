package com.jokerchen.marathon.console.controller;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.jokerchen.base.context.PageContext;
import com.jokerchen.base.controller.BaseController;
import com.jokerchen.base.model.PageVO;
import com.jokerchen.marathon.console.model.Article;
import com.jokerchen.marathon.console.service.ArticleService;
import com.jokerchen.util.DictConvert;

/**
 * 文章信息管理
 * @author joker
 * 2017-12-09
 */
@Controller
@RequestMapping("marathon/console/article")
public class ArticleController extends BaseController{

	@Autowired
	private ArticleService articleService;
	
	@Autowired
	private DictConvert dictConvert;
	
	/**
	 * 查询文章信息
	 * @param article
	 * @throws InvocationTargetException 
	 * @throws IllegalArgumentException 
	 * @throws IllegalAccessException 
	 * @throws SecurityException 
	 * @throws NoSuchMethodException 
	 */
	@ResponseBody
	@RequestMapping("findArticle")
	public PageVO findArticle(Article article) throws NoSuchMethodException,
			SecurityException, IllegalAccessException, 
			IllegalArgumentException, InvocationTargetException{
		List<Article> list = articleService.findArticle(article);
		dictConvert.convertListCodeToValue(list, "article_type", "type");
		PageVO page = PageContext.getPage();
		page.setDatas(list);
		return page;
	}
	
	/**
	 * 保存文章信息
	 * @param article
	 */
	@ResponseBody
	@RequestMapping("saveArticle")
	public void saveArticle(Article article){
		articleService.saveArticle(article);
	}

	/**
	 * 通过id查询文章信息
	 * @param id
	 * @return
	 */
	@ResponseBody
	@RequestMapping("findArticleById")
	public Article findArticleById(int id){
		return articleService.findArticleById(id);
	}
	
	/**
	 * 批量删除文章信息
	 * @param ids 文章的ids
	 */
	@ResponseBody
	@RequestMapping("deleteArticle")
	public void deleteArticle(int[] ids){
		articleService.deleteArticle(ids);
	}
	
	/**
	 * 跳转到修改文件页面
	 * @param id
	 * @return
	 */
	@ResponseBody
	@RequestMapping("toEditPage")
	public ModelAndView toEditPage(Integer id){
		ModelAndView view = new ModelAndView("marathon/console/article_edit");
		if(id != null && id != 0){
			view.addObject("entity",articleService.findArticleById(id));
		}
		return view;
	}
}
