import React, { useEffect } from 'react'
import classNames from 'classnames'
import './music-list.less'
import { MusicGroupList, MusicGroupLists } from './../../type'
import { PROJECT_NAME } from '../../config/constance'
import { artists, artist } from './../../type'
import { parseDuraiton } from './../../utils/music'

interface IMusicListProps {
  list: MusicGroupList;
}

const MusicList = (props: IMusicListProps) => {
  const classString = classNames({
    [`${PROJECT_NAME}-music-list`]: true
  })
  useEffect(() => {
    console.log(props.list)
  }, [props.list])

  const handlePlay = () => {
    // const 
  }
  return (
    <div className={classString} onClick={handlePlay}>
      <h3 className={`${classString}-name`}>{props.list.name}</h3>
      <p className={`${classString}-artists`}>
        {
          props.list.artists.map((artist: artist, index: number) => 
            <span className={`${classString}-artists-list`} key={artist.id}>{artist.name}</span>
          )
        }
      </p>
      <p className={`${classString}-durantion`}>{parseDuraiton(props.list.duration)}</p>
    </div>
  )
}

export default MusicList
