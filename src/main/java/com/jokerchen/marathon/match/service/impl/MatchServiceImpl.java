package com.jokerchen.marathon.match.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jokerchen.base.constant.Constant;
import com.jokerchen.marathon.match.mapper.MatchMapper;
import com.jokerchen.marathon.match.model.Match;
import com.jokerchen.marathon.match.service.MatchService;

/**
 * 赛事管理逻辑层实现类
 * 
 * @author joker 2017-10-28
 */
@Service
public class MatchServiceImpl implements MatchService {

	@Autowired
	private MatchMapper matchMapper;

	/**
	 * 通过条件查找赛事信息
	 * 
	 * @param match
	 *            赛事信息
	 * @return
	 */
	public List<Match> findMatch(Match match) {
		return matchMapper.findMatch(match);
	}

	/**
	 * 保存赛事信息
	 * 
	 * @param match
	 *            要保存的赛事信息
	 */
	public void saveMatch(Match match) {
		if (match.getId() != 0) {
			matchMapper.updateMatch(match);
		} else {
			match.setStatus(Constant.DATA_STATUS_ENABLE);
			matchMapper.addMatch(match);
		}
	}

	/**
	 * 批量删除数据字典
	 * 
	 * @param ids
	 *            数据字典的ids
	 */
	public void deleteMatch(int[] ids) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ids", ids);
		map.put("status", Constant.DATA_STATUS_DELETE);
		matchMapper.deleteMatch(map);
	}

	/**
	 * 通过id获取赛事信息
	 * @param id
	 * @return
	 */
	public Match findMatchById(int id) {
		Match match = new Match();
		match.setId(id);
		List<Match> list = matchMapper.findMatch(match);
		if (list != null && list.size() > 0) {
			return list.get(0);
		} else {
			return null;
		}
	}
}
