import React, { useState } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import './sheet-list.less'
import LazyImg from './../LazyImg'

interface ISheetListProps {
  list: any;
  history: any;
}

const SheetList = (props: ISheetListProps) => {
  const toDetail = () => {
    console.log(props)
    props.history.push(`/music/sheetDetail?sheetId=${props.list.id}`)
  }

  const classString = classNames({
    [`${PROJECT_NAME}-sheet-list`]: true,
  })

  return (
    <div className={classString} onClick={toDetail}>
      <div className={`${PROJECT_NAME}-sheet-list-content`}>
        <div className={`${PROJECT_NAME}-sheet-list-content-top`}>
          <LazyImg src={`${props.list.coverImgUrl}?param=250y250`} selfClassName="sheet-list-lazy-img"/>
        </div>
        <p className={`${PROJECT_NAME}-sheet-list-content-title`}>
          {
            `${props.list.name}`
          }
        </p>
      </div>
    </div>
  )
}

export default SheetList
