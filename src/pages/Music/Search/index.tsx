import React from 'react'
import className from 'classnames'
import { PROJECT_NAME } from '../../../config/constance'
import './search.less'
import MusicListGroup from './../../../components/MusicListGroup'

const MusicSearch = () => {
  const classString = className({
    [`${PROJECT_NAME}-music-search`]: true
  })
  return(
    <section className={classString}>
      <input className={`${classString}-input`} type="text" placeholder="想听的音乐？"/>
      {/* <MusicListGroup/> */}
    </section>
  )
}

export default MusicSearch
