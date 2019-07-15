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

  const [inputStatus, setInputStatus] = useState(MUSIC_SEARCH_INPUT_TYPE.DEFAULT)
  const [inputVal, setInputVal] = useState('')
  const [loading, setLoading] = useState(false)
  const [offset, setOffset] = useState(0)
  const [searchLists, setSearchList] = useState([])

  useLayoutEffect(() => {
    searchInput.current.focus()
  }, [searchInput])

  const setInputStatusFn = () => {
    setInputStatus((inputStatus) => inputStatus = inputStatus === MUSIC_SEARCH_INPUT_TYPE.DEFAULT ? 
                                    MUSIC_SEARCH_INPUT_TYPE.ACTIVE : MUSIC_SEARCH_INPUT_TYPE.DEFAULT)
  }

  const memoInputStatus = useMemo(() => {
    return isEmptyStr(inputVal)
  }, [inputVal])

  const selfLog = () => {
    console.log('test log')
  }

  const handleSearch = (e: any) => {
    e.persist()
    setInputVal((inputVal) => inputVal = e.target.value)
  }

  const loadMoreInfo = () => {
    if (loading) return
    setOffset((offset) => offset = offset + MUSIC_SEARCH_DEFAULT_LISMIT)
  }

  const getSearchLists = useCallback(async () => {
    setLoading((loading) => loading = true)
    const res: any = await MusicFetch.getSearchLists(offset)
    setSearchList((searchLists) => searchLists = searchLists.concat(res.playlists))
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
                onChange={debounce(handleSearch, 3000, true)}
                ref={searchInput}/>
      </div>
      <MusicListGroup lists={searchLists}/>
      <LoadingTips show={loading}/>
      <button onClick={setInputStatusFn}>点击toggle{inputVal}</button>
    </section>
  )
}

export default MusicSearch
