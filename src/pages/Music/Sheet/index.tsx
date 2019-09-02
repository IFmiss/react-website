import React, { useState, useEffect, useMemo, useLayoutEffect, useCallback } from 'react'
import MenuBar from './../../../components/MenuBar'
import classNames from 'classnames'
import { PROJECT_NAME, MUSIC_SHEET_DEFAULT_LIMIT } from '../../../config/constance'
import * as UrlUtils from 'd-utils/lib/urlUtils'
import { MUSCI_MENU } from './../../../config/music'
import { IMenuSub } from './../../../components/MenuBar'
import { MUSIC_SHEET_TYPE } from './../../../enum'
import SheetGroup from './../../../components/SheetGroup'
import * as MusicFetch from './../action'
import './sheet.less'
import { controller } from './../../../utils/fetch'
import useScroll from './../../../use/useScroll'
import useLoadingTips from './../../../use/useLoadingTips'
import LoadingTips from '../../../components/LoadingTips';
import PromiseUtils from 'd-utils/lib/promiseUtils'

interface MusicSheetProps {
  history: any;
}

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

  const [sheetType, setSheetType] = useState(() => getType())

  const [sheetLists, setSheetLists] = useState([])

  const [offset, setOffset] = useState(0)

  const loadingTipsFn = useLoadingTips(false, '加载中')

  const loadMoreInfo = () => {
    if (loadingTipsFn.loading) return
    setOffset((offset) => offset = offset + MUSIC_SHEET_DEFAULT_LIMIT)
  }

  useScroll(document.getElementById('dw-react-web-container'), loadMoreInfo)

  const getSheetLists = useCallback(async () => {
    loadingTipsFn.showLoading()
    const res: any = await MusicFetch.getSheetLists(cat, offset)
    setSheetLists((sheetLists) => sheetLists = sheetLists.concat(res.playlists))
    loadingTipsFn.hideLoading()
  }, [cat, offset])

  const initDefaultConfig = (() => {
    setOffset((offset) => offset = 0)
    setSheetLists((sheetLists) => sheetLists = [])
  })

  useEffect(() => {
    getSheetLists()
  }, [getSheetLists])

  useLayoutEffect(() => {
    initDefaultConfig()
  }, [cat])

  const checkMusicType = (t: number) => {
    setSheetType((sheetType: number) => sheetType = t)
  }

  return(
    <section className={classString}>
      <MenuBar menuType={sheetType} cat={cat} checkMusicType={checkMusicType} {...props}/>
      <SheetGroup lists={sheetLists} history={props.history}/>
      <LoadingTips show={loadingTipsFn.loading}/>
    </section>
  )
}

export default MusicSheet
