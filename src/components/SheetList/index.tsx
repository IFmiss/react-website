import React, { useState } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import './sheet-list.less'

interface ISheetListProps {
  list: any
}

const SheetList = (props: ISheetListProps) => {
  const classString = classNames({
    [`${PROJECT_NAME}-sheet-list`]: true,
  })

  return (
    <div className={classString}>
      <div className={`${PROJECT_NAME}-sheet-list-content`}>
        <div className={`${PROJECT_NAME}-sheet-list-content-top`}>
          <img className={`${PROJECT_NAME}-sheet-list-content-top-img`} src={props.list.coverImgUrl}/>
        </div>
        <p className={`${PROJECT_NAME}-sheet-list-content-title`}>
          {
            `${props.list.name}哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈啊哈哈哈`
          }
        </p>
      </div>
    </div>
  )
}

export default SheetList
