import React, { useRef, useLayoutEffect, useState } from 'react'
import className from 'classnames'
import { PROJECT_NAME } from '../../../config/constance'
import './search.less'
import MusicListGroup from './../../../components/MusicListGroup'
import { MUSIC_SEARCH_INPUT_TYPE } from './../../../enum'

const MusicSearch = () => {
  const searchInput: any = useRef(null)

  const [inputStatus, setInputStatus] = useState(MUSIC_SEARCH_INPUT_TYPE.DEFAULT)
  const [inputVal, setInputVal] = useState('')

  useLayoutEffect(() => {
    searchInput.current.focus()
  })

  const classString = className({
    [`${PROJECT_NAME}-music-search`]: true,
    [`input-active`]: inputStatus
  })

  const setInputStatusFn = () => {
    setInputStatus((inputStatus) => inputStatus = inputStatus === MUSIC_SEARCH_INPUT_TYPE.DEFAULT ? 
                                                  MUSIC_SEARCH_INPUT_TYPE.ACTIVE : MUSIC_SEARCH_INPUT_TYPE.DEFAULT)
  }

  const handleSearch = (e: any) => {
    // setInputVal
    console.log(e)
  }

  return(
    <section className={classString}>
      <div className={`${PROJECT_NAME}-music-search-entry`}>
        <input className={`${PROJECT_NAME}-music-search-entry-input`} 
                type="text"
                placeholder="想听的音乐？"
                onChange={handleSearch}
                ref={searchInput}/>
      </div>
      {/* <MusicListGroup/> */}
      <button onClick={setInputStatusFn}>点击toggle{inputVal}</button>
    </section>
  )
}

export default MusicSearch
