import React, { useState, useEffect, useMemo, useCallback } from 'react'
import MenuBar from './../../../components/MenuBar'
import classNames from 'classnames'
import { PROJECT_NAME } from '../../../config/constance'
import * as UrlUtils from '@dw/d-utils/lib/urlUtils'
import { MUSCI_MENU } from './../../../config/music'
import { IMenuSub } from './../../../components/MenuBar'
import { MUSIC_SHEET_TYPE } from './../../../enum'
import SheetGroup from './../../../components/SheetGroup'
import * as MusicFetch from './../action'

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

  let [sheetLists, setSheetLists] = useState([])

  let [limit, setLimit] = useState(20)

  const getSheetLists = useCallback(async () => {
    const res: any = await MusicFetch.getSheetLists(cat, limit)
    setSheetLists(() => sheetLists = res.playlists)
  }, [cat, limit])

  useEffect(() => {
    getSheetLists()
    setTimeout(() => {
      setLimit(() => limit = 40)
    }, 3000)
  }, [getSheetLists, limit])

  const checkMusicType = (t: number) => {
    setSheetType((sheetType: number) => sheetType = t)
  }

  console.log(sheetLists)
  return(
    <div className={classString}>
      <MenuBar menuType={sheetType} cat={cat} checkMusicType={checkMusicType} {...props}/>
      <SheetGroup lists={sheetLists}/>
    </div>
  )
}

export default MusicSheet
