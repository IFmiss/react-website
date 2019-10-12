import React, { useRef, useLayoutEffect, useState, useMemo, useCallback, useEffect } from 'react'
import className from 'classnames'
import { PROJECT_NAME, MUSIC_SEARCH_DEFAULT_LIMIT } from '../../../config/constance'
import './search.less'
import MusicListGroup from './../../../components/MusicListGroup'
import { isEmptyStr } from 'd-utils/lib/expUtils/index'
import LoadingTips from '../../../components/LoadingTips';
import * as MusicFetch from './../action'
import { parseUrl } from 'd-utils/lib/urlUtils'
import { MusicPlayType } from './../../../store/types'

import useScroll from './../../../use/useScroll'
import useLoadingTips from './../../../use/useLoadingTips'

interface MusicSearchProps {
  history: any;
}

const MusicSearch = (props: MusicSearchProps) => {
  const searchInput: any = useRef(null)
  const searchGroup: any = useRef(null)

  const [offset, setOffset] = useState(0)
  const [searchLists, setSearchList] = useState([])

  const [keywords, setKeywords] = useState(parseUrl(decodeURIComponent(location.href)).keywords)

  const loadingTipsFn = useLoadingTips(false, '搜索中...')

  const loadMoreInfo = () => {
    if (loadingTipsFn.loading) return
    setOffset((offset) => offset = offset + MUSIC_SEARCH_DEFAULT_LIMIT)
  }

  useLayoutEffect(() => {
    searchInput.current.focus()
  }, [searchInput])

  useScroll(searchGroup, loadMoreInfo)

  useEffect(() => {
    if (hasSearchList) {
      getSearchLists()
    } else {
      getSearchLists(true)
    }
  }, [keywords, offset])

  const hasSearchList = useMemo(() => {
    return searchLists.length > 0
  }, [searchLists])

  const handleSearch = (async (e: any) => {
    const event = e || window.event
    var code = event.keyCode || event.which || event.charCode
    if (code === 13) {
      const words = searchInput.current.value
      if (isEmptyStr(words) || words === keywords) {
        return
      }
      reset(words)
      props.history.replace(`/music/search?keywords=${words}`)
    }
  })

  const reset = (words: string) => {
    setSearchList((searchLists) => searchLists = [])
    setOffset((offset) => offset = MUSIC_SEARCH_DEFAULT_LIMIT)
    setKeywords((keywords: any) => keywords = words)
  }

  const getSearchLists = useCallback(async (isSearch = false) => {
    const keywords = searchInput.current.value
    if (isEmptyStr(keywords)) {
      return
    }

    loadingTipsFn.showLoading(isSearch ? '搜索中' : '加载中')

    const res: any = await MusicFetch.getSearchLists(keywords, offset)
    const loadLists = Array.isArray(res.result.songs) ? res.result.songs : []
    setSearchList((searchLists) => searchLists = searchLists.concat(loadLists))
    
    // 搜索之后为空的时候判断是否是没有数据 且是否是第一次搜索
    if (isSearch && loadLists.length === 0) {
      loadingTipsFn.showLoading(`未能搜索到关于 '${keywords}' 相关的各歌曲`)
      return
    }
    loadingTipsFn.hideLoading()
  }, [offset])

  const classString = className({
    [`${PROJECT_NAME}-music-search`]: true,
    [`input-active`]: keywords || hasSearchList
  })

  const classSearchGroup = className({
    [`${PROJECT_NAME}-music-search-group`]: true,
    [`show`]: hasSearchList
  })

  return(
    <section className={classString}>
      <div className={`${PROJECT_NAME}-music-search-entry`}>
        <input className={`${PROJECT_NAME}-music-search-entry-input`} 
                type="text"
                defaultValue={keywords}
                placeholder="想听的音乐？"
                onKeyDown={handleSearch}
                ref={searchInput}/>
      </div>
      <div className={classSearchGroup}
           ref={searchGroup}>
        <MusicListGroup lists={searchLists}
                        transition={false}
                        type={MusicPlayType.SEARCH}/>
        <LoadingTips show={loadingTipsFn.loading} text={loadingTipsFn.text}/>
      </div>
    </section>
  )
}

export default MusicSearch
