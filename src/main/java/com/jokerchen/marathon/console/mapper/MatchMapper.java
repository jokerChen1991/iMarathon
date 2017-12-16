package com.jokerchen.marathon.console.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.jokerchen.marathon.console.model.Match;
import com.jokerchen.marathon.console.model.MatchEvent;

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
	 * 通过matchId获取子项目信息
	 * @param matchId
	 * @return
	 */
	public List<MatchEvent> findMatchEvent(int matchId);
	
	/**
	 * 通过id查询比赛信息
	 * @param id
	 * @return
	 */
	public Match findMatchById(int id);
	
	/**
	 * 新增赛事信息
	 * @param match 要新增的赛事信息
	 */
	public int addMatch(Match match);

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
	
	/**
	 * 删除子项目
	 * @param matchId
	 */
	public void deleteMatchEvent(Integer matchId);
	
	/**
	 * 添加字项目
	 * @param event
	 */
	public void addMatchEvent(MatchEvent event);
}
