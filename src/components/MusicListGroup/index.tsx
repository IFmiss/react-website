import React from 'react'
import MusicList from './../MusicList'
import classNames from 'classnames'
import './music-list-group.less'

interface IMusicListsGroupProps {
  lists: any;
}

const MusicListGroup = (props: IMusicListsGroupProps) => {
  return (
    <div>
      <MusicList></MusicList>
    </div>
  )
}

export default MusicListGroup
