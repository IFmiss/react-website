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
    [`play`]: true,
    [`${PROJECT_NAME}-music-list`]: true,
  })
  useEffect(() => {
    console.log(props.list)
  }, [props.list])

  const handlePlay = () => {
    // const 
  }
  console.log('listlistlistlist', props.list)
  return (
    <div className={classString} onClick={handlePlay}>
      <h3 className={`${`${PROJECT_NAME}-music-list`}-name name`}>
        {props.list.name}
        <div className="config">
          <span>播放</span>
          <span>下载</span>
        </div>
      </h3>
      <div className={`${`${PROJECT_NAME}-music-list`}-artists`}>
        {
          props.list.artists && props.list.artists.map((artist: artist, index: number) => 
            <span className={`${`${PROJECT_NAME}-music-list`}-artists-list`} key={artist.id}>{artist.name}</span>
          )
        }
      </div>
      <div className={`${`${PROJECT_NAME}-music-list`}-album`}>{props.list.album.name}</div>
      <div className={`${`${PROJECT_NAME}-music-list`}-durantion`}>{parseDuraiton(props.list.duration)}</div>
    </div>
  )
}

export default MusicList
