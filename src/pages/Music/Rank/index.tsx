import React, { useEffect, useState, useCallback } from 'react'
import { getRankLists } from './../action'
import className from 'classnames'
import { formatMusicLists } from './../../../utils/music'
import { PROJECT_NAME, MUSIC_SEARCH_DEFAULT_LIMIT, MUSIC_RANK_TYPE } from '../../../config/constance'
import MusicListGroup from './../../../components/MusicListGroup'
import LoadingTips from '../../../components/LoadingTips';
import * as UrlUtils from 'd-utils/lib/urlUtils'
import DAudio from './../../../components/DAudio';
import './rank.less'
import Notice from '../../../components/Notice'
import { MusicPlayType } from './../../../store/types'
import store from '../../../store';

const MusicRank = () => {
  const urlKeywords = UrlUtils.parseUrl(decodeURIComponent(location.href)).keywords
  const [showType, setType] = useState(false)
  const [rankLists, setRankLists] = useState<any[]>([])
  const [rankType, setRankType] = useState<string>(Object.values(MUSIC_RANK_TYPE).includes(urlKeywords) ? urlKeywords : '1')

  const rankListDispatch = useCallback(async (rankId: string = '1') => {
    const res: any = await getRankLists(rankId)
    setRankLists((rankLists) => rankLists = formatMusicLists(res.playlist.tracks))
  }, [rankType])

  useEffect(() => {
    rankListDispatch(rankType)
  }, [rankType])

  const classString = className({
    [`${PROJECT_NAME}-music-rank`]: true
  })
  const classRankGroup = className({
    [`${PROJECT_NAME}-music-rank-group`]: true
  })

  const classTypeList = className({
    [`${classString}-type-lists`]: true,
    ['active']: showType
  })
  
  const handlePlay = () => {
    DAudio.list
  }

  const showTypeList = () => {
    setType((showType) => showType = true)
  }

  const selectRankType = (typeId: string, e: any) => {
    e.stopPropagation()
    if (typeId === rankType) {
      setType((showType) => showType = false)
      return
    }
    setRankLists((rankLists) => rankLists = [])
    setRankType((rankType) => rankType = typeId)
    setType((showType) => showType = false)
  }

  const hideTypeList = () => {
    setType((showType) => showType = false)
  }
  return(
    <section className={classString}>
      <div className={`${classString}-type`}>
        <div className={classTypeList} onClick={hideTypeList}>
          <div className="content">
            {
              Object.entries(MUSIC_RANK_TYPE).map((item: any) => (
                <div key={item[0]}
                    className={rankType === item[0] ? 'type-list active' : 'type-list'}
                    onClick={selectRankType.bind(null, item[0])}>{item[1]}</div>
              ))
            }
          </div>
        </div>
        <div className={`${classString}-type-current`}>
          <span className="desc">分类: </span>
          <span className="info" onClick={showTypeList}>{MUSIC_RANK_TYPE[rankType]}</span>
        </div>
      </div>
      <div className={classRankGroup}>
        {
          rankLists.length ? (
            <MusicListGroup lists={rankLists}
                            transition={false}
                            type={MusicPlayType.RANK}/>
          ) : (
            <LoadingTips show={!rankLists.length} text="加载中..."/>
          )
        }
      </div>
    </section>
  )
}

export default MusicRank
