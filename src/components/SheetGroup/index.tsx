import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME, MUSIC_SHEET_DEFAULT_LIMIT } from '../../config/constance'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SheetList from './../SheetList'
import { SheetGroupLists, SheetGroupList } from './../../type'
import './sheet-group.less'

interface ISheetGroup {
  lists: SheetGroupLists;
}

const SheetGroup = (props: ISheetGroup) => {
  const classString = classNames({
    [`${PROJECT_NAME}-sheet-group`]: true,
  })

  const [start, setStart] = useState(false)

  useEffect(() => {
  }, [props.lists])
  
  return (
    <div className={classString}>
      <TransitionGroup>
        {
          props.lists.map((item: any, index: number) => (
            <CSSTransition  in={start}
                          key={index}
                          timeout={300 + (index % MUSIC_SHEET_DEFAULT_LIMIT) * 200}
                          classNames="side-up-fade"
                          appear={true}
                          unmountOnExit={true}>
              <SheetList list={item}/>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </div>
  )
}

export default SheetGroup
