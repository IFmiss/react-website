import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import { MUSCI_MENU } from './../../config/music'
import * as UrlUtils from 'd-utils/lib/urlUtils'
import { MUSIC_SHEET_TYPE } from './../../enum'
import './menu-bar.less'
import { controller } from './../../utils/fetch'
// interface IMenuBar {
//   lists: []
// }
export interface IMenuSub {
  name: string;
  type: number;
  category: number;
  hot: boolean;
}

interface IMenuProps {
  menuType: number
  cat: string
  history?: any
  checkMusicType: (t: number) => void
}

const MenuBar = (props: IMenuProps) => {
  let [catLists, setCatLists] = useState([{}])

  // 获取分类信息
  const getCatLists = () => {
    return MUSCI_MENU['sub'].filter((item: IMenuSub) => item.category === props.menuType)
  }

  const setCatListsFn = () => {
    setCatLists(() => catLists = getCatLists())
  }

  const checkMusicType = (t: number) => {
    controller.abort()
    props.checkMusicType(t)
  }

  const selectMusicSheetType = (c: string) => {
    props.history.push(`${props.history.location.pathname}?cat=${c}`)
  }

  useEffect(() => {
    setCatListsFn()
  }, [props.menuType])

  const classString = classNames({
    [`${PROJECT_NAME}-menu-bar`]: true
  })
  return (
    <div className={classString}>
      <ul className={`${classString}-main`}>
        <li className={props.menuType === MUSIC_SHEET_TYPE.ALL ? `${classString}-main-list active` : `${classString}-main-list`}
            onClick={checkMusicType.bind(null, MUSIC_SHEET_TYPE.ALL)}>
          全部
        </li>
        {
          Object.entries(MUSCI_MENU['categories']).map((item: string[], index: number) => 
            <li className={props.menuType === Number(item[0]) ? `${classString}-main-list active` : `${classString}-main-list`}
                key={index}
                onClick={checkMusicType.bind(null, (Number(item[0])))}>
              {
                item[1]
              }
            </li>
          )
        }
      </ul>
      <ul className={`${classString}-cat`}>
        {
          catLists.map((item: IMenuSub | any, index: number) => 
            <li className={props.cat === item.name ? `${classString}-cat-list active` : `${classString}-cat-list`}
                key={`${index}-${props.cat}`}
                onClick={selectMusicSheetType.bind(null, item.name)}
              >
              {item.name}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default MenuBar
