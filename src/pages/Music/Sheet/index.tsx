import React, { useState } from 'react'
import MenuBar from './../../../components/MenuBar'
import classNames from 'classnames'
import { PROJECT_NAME } from '../../../config/constance'
import * as UrlUtils from '@dw/d-utils/lib/urlUtils'
import { MUSCI_MENU } from './../../../config/music'
import { IMenuSub } from './../../../components/MenuBar'
import { MUSIC_SHEET_TYPE } from './../../../enum'
import SheetGroup from './../../../components/SheetGroup'

interface MusicSheetProps {}

const MusicSheet = (props: MusicSheetProps) => {
  const classString = classNames({
    [`${PROJECT_NAME}-music-sheet`]: true
  })
  const { cat } = UrlUtils.parseUrl(decodeURIComponent(location.href))

  const getType = () => {
    if (cat) {
      const arr: any[] = MUSCI_MENU['sub'].filter((item: IMenuSub) => item.name === cat)
      return arr.length ? arr[0].category : MUSIC_SHEET_TYPE.ALL
    }
    return MUSIC_SHEET_TYPE.ALL
  }

  let [sheetType, setSheetType] = useState(() => getType())

  const checkMusicType = (t: number) => {
    setSheetType(sheetType = t)
  }

  console.log(props)
  return(
    <div className={classString}>
      <MenuBar menuType={sheetType} cat={cat} checkMusicType={checkMusicType} {...props}/>
      <SheetGroup/>
    </div>
  )
}

export default MusicSheet
