import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import './sheet-detail.less'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PROJECT_NAME, MUSIC_SEARCH_DEFAULT_LISMIT } from '../../../config/constance'
import LazyImg from './../../../components/LazyImg'
import MusicListGroup from './../../../components/MusicListGroup'
import LoadingTips from './../../../components/LoadingTips'
import { MusicPlayType } from './../../../store/types'
import { sheetDetailById } from './../action'
import * as UrlUtils from 'd-utils/lib/urlUtils'
import { formatMusicLists } from './../../../utils/music'

const SheetDetail: React.FC = (props) => {
  const classString = classNames({
    [`${PROJECT_NAME}-music-sheet-detail`]: true
  })
  const [sheetDetailLists, setSheetDetailLists] = useState<any>([])
  const sheetId = UrlUtils.parseUrl(decodeURIComponent(location.href)).sheetId

  useEffect(() => {
    const getSheetLists = async () => {
      const { playlist } = await sheetDetailById(sheetId) as any
      setSheetDetailLists((sheetDetailLists: any) => sheetDetailLists = formatMusicLists(playlist.tracks))
    }
    getSheetLists()
  }, [])

  return (
    <section className={classString}>
      <div className={`${classString}-header`}>
        <div className={`${classString}-header-avatar`}>
          <LazyImg src=""/>
        </div>
        <div className={`${classString}-header-desc`}>

        </div>
      </div>
      <div className={`${classString}-lists`}>
        {
          sheetDetailLists.length ? (
            <MusicListGroup lists={sheetDetailLists}
                            transition={false}
                            type={MusicPlayType.RANK}/>
          ) : (
            <LoadingTips show={!sheetDetailLists.length} text="加载中..."/>
          )
        }
      </div>
    </section>
  )
}

export default SheetDetail
