import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import './music-list-group.less'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PROJECT_NAME, MUSIC_SEARCH_DEFAULT_LISMIT } from '../../config/constance'
import MusicList from './../MusicList'
import { MusicGroupList, MusicGroupLists } from './../../type'

interface IMusicListsGroupProps {
  lists: MusicGroupLists;
  transition: boolean;
}

const MusicListGroup = (props: IMusicListsGroupProps) => {
  const [start, setStart] = useState(false)
  const classString = classNames({
    [`${PROJECT_NAME}-music-list-group`]: true
  })

  const addMusicQueue = () => {
    
  }

  useEffect(() => {
  }, [props.lists])
  return (
    <div className={classString}>
      {
        props.transition ? (
          <TransitionGroup className={`${classString}-transition`} 
                        transitionleave="false">
            {
              props.lists.map((item: MusicGroupList, index: number) => (
                <CSSTransition  in={start}
                                key={item.id}
                                timeout={
                                  {
                                    enter: 300 + (index % MUSIC_SEARCH_DEFAULT_LISMIT) * 30,
                                    exit: 0
                                  }
                                }
                                classNames="side-up-fade"
                                appear={false}
                                unmountOnExit={false}>
                  <MusicList list={item} addMusicQueue={addMusicQueue}/>
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        ) : (
          <React.Fragment>
            {
              props.lists.map((item: MusicGroupList, index: number) => (
                <MusicList key={item.id} list={item} addMusicQueue={addMusicQueue}/>
              ))
            }
          </React.Fragment>
        )
      }
    </div>
  )
}

MusicListGroup.defaultProps = {
  lists: [],
  transition: true
}

export default MusicListGroup
