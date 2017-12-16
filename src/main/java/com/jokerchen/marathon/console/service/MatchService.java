package com.jokerchen.marathon.console.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.jokerchen.marathon.console.model.Match;
import com.jokerchen.marathon.console.model.MatchEvent;

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
	 * @param matchItem 比赛类型
	 * @param imgFile 赛事logo
	 */
	public void saveMatch(Match match,String matchItem,MultipartFile imgFile) throws IOException ;
	
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
	
	/**
	 * 通过matchId获取子项目信息
	 * @param matchId
	 * @return
	 */
	public List<MatchEvent> findMatchEvent(int matchId);
	
}
