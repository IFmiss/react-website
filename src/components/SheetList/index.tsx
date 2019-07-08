import React from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import './sheet-list.less'

const SheetList = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-sheet-list`]: true,
  })

  return (
    <div className={classString}>this is sheet list</div>
  )
}

export default SheetList
