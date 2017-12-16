package com.jokerchen.marathon.console.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jokerchen.marathon.console.mapper.ArticleMapper;
import com.jokerchen.marathon.console.model.Article;
import com.jokerchen.marathon.console.service.ArticleService;

/**
 * 文章信息管理
 * @author joker
 * 2017-12-09
 */
@Service
public class ArticleServiceImpl implements ArticleService{

	@Autowired
	private ArticleMapper articleMapper;
	
	/**
	 * 查询文章信息
	 * @param article
	 */
	public List<Article> findArticle(Article article){
		return articleMapper.findArticle(article);
	}
	
	/**
	 * 保存文章信息
	 * @param article
	 */
	public void saveArticle(Article article){
		if(article.getId() != null && article.getId() != 0){
			//修改
			articleMapper.updateArticle(article);
		}else{
			//新增
			articleMapper.addArticle(article);
		}
	}

	/**
	 * 通过id查询文章信息
	 * @param id
	 * @return
	 */
	public Article findArticleById(int id){
		return articleMapper.findArticleById(id);
	}
	
	/**
	 * 批量删除文章信息
	 * @param ids 文章的ids
	 */
	public void deleteArticle(int[] ids){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ids", ids);
		articleMapper.deleteArticle(map);
	}
	
}
