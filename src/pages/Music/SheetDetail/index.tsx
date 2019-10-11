import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import './sheet-detail.less'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PROJECT_NAME, MUSIC_SEARCH_DEFAULT_LIMIT } from '../../../config/constance'
import LazyImg from './../../../components/LazyImg'
import MusicListGroup from './../../../components/MusicListGroup'
import LoadingTips from './../../../components/LoadingTips'
import { MusicPlayType } from './../../../store/types'
import { sheetDetailById } from './../action'
import * as UrlUtils from 'd-utils/lib/urlUtils'
import { formatMusicLists } from './../../../utils/music'
import Icon from './../../../components/Icon'
import { RouteChildrenProps } from 'react-router';

const SheetDetail: React.FC<RouteChildrenProps> = (props) => {
  const classString = classNames({
    [`${PROJECT_NAME}-music-sheet-detail`]: true
  })
  const [sheetDetailLists, setSheetDetailLists] = useState<any>([])
  const [detialInfo, setDetailInfo] = useState<any>({})
  const sheetId = UrlUtils.parseUrl(decodeURIComponent(location.href)).sheetId

  useEffect(() => {
    const getSheetLists = async () => {
      const { playlist } = await sheetDetailById(sheetId) as any
      setSheetDetailLists((sheetDetailLists: any) => sheetDetailLists = formatMusicLists(playlist.tracks))
      setDetailInfo((detialInfo: any) => detialInfo = {
        coverImgUrl: playlist.coverImgUrl,
        description: playlist.description,
        name: playlist.name,
        id: playlist.id,
        trackCount: playlist.trackCount,
        playCount: playlist.playCount,
      })
    }
    getSheetLists()
  }, [])

  const closeDetial = () => {
    props.history.goBack()
  }

  return (
    <section className={classString}>
      {
        sheetDetailLists.length ? (
          <div>
            <div className={`${classString}-header`}>
              <div className={`${classString}-header-avatar`}>
                <LazyImg src={`${detialInfo.coverImgUrl}?param=200y200`}/>
              </div>
              <div className={`${classString}-header-desc`}>
                <h3 className="title">{detialInfo.name}</h3>
                <div className="info" title={detialInfo.description}>{detialInfo.description}</div>
                <div className="count">
                  <span>共 { detialInfo.trackCount } 首音乐</span>
                  <span>{ detialInfo.playCount } 人听过</span>
                </div>
              </div>
              <div className="close-area" onClick={closeDetial}>
                <Icon svgId="close" color="#aaaaaa"></Icon>
              </div>
            </div>
            <div className={`${classString}-lists`}>
                  <MusicListGroup lists={sheetDetailLists}
                                  transition={false}
                                  type={MusicPlayType.SHEET}/>
              }
            </div>
          </div>
          ) : (
            <LoadingTips show={!sheetDetailLists.length} text="加载中..."/>
          )
      }
    </section>
  )
}

export default SheetDetail
