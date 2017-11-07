package com.jokerchen.marathon.match.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.jokerchen.marathon.match.model.Match;

/**
 * 赛事管理持久层接口
 * @author joker
 * 2017-10-28
 */
@Repository("matchMapper")
public interface MatchMapper {

	/**
	 * 通过条件查找赛事信息
	 * @param match 赛事信息
	 * @return
	 */
	public List<Match> findMatch(Match match);
	
	/**
	 * 新增赛事信息
	 * @param match 要新增的赛事信息
	 */
	public void addMatch(Match match);

	/**
	 * 修改赛事信息
	 * @param match 
	 */
	public void updateMatch(Match match);
	
	/**
	 * 批量删除赛事信息
	 * @param ids 赛事信息的ids
	 */
	public void deleteMatch(Map<String,Object> map);
}
