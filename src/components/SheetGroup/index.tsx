import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from '../../config/constance'
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
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [data, setData] = useState(arr)

  useEffect(() => {
    const t = setTimeout(() => {
      setData(
        data.concat(arr)
      )
    }, 3000)

    return function remove () {
      clearTimeout(t)
    }
  }, [])
  
  console.log(props.lists)
  return (
    <div className={classString}>
      <TransitionGroup>
        {
          props.lists.map((item: any, index: number) => (
            <CSSTransition  in={start}
                          key={index}
                          timeout={300 + index * 200}
                          classNames="side-up-fade"
                          appear={true}
                          unmountOnExit={false}>
              <SheetList list={item}/>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </div>
  )
}

export default SheetGroup
