import React, { useEffect, useMemo } from 'react'
import classNames from 'classnames'
import './music-list.less'
import { MusicGroupList, MusicGroupLists } from './../../type'
import { PROJECT_NAME } from '../../config/constance'
import { artists, artist } from './../../type'
import { parseDuraiton,
         formatMusicArtists,
         clipImage,
         formatMusicLists,
         getUrlById,
         getPlayMuiscList } from './../../utils/music'
import { getMusicDetailById, checkMusicById } from './../../pages/Music/action'
import DAudio from './../DAudio'
import store from '../../store';

interface IMusicListProps {
  list: MusicGroupList;
  index: number;
  addMusicQueue: (index: number) => void;
}

const MusicList = (props: IMusicListProps) => {
  const memoPlay = useMemo(() => (store.musicStore.currentList && store.musicStore.currentList.id && props.index === store.musicStore.musicPlayIndex &&
  props.list.id === store.musicStore.currentList.id), [props.index, props.list.id])

  const classString = classNames({
    [`play`]: memoPlay,
    [`${PROJECT_NAME}-music-list`]: true,
  })
  useEffect(() => {
  }, [props.list])

  const handlePlay = async () => {
    const list: MusicGroupList = props.list
    const musicList = await getPlayMuiscList(list)

    DAudio.start(musicList)

    // 添加播放列表
    props.addMusicQueue(props.index)
  }
  return (
    <div className={classString}>
      <h3 className={`${`${PROJECT_NAME}-music-list`}-name name`}>
        {props.list.name}
        <div className="config">
          <span onClick={handlePlay}>播放</span>
          <a href={getUrlById(props.list.id)} target="_blank" className="download">下载</a>
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
