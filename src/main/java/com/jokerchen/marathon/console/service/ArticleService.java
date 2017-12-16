package com.jokerchen.marathon.console.service;

import java.util.List;

import com.jokerchen.marathon.console.model.Article;

/**
 * 文章信息管理
 * @author joker
 * 2017-12-09
 */
public interface ArticleService {

	/**
	 * 查询文章信息
	 * @param article
	 */
	List<Article> findArticle(Article article);
	
	/**
	 * 保存文章信息
	 * @param article
	 */
	void saveArticle(Article article);
	
	/**
	 * 通过id查询文章信息
	 * @param id
	 * @return
	 */
	Article findArticleById(int id);
	
	/**
	 * 批量删除文章信息
	 * @param ids 文章的ids
	 */
	void deleteArticle(int[] ids);
	
}
