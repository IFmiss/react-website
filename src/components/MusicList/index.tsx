import React, { useEffect } from 'react'
import classNames from 'classnames'
import './music-list.less'
import { MusicGroupList, MusicGroupLists } from './../../type'
import { PROJECT_NAME } from '../../config/constance'
import { artists, artist } from './../../type'
import { parseDuraiton,
         formatMusicArtists,
         clipImage,
         formatMusicLists,
         getUrlById } from './../../utils/music'
import { getMusicDetailById, checkMusicById } from './../../pages/Music/action'
import DAudio from './../DAudio'

interface IMusicListProps {
  list: MusicGroupList;
  addMusicQueue: () => void;
}

const MusicList = (props: IMusicListProps) => {
  const classString = classNames({
    [`play`]: true,
    [`${PROJECT_NAME}-music-list`]: true,
  })
  useEffect(() => {
  }, [props.list])

  const handlePlay = async () => {
    const { list } = props
    await checkMusicById(list.id)
    const { songs : musicDetail } = await getMusicDetailById(list.id) as any
    const formatDetail = formatMusicLists(musicDetail)

    DAudio.start({
      id: list.id,
      url: getUrlById(list.id),
      coverUrl: clipImage(formatDetail[0].album.picUrl),
      name: list.name,
      singer: formatMusicArtists(list.artists)
    })

    // 添加播放列表
    props.addMusicQueue()
  }
  return (
    <div className={classString}>
      <h3 className={`${`${PROJECT_NAME}-music-list`}-name name`}>
        {props.list.name}
        <div className="config">
          <span onClick={handlePlay}>播放</span>
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
