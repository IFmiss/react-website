import React, { useEffect, useState, useCallback } from 'react'
import { getRankLists } from './../action'
import className from 'classnames'
import { PROJECT_NAME, MUSIC_SEARCH_DEFAULT_LISMIT, MUSIC_RANK_TYPE } from '../../../config/constance'
import MusicListGroup from './../../../components/MusicListGroup'
import LoadingTips from '../../../components/LoadingTips';
import * as UrlUtils from 'd-utils/lib/urlUtils'
import DAudio from './../../../components/DAudio';

const MusicRank = () => {
  const [offset, setOffset] = useState(0)
  const [rankLists, setRankLists] = useState([])
  const [loadingText, setLoadingText] = useState('加载中...')
  const [loading, setLoading] = useState(false)
  const [rankType, setRankType] = useState(UrlUtils.parseUrl(decodeURIComponent(location.href)).keywords) || '1'

  const rankListDispatch = useCallback(async (rankId: string = '1') => {
    await getRankLists(rankId)
  }, [offset])

  useEffect(() => {
    rankListDispatch()
  }, [])

  const classString = className({
    [`${PROJECT_NAME}-music-rank`]: true
  })
  const classRankGroup = className({
    [`${PROJECT_NAME}-music-rank-group`]: true
  })
  console.log(Object.entries(MUSIC_RANK_TYPE))
  
  const handlePlay = () => {
    DAudio.list
    console.log(DAudio.list)
  }
  return(
    <div className={classString}>
      <div className={`${classString}-type-lists`}>
        {
          Object.entries(MUSIC_RANK_TYPE).map((item, index) => (
            <div key={item[0]} onClick={handlePlay}>{item[1]}</div>
          ))
        }
      </div>
      <div className={classRankGroup}>
        <MusicListGroup lists={rankLists}/>
        <LoadingTips show={loading} text={loadingText}/>
      </div>
    </div>
  )
}

export default MusicRank
