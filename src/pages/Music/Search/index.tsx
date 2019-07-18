import React, { useRef, useLayoutEffect, useState, useMemo, useCallback } from 'react'
import className from 'classnames'
import { PROJECT_NAME, MUSIC_SEARCH_DEFAULT_LISMIT } from '../../../config/constance'
import './search.less'
import MusicListGroup from './../../../components/MusicListGroup'
import { MUSIC_SEARCH_INPUT_TYPE } from './../../../enum'
import { isEmptyStr } from '@dw/d-utils/lib/expUtils/index'
import LoadingTips from '../../../components/LoadingTips';
import * as MusicFetch from './../action'
import { debounce } from '@dw/d-utils/lib/genericUtils'

const MusicSearch = () => {
  const searchInput: any = useRef(null)

  const [loading, setLoading] = useState(false)
  const [offset, setOffset] = useState(0)
  const [searchLists, setSearchList] = useState([])

  useLayoutEffect(() => {
    searchInput.current.focus()
  }, [searchInput])

  const memoInputStatus = useMemo(() => {
    return searchLists.length > 0
  }, [searchLists])

  const handleSearch = debounce(async (e: any) => {
    await getSearchLists()
  }, 1500, false)

  const loadMoreInfo = () => {
    if (loading) return
    setOffset((offset) => offset = offset + MUSIC_SEARCH_DEFAULT_LISMIT)
  }

  const getSearchLists = useCallback(async () => {
    const keywords = searchInput.current.value
    console.log(isEmptyStr(keywords))
    if (!isEmptyStr(keywords)) {
      return
    }

    setLoading((loading) => loading = true)
    const res: any = await MusicFetch.getSearchLists(keywords, offset)
    setSearchList((searchLists) => searchLists = searchLists.concat(Array.isArray(res.result.songs) ? res.result.songs : []))
    setLoading((loading) => loading = false)
  }, [])

  const classString = className({
    [`${PROJECT_NAME}-music-search`]: true,
    [`input-active`]: memoInputStatus
  })

  return(
    <section className={classString}>
      <div className={`${PROJECT_NAME}-music-search-entry`}>
        <input className={`${PROJECT_NAME}-music-search-entry-input`} 
                type="text"
                placeholder="想听的音乐？"
                onInput={handleSearch}
                ref={searchInput}/>
      </div>
      <MusicListGroup lists={searchLists}/>
      <LoadingTips show={loading}/>
    </section>
  )
}

export default MusicSearch
