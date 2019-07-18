import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import './music-list-group.less'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PROJECT_NAME, MUSIC_SEARCH_DEFAULT_LISMIT } from '../../config/constance'
import MusicList from './../MusicList'

interface IMusicListsGroupProps {
  lists: any;
}

const MusicListGroup = (props: IMusicListsGroupProps) => {
  const [start, setStart] = useState(false)
  const classString = classNames({
    [`${PROJECT_NAME}-music-list`]: true
  })
  useEffect(() => {
  }, [props.lists])
  return (
    <div className={classString}>
      <TransitionGroup transitionleave="false">
        {
          props.lists.map((item: any, index: number) => (
            <CSSTransition  in={start}
                            key={item.id}
                            timeout={
                              {
                                enter: 300 + (index % MUSIC_SEARCH_DEFAULT_LISMIT) * 200,
                                exit: 0
                              }
                            }
                            classNames="side-up-fade"
                            appear={false}
                            unmountOnExit={false}>
              <MusicList list={item}/>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </div>
  )
}

export default MusicListGroup
