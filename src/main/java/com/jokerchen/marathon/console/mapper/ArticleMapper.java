package com.jokerchen.marathon.console.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.jokerchen.marathon.console.model.Article;

/**
 * 文章信息管理
 * @author joker
 * 2017-12-09
 */
@Repository("articleMapper")
public interface ArticleMapper {

	/**
	 * 查询文章信息
	 * @param article
	 */
	List<Article> findArticle(Article article);
	
	/**
	 * 新增文章信息
	 * @param article
	 */
	void addArticle(Article article);

	/**
	 * 修改文章信息
	 * @param article
	 */
	void updateArticle(Article article);
	
	/**
	 * 通过id查询文章信息
	 * @param id
	 * @return
	 */
	Article findArticleById(@Param("id")int id);
	
	/**
	 * 批量删除文章信息
	 * @param ids 文章信息的ids
	 */
	void deleteArticle(Map<String,Object> map);
	
}
