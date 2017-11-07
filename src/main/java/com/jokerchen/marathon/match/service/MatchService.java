package com.jokerchen.marathon.match.service;

import java.util.List;

import com.jokerchen.marathon.match.model.Match;

/**
 * 赛事管理逻辑接口
 * @author joker
 * 2017-10-28
 */
public interface MatchService {

	/**
	 * 通过条件查找赛事信息
	 * @param match 赛事信息
	 * @return
	 */
	public List<Match> findMatch(Match match);
	
	/**
	 * 保存赛事信息
	 * @param match 要保存的赛事信息
	 */
	public void saveMatch(Match match);
	
	/**
	 * 批量删除赛事信息
	 * @param ids 赛事信息的ids
	 */
	public void deleteMatch(int[] ids);
	
	/**
	 * 通过id获取赛事信息
	 * @param id
	 * @return
	 */
	public Match findMatchById(int id);
	
}
