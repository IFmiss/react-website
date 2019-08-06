import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import LogUtils from 'd-utils/lib/logUtils'
import './notice.less'

export enum NoticeType {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  DEFAULT = 'default'
}

export interface INoticeProps {
  type: NoticeType;
  text: string | number;
}

const Notice: React.FC<INoticeProps> = (props) => {
  const { type, text } = props
  const classString = classNames({
    [`${PROJECT_NAME}-comp-notice`]: true,
    [`notice-${type}`]: true
  })
  return (
    <div className={classString}>
      <span className="notice-text">{text}</span>
    </div>
  )
}

export default Notice
